import { File } from "megajs";


const streamMusic = (async (req, res) => {
  let musicId = req.params.musicId;
  console.log("music id: ", musicId);
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
  downloadStream.pipe(res);
});

const uploadMusic = (async (req, res) => {
  console.log("Body received", req.files, req.body, req.data, req.body.audioFile, req.form);
  // create a Writeable stream for uploading the audio file to MEGA
  const megaFileStream = mega_storage.upload({
    name: "sample.mp3",
    allowUploadBuffering: true,
  });

  req.pipe(megaFileStream);
  megaFileStream.on('complete', async (file) => {
    console.log('The file was uploaded!',)
    const fileUrl = await file.link();
    console.log("File Url: ", fileUrl);
    res.send(fileUrl)
  })
  megaFileStream.on('error', (error) => {
    console.log('Error uploading file!', file);
    res.send(error)
  })
})

export { streamMusic, uploadMusic };