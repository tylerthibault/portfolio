import React, { useState } from 'react'
import Modal from './Modal'

function Navbar() {
    const [showModal, setShowModal] = useState(false)

    const navItems = () => {
        return (
            <div className='flex justify-center'>
                <ul className='flex flex-col md:flex-row gap-10 justify-center mt-10 mb-3 text-secondary-light md:border-b-[0.25em] border-secondary-light w-fit px-10'>
                    <li className='text-2xl'>About Me</li>
                    <li className='text-2xl'>Technology</li>
                    <li className='text-2xl'>Education</li>
                    <li className='text-2xl'>Projects</li>
                    <li className='text-2xl'>Work History</li>
                    <li className='text-2xl'>Contact Me</li>
                </ul>
            </div>
        )
    }

    const returnHandler = (bool) => {
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
                <button className='bg-white' onClick={() => setShowModal(true)}>Menu</button>
            </div>
            <div className='hidden md:block'>
                {navItems()}
            </div>
        </>
    )
}

export default Navbar