import play from 'src/play'

function init() {
  play()
}

window.onload = init

if(module.hot) {
  module.hot.accept()
  init()
}
