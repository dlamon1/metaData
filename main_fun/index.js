const ffmpeg = require("ffmpeg-cli");
const fs = require('fs')
const fsPromises = fs.promises;
const path = require('path')

async function folder(folderCheck) {

  return fsPromises.access(folderCheck, function (error) {
    if (error) {
      fs.mkdir(folderCheck, (err) => {
        if (err) {
          console.error(err);
        }
        console.log('Directory created successfully!');
        return
      });
    } else {
      console.log("Directory exists.")
      return
    }
  })
}

async function edit(filePath) {

  let pathObj = path.parse(filePath)
  let pathIn = path.join(pathObj.dir, pathObj.base)
  let newPath = path.join(pathObj.dir, 'UpdatedMeta')
  let pathOut = path.join(newPath, pathObj.base)

  const cmd = `-i "${pathIn}" -metadata title="${pathObj.name}" -codec copy "${pathOut}"`

  folder(newPath)
    .then(ffmpeg.run(cmd))
    .then((result) => console.log(result))
    .catch((err) => console.log(err))

}

module.exports = { edit }