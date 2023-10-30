import { Router } from "express";
import { streamMusic, uploadMusic } from "./music.controller.js";

const musicRouter = Router();

musicRouter.get('/stream/:musicId', streamMusic);


musicRouter.post('/upload-audio', uploadMusic);




export { musicRouter };