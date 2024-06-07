import {connect} from "@/app/(dbConfig)/dbConfig";
import User from "@/app/(models)/userModel";
import {NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";



