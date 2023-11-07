import * as mongoose from "mongoose";

const UserSchema = new mongoose.Schema( {
    user_id: Number,
    user_name: String,
    user_password: String,
    user_playlists: Array,
    user_queue: Array,
})

const User = mongoose.model("User", UserSchema, "User");

export { User };