import { getDataFromToken } from "@/app/(helpers)/getDataFromToken";

import {NextResponse } from "next/server";
import User from "@/app/(models)/userModel";
import { connect } from "@/app/(dbConfig)/dbConfig";



export async function GET(request){

    try {

        await connect();
        const userId = await getDataFromToken(request);
        
        
    } catch (error) {
        
    }

}