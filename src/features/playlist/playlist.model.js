import * as mongoose from "mongoose";

const PlaylistSchema = new mongoose.Schema({
    playlist_id: Number,
    playlist_users: Array,
    playlist_musics: Array,
    created_by: Number,
    created_on: Date,
    last_modified_on: Date,
    playlist_image: String,
    playlist_admins: Array,
});

const Playlist = mongoose.model("Playlist", PlaylistSchema, "Playlist")

export { Playlist };