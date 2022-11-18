import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

import HalfNHalf from '../img/halfnhalf.png'
import Play from '../img/svg/play.svg'
import Pause from '../img/svg/pause.svg'
import Forward from '../img/svg/forward.svg'
import Backward from '../img/svg/backward.svg'

function Hero(props) {
    const {windowPos} = props
    const [allSayings, setAllSaying] = useState([
        "Christian",
        "Husband",
        "Father",
        "Son",
        "Life Long Learner",
        "Maker",
        "Web Developer",
    ])
    const [saying, setSaying] = useState('')
    const [currentWord, setCurrentWord] = useState(allSayings[0])
    const [showing, setShowing] = useState(true)
    const [currentSpeed, setCurrentSpeed] = useState(250)
    const [showingControls, setShowingControls] = useState(false)

    useEffect(() => {
        if (showing) {
            let delay = 0
            if (saying.length >= currentWord.length) delay = 1000

            setTimeout(() => {
                let nextChar = currentWord[saying.length]
                let newWord = saying + nextChar
                setSaying(newWord)

                if (saying.length >= currentWord.length) {
                    let nextIdx = allSayings.indexOf(currentWord) + 1
                    let nextWord = allSayings[nextIdx]
                    if (!nextWord) nextWord = allSayings[0]
                    setCurrentWord(nextWord)
                    setSaying('')
                }

            }, currentSpeed + delay);
        }
    }, [saying, showing])


    const updateSpeedHandler = (speed) => {
        let newSpeed = parseInt(currentSpeed) + speed
        setCurrentSpeed(newSpeed)
    }

    const style = () => {
        if (windowPos > 100){
            return 'm-10 mt-44 rounded-xl shadow-xl shadow-black/75 duration-300 pt-24'
        } else {
            return 'h-screen'
        }
    }


    return (
        <div className={' bg-secondary-light grid grid-cols-2 relative ' + style()}>
            <div className='h-full w-full flex justify-left items-end'>
                <img src={HalfNHalf} alt="me" className='w-[50em]' />
            </div>
            <div className='h-full w-full flex flex-col justify-center items-start'>
                <div className='flex gap-3'>
                    <div className='absolute top-5 left-5'>
                        {
                            showingControls ?
                                <button className='text-whites' onClick={() => setShowingControls(!showingControls)}>Hide Controls</button>
                                :
                                <button className='text-transparent border-transparent focus:text-white shadow-none' onClick={() => setShowingControls(!showingControls)}>Show Controls</button>
                        }
                    </div>
                    {
                        showingControls &&
                        <>
                            <img className='w-9 cursor-pointer' src={Backward} alt="forward" onClick={() => updateSpeedHandler(50)} />
                            {
                                showing ?
                                    <img onClick={() => setShowing(!showing)} className='w-4 cursor-pointer' src={Pause} alt="pause" />
                                    :
                                    <img onClick={() => setShowing(!showing)} className='w-4 cursor-pointer' src={Play} alt="pause" />
                            }
                            <img className='w-9 cursor-pointer' src={Forward} alt="forward" onClick={() => updateSpeedHandler(-50)} />
                            <input className='rounded-full text-center w-fit' type="number" name="currentSpeedInput" id="currentSpeedInput" value={currentSpeed} onChange={(e) => setCurrentSpeed(e.target.value)} />
                        </>
                    }
                </div>
                <div className='w-96 flex flex-col items-center h-48'>
                    <h2 className='text-4xl text-white uppercase'>I am a</h2>
                    <p className='text-6xl text-white uppercase'>{saying}</p>
                    <div className='flex gap-3 mt-auto'>
                        <button className='bg-accent text-white'>Contact Me</button>
                        <button className='bg-white hover:bg-white'>Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero