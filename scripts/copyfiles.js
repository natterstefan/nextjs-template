/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * PREARE .env.* based on the given .env.*.example files
 */
const fs = require('fs')
const path = require('path')

module.exports = () => {
  const exampleFiles = [
    path.join(__dirname, '../.env.local.example'),
    path.join(__dirname, '../.env.test.example'),
  ]
  const configFiles = [
    path.join(__dirname, '../.env.local'),
    path.join(__dirname, '../.env.test'),
  ]

  configFiles.forEach((configFile, i) => {
    if (fs.existsSync(configFile)) {
      console.log(`${configFile} exists already.`)
    } else {
      fs.copyFile(exampleFiles[i], configFile, err => {
        if (err) {
          throw err
        }

        console.log(`${configFile} copied`)
      })
    }
  })
}
