import React from 'react'

function Footer() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div></div>
            <div className='flex flex-col gap-3'>
                <p>Tyler Thibault</p>
                <a href="emailto:tyler.thibault@protonmail.com">tyler.thibault@protonmail.com</a>
                <div>
                <span>Phone # </span>
                <a href="tel:2532057917">2532057917</a>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Footer