import { musicRouter } from "../music/music.router.js";
import { playlistRouter } from "../playlist/playlist.router.js";
import { userRouter } from "../user/user.router.js";

function Combine_all_routes(app) {
    app.use("/api/music", musicRouter);
    app.use("/api/playlist", playlistRouter);
    app.use("/api/user", userRouter);
}

export {Combine_all_routes};