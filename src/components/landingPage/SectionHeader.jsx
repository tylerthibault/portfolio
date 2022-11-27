import React from 'react'

function SectionHeader(props) {
    const { title = "Title Here", textStyle } = props
    return (
        <div className='my-5'>
            <div className='hidden md:block bg-secondary-light p-3 pl-10 rounded-xl border border-black shadow shadow-black'>
                <div className='bg-white w-fit px-10 py-2 rounded-full shadow shadow-black'>
                    <h2 className={'text-xl font-bold uppercase tracking-[0.35em] ' + textStyle}>{title}</h2>
                </div>
            </div>
            <div className='md:hidden'>
                    <h2 className={'text-xl font-bold uppercase tracking-[0.35em] ' + textStyle}>{title}</h2>
            </div>
        </div>
    )
}

export default SectionHeader