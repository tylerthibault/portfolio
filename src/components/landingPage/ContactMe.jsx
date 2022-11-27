import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

function ContactMe() {
    const [messageStatus, setMessageStatus] = useState('ready')
    const [formInfo, setFormInfo] = useState({
        fName: {
            content: '',
            errMsg: 'First Name must be more than 3 characters',
            required: {
                length: 3
            },
            errShowing: false,
            isValid: false
        },
        lName: {
            content: '',
            errMsg: 'Last Name must be more than 3 characters',
            required: {
                length: 3
            },
            errShowing: false,
            isValid: false
        },
        email: {
            content: '',
            errMsg: 'Email is Required',
            required: {
                regexString: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
            },
            errShowing: false,
            isValid: false
        },
        message: {
            content: '',
            errMsg: 'Message must be more than 15 characters',
            required: {
                length: 15
            },
            errShowing: false,
            isValid: false
        },
    })

    const inputHandler = (e) => {
        let name = e.target.name
        let value = e.target.value

        errHandler(name, value)
    }

    const errHandler = (name, value) => {

        let clone = structuredClone(formInfo)
        clone[name].content = value

        if (name === 'email') {
            if (clone[name].required.regexString.test(value)) {
                clone[name].errShowing = false
                clone[name].isValid = true
            } else {
                clone[name].errShowing = true
                clone[name].isValid = false
            }

        } else {
            if (value.length < formInfo[name].required.length) {
                clone[name].errShowing = true
                clone[name].isValid = false

            } else {
                clone[name].errShowing = false
                clone[name].isValid = true

            }
        }

        if (value.length === 0) {
            clone[name].errShowing = false
            clone[name].isValid = false

        }
        setFormInfo(clone)
    }

    const formHandler = (e) => {
        e.preventDefault()

        let clone = structuredClone(formInfo)
        let formValid = true
        for (const name in clone) {
            if (!clone[name].isValid) {
                clone[name].errShowing = true
                formValid = false
            }
        }
        if (formValid) {
            setMessageStatus('sending')
            emailjs.sendForm('service_z7obine', 'template_o0wjrsu', e.target, 'user_eOeta8I5Ss7MwEOB81mgt')
                .then((result) => {
                    for (const name in clone) {
                        clone[name].content = ''
                    }
                    setMessageStatus('sent')
                }, (error) => {
                    console.log(error.text);
                })
        }

        setFormInfo(clone)
    }

    const formView = () => {
        if (messageStatus === 'ready') {
            return (
                <form onSubmit={formHandler} method="post">
                    <div className="mb-3 flex flex-col md:flex-row gap-3">
                        <div className='flex flex-col w-full gap-1'>
                            <input onChange={inputHandler} value={formInfo.fName.content} type="text" name="fName" id="fName" placeholder='First Name' />
                            {
                                formInfo.fName.errShowing &&
                                <span className={errStyle}>{formInfo.fName.errMsg}</span>
                            }
                        </div>
                        <div className='flex flex-col w-full gap-1'>
                            <input onChange={inputHandler} value={formInfo.lName.content} type="text" name="lName" id="lName" placeholder='Last Name' />
                            {
                                formInfo.lName.errShowing &&
                                <span className={errStyle}>{formInfo.lName.errMsg}</span>
                            }
                        </div>
                    </div>
                    <div className="mb-3 flex flex-col w-full">
                        <input onChange={inputHandler} value={formInfo.email.content} className='w-full' type="text" name="email" id="email" placeholder='Email' />
                        {
                            formInfo.email.errShowing &&
                            <span className={errStyle}>{formInfo.email.errMsg}</span>
                        }
                    </div>
                    <div className="mb-3 flex flex-col">
                        <textarea onChange={inputHandler} value={formInfo.message.content} className='input w-full' name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
                        {
                            formInfo.message.errShowing &&
                            <span className={errStyle}>{formInfo.message.errMsg}</span>
                        }
                    </div>
                    <button className='w-full bg-accent border-accent font-bold'>Send</button>
                </form>
            )
        } else if (messageStatus === 'sending') {
            return (
                <div className='bg-white rounded-xl py-10 flex gap-3 justify-center'>
                    <span className='border border-black px-1 bg-secondary-light animate-spin rounded-full '></span>
                    <p className=''>Message is sending....</p>
                </div>
            )

        } else if (messageStatus === 'sent') {
            return (

                <div className='bg-white rounded-xl py-10 flex flex-col gap-3 justify-center items-center'>
                    <p className=''>Your message has been received.</p>
                    <button className='bg-accent w-fit' onClick={() => setMessageStatus('ready')}>Send Another Message</button>
                </div>
            )
        }
    }


    const errStyle = "bg-red-300 w-full rounded-lg my-3"

    return (
        <div className="flex justify-center w-full bg-secondary-light py-10" id='contactme'>
            <div className=' flex flex-col gap-3 w-3/4'>
                <h2 className='text-4xl text-white font-bold'>Contact Me</h2>
                {formView()}
            </div>
        </div>
    )
}

export default ContactMe