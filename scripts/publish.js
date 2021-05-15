// publish to npm

// 1. read VERSION.md file and get version number
const fs = require('fs')
const versionNumberFile = 'VERSION.md'
let newVersionNumber

fs.readFile(versionNumberFile, function (err, data) {
  newVersionNumber = data.toString()
  console.log('get new version :' + newVersionNumber)
})

// 2. update package.json version property
const packageFile = 'package.json'

fs.readFile(packageFile, function (err, data) {
  const packageInfo = JSON.parse(data.toString())
  packageInfo.version = newVersionNumber
  fs.writeFile(packageFile, JSON.stringify(packageInfo, null, 2), function (err) {
    if (err) {
      console.error(err)
    }
  })
  console.log('update package.json version success')
})

// 3. build and publish project
const { exec } = require('child_process')
const buildCommand = 'npm run clean && npm run tsc && npm run cpx && npm publish --access public'

exec(buildCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`)
    return
  }
  if (stdout) {
    console.log(`stdout: ${stdout}`)
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`)
  }
})