const express = require('express');
const fs = require('fs');
const path = require('path');
const cors=require("cors");
const mega = require('megajs');
const File = mega.File;
const request = require('request');
const parser = require('body-parser');


const app = express();
const mega_storage = new mega.Storage({email: "cocgreenranger@gmail.com", password: "Iamankan777",});
const mongoose = require('mongoose');

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions));
 app.use(parser.json());
 app.use(parser.urlencoded({extended: true}));
 
// app.use(express.urlencoded({extended: true}));
mongoose.connect("mongodb+srv://cocgreenranger:admin@cluster0.yoel9wg.mongodb.net/?retryWrites=true&w=majority")
.then((status) => {
  console.log("successfully connected database:");
})
.catch((error) => {
  console.log("Error while database connection:", error);
})

 app.post('/upload-audio', async (req, res) => {
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


app.get('/stream', async (req, res) => {
  // const filePath = path.join(__dirname, 'test.mp3');
  const filePath = 'https://mega.nz/file/kjZXkRhK#Sl_rID29Njnfr_We2J8l9zSz6Ltb_5k7bI1TzUxZM1I';
  // const stat = fs.statSync(filePath);
  // const fileSize = stat.size;
  // const range = req.headers.range;
  // console.log("range:", range);

  // if (range) {
  //   const parts = range.replace(/bytes=/, '').split('-');
  //   const start = parseInt(parts[0], 10);
  //   const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
  //   const chunkSize = (end - start) + 1;
  //   const file = fs.createReadStream(filePath, { start, end });
  //   const headers = {
  //     'Content-Range': `bytes ${start}-${end}/${fileSize}`,
  //     'Accept-Ranges': 'bytes',
  //     'Content-Length': chunkSize,
  //     'Content-Type': 'audio/mpeg',
  //     'Access-Control-Allow-Origin': 'http://127.0.0.1:4200',

  //   };

  //   res.writeHead(206, headers);
  //   file.pipe(res);
  // } else {
  //   const headers = {
  //     'Content-Length': fileSize,
  //     'Content-Type': 'audio/mpeg',
  //   };

  //   res.writeHead(200, headers);
  //   fs.createReadStream(filePath).pipe(res);
  // }

  // const fileId = req.params.fileId;
  const fileId = "UvwAgTJQ";
//   // const fileId = "dvoBEBKb";
//   // const storage = new Megajs({email: 'your-email', password: 'your-password'});
//   const storage = new mega({email: "cocgreenranger@gmail.com", password: "Iamankan777",});
//   const file = new mega.File({key: fileId}, storage);
// // console.log("File, Storage", file, storage);
//   // wait for the file to load
//   await file.loadAttributes();

//   // get the download URL of the file
//   const audioUrl = await file.link();

let url = "https://mega.nz/file/c3pnFJLS#otCIH5YLhnNwSB0sp1YYKr9zNMc4MAE7G0Wj_EzR4mQ";
// const file = mega_storage.File.fromURL(url)
  // const file = File({key: fileId, path: url}, mega_storage);
  const file = File.fromURL(url)
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

app.listen(3000, () => console.log('Server started on port 3000'))