import bcrypt from "bcryptjs";
import { connectToDB } from "@/lib/db/mongo";
import userModel from "@/lib/db/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    setTimeout(async ()=>{
      await connectToDB();
    const { name, email, password, role } = await req.json();
    const newUser = await userModel.create({
      name,
      email,
      password: bcrypt.hashSync(password, 10),
      role,
      songs: [],
      albums: [],
      playlists: [],
      favSongs: [],
      favAlbums: [],
    });
    return NextResponse.json(newUser);
    }, 0);
    return NextResponse.json({msg: 'this is msg'})
  } catch (error) {
    return Response.json(error)
  }
}
