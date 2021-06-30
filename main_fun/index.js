var ffmetadata = require("ffmetadata");
var pathToFfmpeg = require('ffmpeg-static');

function edit(path) {

  ffmetadata.setFfmpegPath(pathToFfmpeg)

  let pathArr = path.split('/')
  let prefix = pathArr[pathArr.length]
  console.log(pathArr)
  console.log(pathArr.length)

  let options = {
    title: 'test title',
  };
  ffmetadata.write(path, options, function (err) {
    if (err) console.error("Error writing cover art");
    else console.log("Cover art added");
  });

}


module.exports = { edit }
