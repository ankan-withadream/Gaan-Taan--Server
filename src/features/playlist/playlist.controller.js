import * as mongoose from "mongoose";
import { Playlist } from "./playlist.model.js";

const getPlaylist = (async (req, res) => {
    try {
        let playlist = await Playlist.findOne({ playlist_id: req.params.playlist_id });
        if (playlist) {
            res.send(playlist);
        }
        else {
            res.send({
                message: "playlist not found"
            })
        }
    } catch (error) {
        res.send(error).status(500)
    }
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


const deletePlaylist = (async (req, res) => {
    let playlist_id = parseInt(req.params.playlist_id);
    console.log("Body received", req.files, req.body, req.data, req.body.audioFile, req.form);
    try {
        let deletedPlaylist = await Playlist.updateOne({ playlist_id: playlist_id }, { $addToSet: { playlist_musics: music_id } })
        console.log(deletedPlaylist);
        return res.status(200).json(deletedPlaylist);
    } catch (error) {

        console.log(error);
        res.status(500).json(JSON.stringify(error));
    }
})


const addMusicToPlaylist = (async (req, res) => {
    let playlist_id = parseInt(req.params.playlist_id);
    let music_id = parseInt(req.params.music_id);
    console.log("Body received", req.files, req.body, req.data, req.body.audioFile, req.form, typeof pid, typeof req.params.playlist_id, req.params.music_id);

    try {
        let updatedPlaylist = await Playlist.updateOne({ playlist_id: playlist_id }, { $addToSet: { playlist_musics: music_id } })
        console.log(updatedPlaylist);
        return res.status(200).json(updatedPlaylist);
    } catch (error) {

        console.log(error);
        res.status(500).json(JSON.stringify(error));
    }
});


const remMusicFromPlaylist = (async (req, res) => {
    let playlist_id = parseInt(req.params.playlist_id);
    let music_id = parseInt(req.params.music_id);
    console.log("Body received", req.files, req.body, req.data, req.body.audioFile, req.form, typeof pid, typeof req.params.playlist_id, req.params.music_id);

    try {
        let updatedPlaylist = await Playlist.updateOne({ playlist_id: playlist_id }, { $pull: { playlist_musics: music_id } })
        console.log(updatedPlaylist);
        return res.status(200).json(updatedPlaylist);
    } catch (error) {

        console.log(error);
        res.status(500).json(JSON.stringify(error));
    }
});



export { getPlaylist, createPlaylist, deletePlaylist, addMusicToPlaylist, remMusicFromPlaylist };