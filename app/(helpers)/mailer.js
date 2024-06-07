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

        

        

    } catch (error) {
        
    }
};
