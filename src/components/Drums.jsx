import useSound from 'use-sound';
import soundOne from './sounds/snare.mp3'
import soundTwo from './sounds/tom-4.mp3'
import soundThree from './sounds/crash.mp3'
import soundFour from './sounds/kick-bass.mp3'
import soundFive from './sounds/tom-1.mp3'
import soundSix from './sounds/tom-2.mp3'
import soundSeven from './sounds/tom-3.mp3'



export default function Drums() {

  const [play1] = useSound(soundOne)
  const [play2] = useSound(soundTwo)
  const [play3] = useSound(soundThree)
  const [play4] = useSound(soundFour)
  const [play5] = useSound(soundFive)
  const [play6] = useSound(soundSix)
  const [play7] = useSound(soundSeven)

    return (
        <div className="button-container">
            <button onClick={play1}>
                W
            </button>
            <button onClick={play2}>
                A
            </button>
            <button onClick={play3}>
                S
            </button>
            <button onClick={play4}>
                D
            </button>
            <button onClick={play5}>
                F
            </button>
            <button onClick={play6}>
                G
            </button>
            <button onClick={play7}>
                H
            </button>
        </div>
    )
}