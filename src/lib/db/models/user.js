import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['ARTIST', 'ENJOYER'],
            default: 'ENJOYER'
        },
        songs: {
            type: Array
        },
        albums: {
            type: Array
        },
        playlists: {
            type: Array
        },
        favSongs: {
            type: Array
        },
        favAlbums: {
            type: Array
        }
    }
);

const userModel = mongoose.model.User || mongoose.model('User', UserSchema);
export default userModel;