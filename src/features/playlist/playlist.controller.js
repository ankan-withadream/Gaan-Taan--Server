import * as mongoose from "mongoose";
import { Playlist } from "./playlist.model.js";

const getPlaylist = (async (req, res) => {
    let playlist = await Playlist.findOne({ playlist_id: req.params.playlist_id });
    res.send(playlist);
})


const createPlaylist = (async (req, res) => {
    console.log("Body received", req.files, req.body, req.data, req.body.audioFile, req.form);
    let now = new Date().toString();
    let playlist = new Playlist({
        playlist_id: new Date().valueOf(),
        playlist_users: [req.body.created_by],
        playlist_musics: [],
        created_by: req.body.created_by,
        created_on: now,
        last_modified_on: now,
        playlist_image: "",
        playlist_admins: [req.body.created_by],
    });

    await playlist.save();

    res.send(playlist)
});


export { getPlaylist, createPlaylist };