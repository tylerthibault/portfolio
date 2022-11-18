import React, { useState } from 'react'
import Modal from './Modal'

function Navbar() {
    const [showModal, setShowModal] = useState(false)

    const navItems = () => {
        return (
            <ul>
                <li>About Me</li>
                <li>Technology</li>
                <li>Education</li>
                <li>Projects</li>
                <li>Work History</li>
                <li>Contact Me</li>
            </ul>
        )
    }

    const returnHandler = (bool) => {
        setShowModal(bool)
    }


    return (
        <>
            <div className='flex md:hidden p-3 fixed top-0 left-0'>
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
        </>
    )
}

export default Navbar