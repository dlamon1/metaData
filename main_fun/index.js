const ffmpeg = require("ffmpeg-cli");
const fs = require('fs')
const fsPromises = fs.promises;

async function folder(arr, folderCheck) {

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

async function edit(path) {

  let arr = (path.split('/'))
  let newPath = ""
  let folderCheck = ""
  let titleArr = arr[arr.length - 1].split('.')
  let title = titleArr[0].replaceAll(' ', ' ')

  for (let i = 1; i < arr.length; i++) {
    if (i != arr.length - 1) {
      folderCheck = folderCheck.concat(`/${arr[i]}`)
      newPath = newPath.concat(`/${arr[i]}`)
    } else {
      folderCheck = newPath.concat('/UpdatedMeta/')
      newPath = newPath.concat(`/UpdatedMeta/${arr[i]}`)
    }
  }

  const cmd = `-i "${path}" -metadata title="${title}" -codec copy "${newPath}"`

  folder(arr, folderCheck)
    .then(ffmpeg.run(cmd))
    .then((result) => console.log(result))
    .catch((err) => console.log(err))

}


module.exports = { edit }
