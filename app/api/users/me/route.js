import { getDataFromToken } from "@/app/(helpers)/getDataFromToken";

import {NextResponse } from "next/server";
import User from "@/app/(models)/userModel";
import { connect } from "@/app/(dbConfig)/dbConfig";



export async function GET(request){

    try {

        await connect();
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            mesaaage: "User found",
            data: user
        })
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}