import { connect } from "@/app/(dbConfig)/dbConfig";
import User from "@/app/(models)/userModel";
import {NextResponse} from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/app/(helpers)/mailer";





export async function POST(request) {
    try {
        await connect()

        const reqBody = await request.json()
        const { username, email, password } = reqBody

        console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 })
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        //send verification email
        console.log(1)
        await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id })
        console.log(2)

       




    } catch (error) {
        

    }
}