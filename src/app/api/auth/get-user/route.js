import userModel from '@/lib/db/models/user';
import { connectToDB } from '@/lib/db/mongo';
import jwt from 'jsonwebtoken';

export const dynamic = 'force-dynamic';

export async function GET(req) {
    try {
        await connectToDB();
        const authHeader = req.headers.get("authorization");
        if(!authHeader){
            return Response.json({error: 'Not Authorized'}, {status: 401});
        }
        const token = authHeader;
        
        const user = jwt.verify(token, process.env.JWT_SECRET);
        const foundUser = await userModel.findById(user.user._id);
        
        return Response.json(foundUser);
    } catch (error) {
        return Response.json(error)
    }
}