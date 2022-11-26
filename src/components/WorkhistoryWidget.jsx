import React, { useState } from 'react'
import SectionHeader from './SectionHeader'

import workHistory from '../data/workhistoryData'

function WorkhistoryWidget() {
    const [work, setWork] = useState(workHistory.workHistory)
    const [activeWork, setActiveWork] = useState(0)

    return (
        <div className='md:mx-10' id='workhistory'>
            <SectionHeader
                title="Work History"
            />
            <div className='flex gap-3 justify-center'>
            {
                work.map((item, idx) => {
                    let activeStyle = ''
                    if (activeWork === idx) activeStyle = 'bg-accent'
                    return (
                        <div key={'work' + idx} className={' rounded-xl cursor-pointer h-20 w-20 flex items-center justify-center shadow shadow-black ' + activeStyle} onClick={() => setActiveWork(idx)}>
                            <p>{item.title}</p>
                        </div>
                    )
                })
            }
            </div>
            <div className='mt-5 bg-secondary-light md:bg-white m-5 rounded-lg md:rounded-none md:shadow-none shadow shadow-black p-3'>
                <h2 className='text-2xl font-bold'>{work[activeWork].title}</h2>
                <div className='grid grid-cols-3 gap-10 items-center justify-center'>
                    <img className='col-span-full md:col-span-1 justify-self-center bg-white p-5 rounded-lg mt-5' src={work[activeWork].photo} alt={work[activeWork].photoAlt} />
                    <div className='col-span-full md:col-span-2'>
                    <p>{work[activeWork].content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkhistoryWidget