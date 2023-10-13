import { Router } from "express";
import { File } from "megajs";
import { streamMusic } from "./music.controller.js";

const musicRouter = Router();

musicRouter.get('/stream/:musicId', streamMusic);


musicRouter.post('/upload-audio', async (req, res) => {
    console.log("Body received", req.files, req.body, req.data, req.body.audioFile, req.form);
    // console.log("Mega Storage", mega_storage);
    // const { audioUrl, filename } = req.body;
    // let filename = req.body.filename;
    //   let audioUrl = req.body.audioUrl;
  
    // // create a Readable stream for the audio file from the given URL
    // const audioStream = request.get({uri: audioUrl});
    
    // // create a Writeable stream for uploading the audio file to MEGA
    const megaFileStream = mega_storage.upload({ 
      name: "sample.mp3",
      allowUploadBuffering: true,
  });
  
    // // pipe the audio stream to the MEGA file stream
    // audioStream.pipe(megaFileStream);
  
    // // handle stream events and send response when done
    // megaFileStream.on('error', (err) => {
    //   console.error(err);
    //   res.status(500).send('Error uploading file to MEGA');
    // });
  
    // megaFileStream.on('finish', () => {
    //   res.status(200).send('File uploaded to MEGA');
    // });
  
    req.pipe(megaFileStream);
    megaFileStream.on('complete', async (file) => {
      console.log('The file was uploaded!', )
      const fileUrl = await file.link();
      console.log("File Url: ", fileUrl);
  
  
  
    })
    megaFileStream.on('error', (error) => {
      console.log('Error uploading file!', file)
    })
  
    // const fileStream = fs.createWriteStream('audio_file5.mp3', {flags: 'a'});
  
    // req.on('data', chunk => {
    //   fileStream.write(chunk);
    // });
  
    // req.on('end', () => {
    //   fileStream.end();
    //   res.status(200).send('File uploaded successfully');
    // });
  });




export {musicRouter};