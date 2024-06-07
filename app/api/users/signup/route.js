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

        

        

        

        

        

       




    } catch (error) {
        

    }
}