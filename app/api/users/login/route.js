import {connect} from "@/app/(dbConfig)/dbConfig";
import User from "@/app/(models)/userModel";
import {NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";



export async function POST(request){
    try {
        await connect()

        const reqBody = await request.json()
        const {email, password} = reqBody;
        console.log(reqBody);

        //check if user exists
        const user = await User.findOne({email})
        if(!user){
            console.log("User does not exist")
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }
        console.log("user exists");
        
        
        
        
        
        
        
        

    } catch (error) {
        
    }
}