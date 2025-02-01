import userModel from "@/lib/db/models/user";
import { connectToDB } from "@/lib/db/mongo";
import { NextResponse } from "next/server";

export async function POST(req) {
    await connectToDB();
    const {name, email, password, role} = await req.json();
    // console.log(req.json());
    
    const userObj = {
        name,
        email,
        password,
        role,
        songs: [],
        albums: [],
        playlists: [],
        favSongs: [],
        favAlbums: []

    }
    const newUser = await userModel.create(userObj);
    return NextResponse.json(newUser, {status: 201});
    
}