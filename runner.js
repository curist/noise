const {Builder, By, Key, until} = require('selenium-webdriver')
const firefox = require('selenium-webdriver/firefox')

;(async function example() {
  const options = new firefox.Options()
  options.addArguments('-headless')
  let driver = new Builder().forBrowser('firefox').setFirefoxOptions(options).build()
  await driver.get('http://localhost:1234')

  !(function forever() {
    setTimeout(forever, 1e8)
  })()

  process.on('exit', () => driver.quit())

})()
