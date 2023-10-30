import { Router } from "express";
import { getPlaylist, createPlaylist } from "./playlist.controller.js";

const playlistRouter = Router();

playlistRouter.get('/playlist/:playlist_id', getPlaylist);

playlistRouter.post('/create-playlist', createPlaylist);



export { playlistRouter };