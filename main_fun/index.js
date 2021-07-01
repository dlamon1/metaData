const id = require('node-id3')

// const options = {
//   include: ['TALB', 'TIT2'],    // only read the specified tags (default: all)
//   exclude: ['APIC'],            // don't read the specified tags (default: [])
//   onlyRaw: false,               // only return raw object (default: false)
//   noRaw: false                  // don't generate raw object (default: false)
// }

function edit(path) {

  const tags = {
    title: "Tomorrow",
    artist: "Kevin Penkin",
    album: "TVアニメ「メイドインアビス」オリジナルサウンドトラック",
    APIC: "./example/mia_cover.jpg",
    TRCK: "27"
  }

  const write = id.write(tags, path)

  const tags = id.read(path)
  console.log(tags)

}


module.exports = { edit }
