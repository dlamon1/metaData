const ffmpeg = require("ffmpeg-cli");

// const options = {
//   include: ['TALB', 'TIT2'],    // only read the specified tags (default: all)
//   exclude: ['APIC'],            // don't read the specified tags (default: [])
//   onlyRaw: false,               // only return raw object (default: false)
//   noRaw: false                  // don't generate raw object (default: false)
// }

function edit(path) {

  let arr = (path.split('/'))
  let newPath = ''

  for (let i = 1; i < arr.length; i++) {
    if (i != arr.length - 1) {
      newPath = newPath.concat(`/${arr[i]}`)
    } else {
      newPath = newPath.concat('/_')
      newPath = newPath.concat(arr[i])
    }
  }

  const cmd = `-i ${path} -metadata title="Movie Title" -metadata year="2010" -codec copy ${newPath}`

  ffmpeg.run(cmd).then(result => console.log(result))
}


module.exports = { edit }
