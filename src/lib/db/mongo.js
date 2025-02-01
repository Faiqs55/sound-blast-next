import mongoose from "mongoose";

const MONGO_DB_URI = process.env.MONGO_DB_URI;

if (!MONGO_DB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
}

let cashed = global.mongoose || {conn: null, promise: null};

export async function connectToDB() {
    if (cashed.conn) return cashed.conn;

    if(!cashed.promise){
        cashed.promise = mongoose.connect(MONGO_DB_URI)
        .then(res => console.log('DB Connected'));
    }

    cashed.conn = await cashed.promise;
    return cashed.conn;
}