const fs = require('fs')
const path = require('path')

const { getGitVersion } = require('@natterstefan/scripts/git')

const outputFile = path.join(__dirname, '../version.js')
const text = `module.exports = '${getGitVersion()}';`

fs.writeFile(outputFile, text, err => {
  if (err) {
    console.log(err)
    return
  }

  console.log('setup - version written')
})
