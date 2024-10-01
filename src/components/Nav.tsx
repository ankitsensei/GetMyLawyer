import React from 'react'
import Logo from '../assets/imgs/law_logo.jpg'
const navbar: React.FC = () => {
    return (
        <div className="flex mt-5 mx-5 justify-between items-center">
            <img src={Logo} alt="logo" className='w-12 h-12 rounded-[50%]' />
            <ul className='flex gap-5'>
                <li className='navList'>Home</li>
                <li className='navList'>About</li>
                <li className='navList'>Services</li>
                <li className='navList'>Contact</li>
                <li className='navList bg-red-600 hover:bg-red-700'>Hire Me</li>
            </ul>
        </div>
    )
}

export default navbar