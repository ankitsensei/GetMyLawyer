import React from 'react'
import Logo from '../assets/imgs/law_logo.jpg'
const navbar: React.FC = () => {
    return (
        <div>
            <div className='bg-slate-900'>
            <div className="flex pt-5 px-5 justify-between items-center">
                <img src={Logo} alt="logo" className='w-12 h-12 rounded-[50%]' />
                <ul className='flex gap-5'>
                    <li className='navList'>Home</li>
                    <li className='navList'>About</li>
                    <li className='navList'>Services</li>
                    <li className='navList'>Contact</li>
                    <li className='navList bg-red-600 hover:bg-red-700'>Hire Me</li>
                </ul>
            </div>
            <div className='flex justify-between items-center mx-[10vw] mt-40'>
                <div className="intro flex flex-col items-start">
                    <p className='text-5xl'>You may know me as</p>
                    <h1 className='text-8xl font-semibold text-rose-600'>JITENDRA MONDAL</h1>
                </div>
                    <img src="https://www.pngmart.com/files/5/Lawyer-PNG-Pic.png" alt="lawyer" className="w-auto h-[80vh]" />
                </div>
            </div>
        </div>
    )
}

export default navbar