import React from 'react'
import SectionHeader from './SectionHeader'

import KNT from '../img/kendalAndI.png'

function AboutMeWidget() {
    return (
        <div className='mt-10 mx-5 md:mx-10' id='aboutme'>
            <SectionHeader
                title="About Me"
            />
            <div className='flex flex-col md:grid grid-cols-2'>
                {/* <h2 className='text-2xl my-2 uppercase md:hidden font-bold tracking-widest'>About Me</h2> */}
                <div>
                    <img className='rounded-xl border border-black bg-black shadow p-[0.35em]' src={KNT} alt="Kendal and I" />
                </div>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <p>I am a full stack developer and a tech educator. The stacks that I have worked with and taught are the following.</p>
                    <ul className='list-disc list-inside text-left'>
                        <li>Python | Flask | MySQL</li>
                        <li>JavaScript | Express and React | MongoDb</li>
                        <li>C# | ASP.Net | MySQL</li>
                    </ul>
                    <p>Out of all of these I have spent the most time teaching and working with the python stack. However, if I had to pick a favorite I would say that I am a huge fan of the MERN (Mongodb, express, react, nodejs) stack. </p>
                    {/* <button className='bg-accent text-white'>Read More</button> */}
                </div>
            </div>
        </div>
    )
}

export default AboutMeWidget

/*
I am a full stack developer and a tech educator. I have worked a lot in Python with the flask framework as well as the Django framework. I have also spend many hours within the MERN stack and C# with ASP.NET. When it comes to picking a favorite technology suite I think I would have to pick something that works with React at the moment. MERN with tailwind as a CSS framework is currently my go to. However, I am a life long learner so this is bound to change at some point in the future.

*/