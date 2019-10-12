import Tone from 'tone'

export default function run() {
  console.log('run')
  const synth = new Tone.Synth().toMaster()

  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease("C4", "8n")
}
