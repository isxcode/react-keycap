let fs = require('fs')
const file = '../../package.json'
const name = '@ispong/react-keycap'

fs.readFile(file, function(err, data) {
  let packInfo = JSON.parse(data.toString())
  packInfo.name = name
  fs.writeFile(file, JSON.stringify(packInfo), function(err) {
    if (err) {
      console.error(err)
    }
  })
})