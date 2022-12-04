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
        for (let i = 0; i <refList.length; i++) {
            refList[i]+'Ref'.current.classList.add("pressed");
            setTimeout(function() {
            refList[i]+'Ref'.current.classList.remove("pressed");
            }, 100); 
        }
    }

    function first() {play1(); buttonAnimation()}
    function second() {play2(); buttonAnimation()}
    function third() {play3(); buttonAnimation()}
    function fourth() {play4(); buttonAnimation()}
    function fifth() {play5(); buttonAnimation()}
    function sixth() {play6(); buttonAnimation()}
    function seventh() {play7(); buttonAnimation()}

    useEffect(() => {first()}, [play1])
    useEffect(() => {second()}, [second])
    useEffect(() => {third()}, [ play2])
    useEffect(() => {fourth()}, [ play2])
    useEffect(() => {fifth()}, [ play2])
    useEffect(() => {sixth()}, [ play2])
    useEffect(() => {seventh()}, [ play2])

    



    return (
        <div className="button-container" >
            <button 
            onClick={first} 
            className='w' ref={firstRef}>
                W
            </button>
            <button className='A' 
            ref={secondRef}
            onClick={second}>
                A
            </button>
            <button 
            onClick={third} 
            className='S' 
            ref={thirdRef}>
                S
            </button>
            <button 
            onClick={fourth}
            className='D' 
            ref={fourthRef}>
                D
            </button>
            <button 
            onClick={fifth} 
            className='J' 
            ref={fifthRef}>
                J
            </button>
            <button 
            onClick={sixth} 
            className='K' 
            ref={sixthRef}>
                K
            </button>
            <button 
            onClick={seventh} 
            className='L' 
            ref={seventhRef}>
                L
            </button>
        </div>
    )
}