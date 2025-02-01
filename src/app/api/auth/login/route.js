import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { connectToDB } from "@/lib/db/mongo";
import userModel from "@/lib/db/models/user";

export async function POST(req) {
    try {
        connectToDB();
        const {email, password} = await req.json();
        const user = await userModel.findOne({email});
        if(!user){
           return Response.json({error: 'Invalid Email'}, {status: 404});
        }
        const isMatched = await bcrypt.compare(password, user.password);
        if(!isMatched){
           return Response.json({error: 'Invalid Password'}, {status: 401});
        }else{
            const token = jwt.sign({id: user._id, email: user.email}, process.env.JWT_SECRET, {expiresIn: '12h'});
            return Response.json({token})
        }

    } catch (error) {
       return Response.json({error});
    }
}