const fs = require('fs')

const versionNumberFile = process.argv.splice(2)[1]

let newVersionNumber

fs.readFile(versionNumberFile, function (err, data) {
  newVersionNumber = data.toString()
})

const packageFile = 'package.json'
fs.readFile(packageFile, function (err, data) {
  const packageInfo = JSON.parse(data.toString())
  packageInfo.version = newVersionNumber
  fs.writeFile(packageFile, JSON.stringify(packageInfo, null, 2), function (err) {
    if (err) {
      console.error(err)
    }
  })
})