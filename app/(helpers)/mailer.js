import nodemailer from 'nodemailer';
import User from "@/app/(models)/userModel";
import bcryptjs from 'bcryptjs';

export const sendEmail = async({email, emailType, userId}) => {
    try {
        // Create a hashed token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);
        const encodedToken = encodeURIComponent(hashedToken);

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, 
                {verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000});
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, 
                {forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000});
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${encodedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${encodedToken}
            </p>`
        };
        console.log(3)
        const mailresponse = await transporter.sendMail(mailOptions);
        console.log(4)
        return mailresponse;

    } catch (error) {
        throw new Error(error.message);
    }
};
