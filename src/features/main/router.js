import { musicRouter } from "../music/music.router.js";
import { playlistRouter } from "../playlist/playlist.router.js";

function Combine_all_routes(app) {
    app.use("/api/music", musicRouter);
    app.use("/api/playlist", playlistRouter);
}

export {Combine_all_routes};