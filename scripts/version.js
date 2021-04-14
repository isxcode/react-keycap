// point version number
// node version.js --version=xxx --type=npm/(github)

const args = {}
process.argv.splice(2).map(value => {
  const paramPair = value.split('=')
  args[paramPair[0].substring(2, paramPair[0].length)] = paramPair[1]
})

// get version number
const version = args.version

// change package.json version code
const fs = require('fs')
const file = 'package.json'

fs.readFile(file, function (err, data) {
  const packInfo = JSON.parse(data.toString())
  packInfo.version = version
  fs.writeFile(file, JSON.stringify(packInfo), function (err) {
    if (err) {
      console.error(err)
    }
  })
})
