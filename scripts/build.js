const os = require('os')

switch (os.type()) {
  case 'Linux':
    buildOnLinux()
    break
  case 'Darwin':
    break
  case 'Windows_NT':
    buildOnWindows()
    break
}

function buildOnWindows () {
  const { spawn } = require('child_process')
  const bat = spawn('cmd.exe', ['/c', '.\\scripts\\build.bat'])

  bat.stdout.on('data', (data) => {
    console.log(data.toString())
  })

  bat.stderr.on('data', (data) => {
    console.error(data.toString())
  })

  bat.on('exit', (code) => {
    console.log(`Child exited with code ${code}`)
  })
}

function buildOnLinux () {
  const { exec } = require('child_process')
  exec('bash ./scripts/build.sh', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.error(`stderr: ${stderr}`)
  })
}
