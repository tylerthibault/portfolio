import React, { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader'

import TechData from '../data/techData'

function TechnologyWidget() {
    const [currentTechCategory, setCurrentTechCategory] = useState('languages')
    const [currentTech, setCurrentTech] = useState(TechData[currentTechCategory])
    const [activeItem, setActiveItem] = useState(0)

    useEffect(() => {
        setCurrentTech(TechData[currentTechCategory])
    }, [currentTechCategory])

    const techHandler = (e) => {
        let value = e.target.value
        if (value === 0) value = e.target.getAttribute('name')
        console.log(value)
        setActiveItem(0)
        setCurrentTechCategory(value)
    }

    return (
        <div className='bg-secondary-light md:bg-white mt-5'>
            <div className='  p-3 md:mx-10'>
                <SectionHeader
                    title="Technology"
                    textStyle="text-white md:text-black"
                />
            </div>
            <div className='md:grid grid-cols-12'>
                <div className='md:hidden'>
                    <label htmlFor="tech"></label>
                    <select className='uppercase rounded-md shadow px-3 text-center' name="tech" id="tech" onChange={techHandler}>
                        <option className='uppercase' value="languages">languages</option>
                        <option className='uppercase' value="frameworks">frameworks</option>
                        <option className='uppercase' value="databases">databases</option>
                        <option className='uppercase' value="tools">tools</option>
                    </select>
                </div>
                <div className='hidden md:block'>
                    <ul className='flex flex-col h-5/6'>
                        <li className={currentTechCategory === 'languages' ? 'mt-auto border rounded-full mx-3 bg-accent' : 'mt-auto border rounded-full mx-3 '} name="languages" onClick={(e) => techHandler(e)}>languages</li>
                        <li className={currentTechCategory === 'frameworks' ? 'mt-auto border rounded-full mx-3 bg-accent' : 'mt-auto border rounded-full mx-3 '} name="frameworks" onClick={(e) => techHandler(e)}>frameworks</li>
                        <li className={currentTechCategory === 'databases' ? 'mt-auto border rounded-full mx-3 bg-accent' : 'mt-auto border rounded-full mx-3 '} name="databases" onClick={(e) => techHandler(e)}>databases</li>
                        <li className={currentTechCategory === 'tools' ? 'mt-auto border rounded-full mx-3 bg-accent' : 'mt-auto border rounded-full mx-3 '} name="tools" onClick={(e) => techHandler(e)}>tools</li>
                    </ul>
                </div>
                <div className='col-span-11 flex flex-col md:grid grid-cols-6 gap-10 md:bg-secondary-light p-4 w-full'>
                    <div className='bg-white grid grid-cols-3 gap-2 p-3 mt-5 rounded-lg shadow justify-items-center col-span-2'>
                        {
                            currentTech.map((item, idx) => {
                                let active
                                if (idx === activeItem) active = 'bg-accent'
                                return (
                                    <div key={idx} className={'flex justify-center items-center shadow border-2 rounded-full w-20 h-20 p-2 ' + active} onClick={() => setActiveItem(idx)}>
                                        <p className='text-xs'>{item.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='mt-5 md:mt-0 text-white text-left col-span-4 flex flex-col justify-center'>
                        <h3 className='text-4xl'>{currentTech[activeItem].title}</h3>
                        <p className=''>{currentTech[activeItem].description}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TechnologyWidget