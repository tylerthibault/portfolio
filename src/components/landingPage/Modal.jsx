import React from 'react'

function Modal(props) {
    const {title="Title Here", content="Content Here"} = props

    const closeHandler = () => {
        props.returnHandler(false)
    }

    return (
        <div onClick={closeHandler} className='h-screen w-screen bg-black/75 absolute top-0 left-0 flex justify-center items-center'>
            <div onClick={(e) => e.stopPropagation()} className='h-fit w-[90%] bg-white rounded-xl pb-[5em]'>
                <div className='flex justify-between items-center gap-3 px-3'>
                    <h2 className='text-2xl'>{title}</h2>
                    <button onClick={closeHandler} className='bg-danger text-white'>Close</button>
                </div>
                <div>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Modal