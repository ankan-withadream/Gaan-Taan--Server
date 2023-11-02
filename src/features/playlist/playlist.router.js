import { Router } from "express";
import { getPlaylist, createPlaylist, addMusicToPlaylist, remMusicFromPlaylist, deletePlaylist } from "./playlist.controller.js";

const playlistRouter = Router();

playlistRouter.get('/playlist/:playlist_id', getPlaylist);

playlistRouter.post('/create_playlist', createPlaylist);

playlistRouter.get('/delete_playlist/:playlist_id', deletePlaylist);

playlistRouter.get('/add_music_to_playlist/:music_id', addMusicToPlaylist);

playlistRouter.get('/rem_music_from_playlist/:music_id', remMusicFromPlaylist);


export { playlistRouter };