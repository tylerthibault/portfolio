import React, { useState } from 'react'
import SectionHeader from './SectionHeader'

import EducationData from '../data/educationData'

function EducationWidget() {
    const [edu, setEdu] = useState(EducationData.edu)
    const [activeEdu, setActiveEdu] = useState(1)


    return (
        <div className='md:mx-10 h-full'>
            <SectionHeader
                title="Education"
            />
            <div className='flex flex-col gap-3 h-[10em] relative '>
                {
                    edu.map((item, idx) => {
                        let baseStyle = 'border border-black py-1 w-44 flex flex-col items-center duration-500 h-full '
                        let normalStyle = 'rounded-xl items-center shadow-black shadow cursor-pointer '
                        let active = 'rounded-xl translate-x-[20%] h-[20em]  absolute w-5/6 bg-secondary-light shadow-lg shadow-black '
                        if (idx === activeEdu) {
                            return (
                                <div key={idx} className={baseStyle + active} onClick={() => setActiveEdu(idx)}>
                                    <div className='grid grid-cols-3 p-5 gap-10 w-full h-full'>
                                    <div className='flex justify-center bg-black p-5 rounded-lg shadow-lg shadow-black w- h-full'>
                                            <img className='h-14' src={item.logo} alt="" />
                                        </div>
                                        <div className='col-span-2 text-white flex flex-col gap-1'>
                                            <h2 className='text-2xl text-white underline underline-offset-4'>{item.title}</h2>
                                            <p>{item.dates}</p>
                                            <p>{item.content}</p>
                                            <button className='w-fit bg-white text-black shadow-black shadow'>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={idx} className={baseStyle + normalStyle} onClick={() => setActiveEdu(idx)}>
                                    {item.abv}
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default EducationWidget



/*
<div className='grid grid-cols-3 p-5 gap-10 w-full h-full'>
                                        <div className='flex justify-center bg-black p-5 rounded-lg shadow-lg shadow-black w-full'>
                                            <img className='h-32' src={item.logo} alt="" />
                                        </div>
                                        <div className='col-span-2 text-white flex flex-col gap-1'>
                                            <h2 className='text-2xl text-white underline underline-offset-4'>{item.title}</h2>
                                            <p>{item.dates}</p>
                                            <p>{item.content}</p>
                                            <button className='w-fit bg-white text-black shadow-black shadow'>Read More</button>
                                        </div>
                                    </div>
                                    */