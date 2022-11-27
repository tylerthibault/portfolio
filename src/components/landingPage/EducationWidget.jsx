import React, { useState } from 'react'
import SectionHeader from './SectionHeader'

import EducationData from '../../data/educationData'

function EducationWidget() {
    const [edu, setEdu] = useState(EducationData.edu)
    const [activeEdu, setActiveEdu] = useState(1)


    return (
        <div className='md:mx-10 h-full' id='education'>
            <SectionHeader
                title="Education"
            />
            <div className='flex w-full flex-col md:flex-row-reverse relative md:h-96 p-3 md:p-0'>
                <div className='w-full md:w-3/12 h-full gap-3 flex flex-col'>
                    {
                        edu.map((item, idx) => {
                            if (activeEdu === idx) {
                                return (
                                    <div key={'edu' + idx} className='md:absolute md:-translate-x-[100%] md:w-3/4 p-5 bg-blue-200 rounded-xl shadow-md shadow-black h-full overflow-auto duration-500'>
                                        <div className="grid grid-cols-3 h-full gap-5 place-items-center">
                                            <div className='col-span-full md:col-span-1 bg-black h-full w-full flex justify-center items-center rounded-xl p-3'>
                                                <img src={edu[activeEdu].logo} alt={edu[activeEdu].logoAlt} />
                                            </div>
                                            <div className="col-span-full md:col-span-2 flex flex-col gap-3">
                                                <h2 className='text-2xl'>{edu[activeEdu].title}</h2>
                                                <p>{edu[activeEdu].dates}</p>
                                                <p className='text-left'>{edu[activeEdu].content}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={'edu' + idx} className='mt-auto px-5 duration-500' onClick={() => setActiveEdu(idx)}>
                                        <p className={'btn mt-auto cursor-pointer py-5'}>{item.abv}</p>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                {/* <div className=''>
                    test
                </div> */}

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