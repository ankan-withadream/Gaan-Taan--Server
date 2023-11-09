import { Router } from "express";
import { getPlaylist, createPlaylist, addMusicToPlaylist, remMusicFromPlaylist, deletePlaylist } from "./playlist.controller.js";

const playlistRouter = Router();

playlistRouter.get('/playlist/:playlist_id', getPlaylist);

playlistRouter.post('/create_playlist', createPlaylist);

playlistRouter.get('/delete_playlist/:playlist_id', deletePlaylist);

playlistRouter.get('/add_music_to_playlist/:playlist_id/:music_id', addMusicToPlaylist);
// http://localhost:3000/api/playlist/add_music_to_playlist/1698935785325/77
playlistRouter.get('/rem_music_from_playlist/:playlist_id/:music_id', remMusicFromPlaylist);


export { playlistRouter };