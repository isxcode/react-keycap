const fs = require('fs')
const path = require('path')

const esPath = 'es'
if (fs.existsSync(esPath)) {
  deleteFolderRecursive(esPath)
}

function deleteFolderRecursive (folderPath) {
  let files = []
  if (fs.existsSync(folderPath)) {
    files = fs.readdirSync(folderPath)
    files.forEach(function (file, index) {
      const curPath = path.join(folderPath, file)
      if (fs.statSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(folderPath)
  }
}
