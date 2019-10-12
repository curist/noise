import Tone from 'tone'

(Tone as any).context = new AudioContext()
Tone.Transport.bpm.value = 90

const chords = [
  'A0 C1 E1', 'F0 A0 C1', 'G0 B0 D1',
  'D0 F0 A0', 'E0 G0 B0'
].map(formatChords)
console.log(chords)

export default async function play() {
  console.log('play')

  const synth = new Tone.Synth().toMaster()

  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease("C5", "8n")

  const synth1 = new Tone.Synth().toMaster()
  const loop = new Tone.Loop(function(time){
    synth1.triggerAttackRelease("C4", "8n", time)
  }, "4n")
  loop.start(0)

  Tone.Transport.scheduleRepeat(onRepeat, '16n');
  Tone.Transport.start()
  let chordStep = 0
  let step = 0

  function onRepeat(time: Tone.TypeUnits.Time) {
    const chord = chords[chordStep % chords.length]
    const note = chord[step % chord.length]
    synth.triggerAttackRelease(note, '16n', time);
    step++
    if(step % chord.length === 0) {
      step = 0
      chordStep++
    }
  }
}

function formatChords(chordString: string) {
  let chord = chordString.split(' ');
  let arr = [];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < chord.length; j++) {
      let noteOct = chord[j].split(''),
        note = noteOct[0];
      let oct = (noteOct[1] === '0') ? i + 4 : i + 5;
      note += oct;
      arr.push(note);
    }
  }
  return arr;
}
