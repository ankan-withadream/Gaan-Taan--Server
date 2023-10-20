import { File } from "megajs";
import mongoose from "mongoose";
import { Music } from "./music.model.js";


const streamMusic = (async (req, res) => {

    let music_id = 1;
    console.log("done")
    let newMusic = new Music({
        music_id: 3,
        music_name: "Song name",
        music_author: "author authort",
        music_url: "any.url//asdklfj",
        music_image: "test"
    });
    await newMusic.save();
    console.log("done 2")

    let url = "https://mega.nz/file/c3pnFJLS#otCIH5YLhnNwSB0sp1YYKr9zNMc4MAE7G0Wj_EzR4mQ";
    const file = File.fromURL(url);
    console.log("File", file);
    await file.loadAttributes();
    console.log("GGGGGG",);

    console.log("File Loadatri", file.name);
    // const start = fs.statSync(file.name).size
    const downloadStream = file.download();

    // set the response headers for audio file
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Disposition', 'inline');

    // use request module to stream the audio file directly to the response object
    // request.get(audioUrl).pipe(res);
    downloadStream.pipe(res)
});

const uploadMusic = (async (req, res) => {
    let newMusic = new Music({
        music_id: 3,
        music_name: "Song name",
        music_author: "author authort",
        music_url: "any.url//asdklfj",
        music_image: "test"
    });
    await newMusic.save();

})

export { streamMusic, uploadMusic };