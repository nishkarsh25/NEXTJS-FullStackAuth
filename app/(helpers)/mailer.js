import nodemailer from 'nodemailer';
import User from "@/app/(models)/userModel";
import bcryptjs from 'bcryptjs';

export const sendEmail = async({email, emailType, userId}) => {
    try {
        // Create a hashed token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);
        const encodedToken = encodeURIComponent(hashedToken);

        

        

        

    } catch (error) {
        
    }
};
