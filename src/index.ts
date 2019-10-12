import play from 'src/play'

function init() {
  play()

  const el = document.getElementById('play')
  el.addEventListener('click', play)
}

window.onload = init

if(module.hot) {
  module.hot.accept()
  init()
}
