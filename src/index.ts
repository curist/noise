import run from 'src/run'

function init() {
  run()
}

window.onload = init

if(module.hot) {
  module.hot.accept()
  init()
}
