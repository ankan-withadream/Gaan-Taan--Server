import * as mongoose from "mongoose";

const MusicSchema = new mongoose.Schema(   {
    music_id: Number,
    music_name: String,
    music_author: String,
    music_url: String,
    music_image: String
});

const Music = mongoose.model("Music", MusicSchema, "Music");

export { Music };