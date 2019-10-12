import Tone from 'tone'

export default async function play() {
  console.log('play')
  Tone.Transport.stop()

  const synth = new Tone.Synth().toMaster()

  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease("C5", "8n")

  const loop = new Tone.Loop(function(time){
    synth.triggerAttackRelease("C6", "8n", time)
  }, "4n")
  loop.start('1m').stop('2m')
  Tone.Transport.start()
}
