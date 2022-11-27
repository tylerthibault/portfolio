import React, { useState } from 'react'
import Modal from './Modal'

function Navbar(props) {
    const [showModal, setShowModal] = useState(false)

    const scrollHandler = (e) => {
        let name = e.target.getAttribute('name')
        const anchor = document.querySelector(`#${name}`)
        anchor.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
        setShowModal(false)
    }

    const navItems = () => {
        let basicStyle = "text-2xl cursor-pointer hover:text-accent hover:font-bold bg-transparent hover:bg-white hover:text-black p-2 duration-300 rounded-t-xl"
        let style = "text-secondary-light border-secondary-light w-fit"
        if (props.windowPos < 100) style = "md:fixed md:top-0 md:text-white md:border-white md:font-light"
        return (
            <div className={'flex justify-center '}>
                <ul className={'flex flex-col md:flex-row gap-10 justify-center mt-10 mb-3 w-fit px-10 md:border-b-[0.25em] ' + style}>
                    <li className={basicStyle} onClick={scrollHandler} name='aboutme'>About Me</li>
                    <li className={basicStyle} onClick={scrollHandler} name='technology'>Technology</li>
                    <li className={basicStyle} onClick={scrollHandler} name='education'>Education</li>
                    {/* <li className={basicStyle} onClick={scrollHandler} name='projects'>Projects</li> */}
                    <li className={basicStyle} onClick={scrollHandler} name='workhistory'>Work History</li>
                    <li className={basicStyle} onClick={scrollHandler} name='contactme'>Contact Me</li>
                </ul>
            </div>
        )
    }

    const returnHandler = (bool) => {
        console.log(bool)
        setShowModal(bool)
    }


    return (
        <>
            <div className='flex md:hidden p-3 fixed top-0 left-0 z-20'>
                {
                    showModal &&
                    <Modal
                        returnHandler={returnHandler}
                        content={navItems()}
                        title="Menu"
                    />
                }
                <button className='bg-white shadow shadow-black border-accent hover:bg-accent hover:text-white' onClick={() => setShowModal(true)}>Menu</button>
            </div>
            <div className='hidden md:block'>
                {navItems()}
            </div>
        </>
    )
}

export default Navbar