import jwt from 'jsonwebtoken';

export async function GET(req) {
    try {
        const authHeader = req.headers.get("authorization");
        if(!authHeader){
            return Response.json({error: 'Not Authorized'}, {status: 401});
        }
        const token = authHeader;
        const user = jwt.verify(token, process.env.JWT_SECRET);
        return Response.json(user)
    } catch (error) {
        return Response.json(error)
    }
}