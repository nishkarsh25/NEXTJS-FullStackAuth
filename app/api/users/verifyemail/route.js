import {connect} from "@/app/(dbConfig)/dbConfig";
import {NextResponse } from "next/server";
import User from "@/app/(models)/userModel";






export async function POST(request){

    try {

        await connect()

        const reqBody = await request.json()
        const {token} = reqBody
        console.log(token);

        const user = await User.findOne({verifyToken: token, verifyTokenExpiry: {$gt: Date.now()}});

        if (!user) {
            return NextResponse.json({error: "Invalid token"}, {status: 400})
        }
        

        
        
        


    } catch (error) {
        
    }

}