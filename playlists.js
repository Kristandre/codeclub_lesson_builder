const config = require('./config.js')
const path = require('path')

/**
 * Metalsmith plugin.
 * Make global playlists object.
 * Usage:
 * Metalsmith.use(playlists({
 *   collections: ['python', 'scratch']
 * }))
 */
module.exports = function (opts) {
  opts = opts || {}
  opts.collections = opts.collections || []

  return function (files, metalsmith, done) {
    const metadata = metalsmith.metadata()
    metadata.playlists = {}

    // for each collection
    opts.collections.map(collection => {
      // /course\/playlists\/[^\/]+txt$/
      const re = new RegExp([collection, config.playlistFolder,
                            '[^', ']+txt$'].join('\\' + path.sep))
      // [ course/playlists/learn_python.txt, ...]
      const playlists = Object.keys(files).filter(file => {
        return file.search(re) === 0
      })

      metadata.playlists[collection] = []

      for (let file of playlists) {
        const playlist = {}
        playlist.name = playlistName(file)
        playlist.id = playlistId(playlist.name)

        let lessons = files[file].contents.toString('utf8')
        lessons = lessons.match(/[^\r\n]+/g)  // read lines
        playlist.lessons = lessons.map(file => {
          const key = path.join(collection, ...file.split('/'))
          return files[key]
        })

        metadata.playlists[collection].push(playlist)
      }
    })
    done()
  }
}

function playlistName (filename) {
  return path.basename(filename).replace('.txt', '').replace(/_/g, ' ')
}

function playlistId (name) {
  // replace chars in playlist-name, so that it can be used as id or class
  var id = name.replace(/ /g, '_');
  id = id.replace(/[\,\.\-\?]/g, '');
  return id;
}
