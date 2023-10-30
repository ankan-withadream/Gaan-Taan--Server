import { File } from "megajs";
import mongoose from "mongoose";
import { Music } from "./music.model.js";
import { mega_storage } from "../../services/server.js";


const streamMusic = (async (req, res) => {

  let music = await Music.findOne({ music_id: req.params.musicId });
  // let url = "https://mega.nz/file/c3pnFJLS#otCIH5YLhnNwSB0sp1YYKr9zNMc4MAE7G0Wj_EzR4mQ";
  let url = music["music_url"];
  const file = File.fromURL(url);
  await file.loadAttributes();
  console.log("File name:", file.name);
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

  console.log("Body received", req.files, req.body, req.data, req.body.audioFile, req.form);
  // create a Writeable stream for uploading the audio file to MEGA
  const megaFileStream = mega_storage.upload({
    name: req.body.name,
    allowUploadBuffering: true,
  });

  req.pipe(megaFileStream);
  megaFileStream.on('complete', async (file) => {
    console.log('The file was uploaded!',)
    const fileUrl = await file.link();
    console.log("File Url: ", fileUrl);


    // The mongodb insertion part
    await Music.create({
      music_id: new Date().valueOf(),
      music_name: req.body.name,
      music_author: req.body.author,
      music_url: fileUrl,
      music_image: "test"
    });

    res.send(fileUrl)
  })
  megaFileStream.on('error', (error) => {
    console.log('Error uploading file!', file);
    res.send(error)
  })

})

export { streamMusic, uploadMusic };