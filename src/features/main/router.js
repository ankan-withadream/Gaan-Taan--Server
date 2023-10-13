import { musicRouter } from "../music/music.router.js";

function Combine_all_routes(app) {
    app.use("/api/music", musicRouter);
}

export {Combine_all_routes};