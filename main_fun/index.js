var ffmetadata = require("ffmetadata");
var pathToFfmpeg = require('ffmpeg-static');


function edit(path) {

  let pathArr = path.split('/')
  let prefix = pathArr[pathArr.length]
  console.log(pathArr)
  console.log(pathArr.length)

  // Set path to ffmpeg - optional if in $PATH or $FFMPEG_PATH
  ffmetadata.setFfmpegPath(pathToFfmpeg);

  // Read song.mp3 metadata
  ffmetadata.read(path, function (err, data) {
    if (err) console.error("Error reading metadata", err);
    else console.log(data);
  });

  // Set the artist for song.mp3
  // var data = {
  //   title: prefix,
  // };

  // ffmetadata.write("song.mp3", data, function (err) {
  //   if (err) console.error("Error writing metadata", err);
  //   else console.log("Data written");
  // });

}


module.exports = { edit }
