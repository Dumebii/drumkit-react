import useSound from 'use-sound';
import soundSix from './sounds/snare.mp3'
import soundFour from './sounds/tom-4.mp3'
import soundFive from './sounds/crash.mp3'
import soundSeven from './sounds/kick-bass.mp3'
import soundOne from './sounds/tom-1.mp3'
import soundTwo from './sounds/tom-2.mp3'
import soundThree from './sounds/tom-3.mp3'
import { useRef, useEffect } from 'react';



export default function Drums() {

  const [play1] = useSound(soundOne)
  const [play2] = useSound(soundTwo)
  const [play3] = useSound(soundThree)
  const [play4] = useSound(soundFour)
  const [play5] = useSound(soundFive)
  const [play6] = useSound(soundSix)
  const [play7] = useSound(soundSeven)


const refList = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh']

const firstRef = useRef()
const secondRef = useRef()
const thirdRef = useRef()
const fourthRef = useRef()
const fifthRef = useRef()
const sixthRef = useRef()
const seventhRef = useRef()


// var name = 'first'

    function buttonAnimation() {
            firstRef.current.classList.add("pressed");
            setTimeout(function() {
            firstRef.current.classList.remove("pressed");
            }, 100); 
    }

    function buttonAnimation2() {
            secondRef.current.classList.add("pressed");
            setTimeout(function() {
            secondRef.current.classList.remove("pressed");
            }, 100); 
    }
    function buttonAnimation3() {
            thirdRef.current.classList.add("pressed");
            setTimeout(function() {
            thirdRef.current.classList.remove("pressed");
            }, 100); 
    }
    function buttonAnimation4() {
            fourthRef.current.classList.add("pressed");
            setTimeout(function() {
            fourthRef.current.classList.remove("pressed");
            }, 100); 
    }
    function buttonAnimation5() {
            fifthRef.current.classList.add("pressed");
            setTimeout(function() {
            fifthRef.current.classList.remove("pressed");
            }, 100); 
    }
    function buttonAnimation6() {
            sixthRef.current.classList.add("pressed");
            setTimeout(function() {
            sixthRef.current.classList.remove("pressed");
            }, 100); 
    }
    function buttonAnimation7() {
            seventhRef.current.classList.add("pressed");
            setTimeout(function() {
            seventhRef.current.classList.remove("pressed");
            }, 100); 
    }



    function first() {play1(); buttonAnimation()}
    function second() {play2(); buttonAnimation2()}
    function third() {play3(); buttonAnimation3()}
    function fourth() {play4(); buttonAnimation4()}
    function fifth() {play5(); buttonAnimation5()}
    function sixth() {play6(); buttonAnimation6()}
    function seventh() {play7(); buttonAnimation7()}

    useEffect(() =>{
        first(); second(); third(); fourth(); fifth(); sixth(); seventh()
    }, [play1, play2, play3, play4, play5, play6, play7])

    



    return (
        <div className="button-container" >
            <button 
            onClick={first} 
            className='w' ref={firstRef}>
                W
            </button>
            <button className='a' 
            ref={secondRef}
            onClick={second}>
                A
            </button>
            <button 
            onClick={third} 
            className='s' 
            ref={thirdRef}>
                S
            </button>
            <button 
            onClick={fourth}
            className='d' 
            ref={fourthRef}>
                D
            </button>
            <button 
            onClick={fifth} 
            className='j' 
            ref={fifthRef}>
                J
            </button>
            <button 
            onClick={sixth} 
            className='k' 
            ref={sixthRef}>
                K
            </button>
            <button 
            onClick={seventh} 
            className='l' 
            ref={seventhRef}>
                L
            </button>
        </div>
    )
}