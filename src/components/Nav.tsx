import React, {useState} from 'react'
import Logo from '../assets/imgs/law_logo.jpg'


const navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className=''>
            <div className="flex py-2 px-10 border-b-2 border-black justify-between items-center">
                <img src={Logo} alt="logo" className='w-14 h-14 rounded-[50%]' />
                <ul className='flex gap-6'>
                    <button className='navList'>Home Page</button>
                    <button className='navList'>About Us</button>
                    <button className='navList'>Services Offered</button>
                    <button className='navList'><button
                        onClick={toggleDropdown}
                        className=" px-4 py-2 rounded-md focus:outline-none"
                                    >
                                        {isOpen ? 'Case Types' : 'Case Types'} <i className="ri-arrow-down-s-line"></i>
                                    </button>
                                    {isOpen && (
                        <ul className="absolute mt-4 w-48 border rounded-md shadow-lg z-10">
                            <li className="px-4 py-2 cursor-pointer">Option 1</li>
                            <li className="px-4 py-2 cursor-pointer">Option 2</li>
                            <li className="px-4 py-2 cursor-pointer">Option 3</li>
                        </ul>
                        )}
                                    </button>
                    <div className='flex gap-4'>
                        <button className='px-4 h-10 border-2 border-black'>Sign Up</button>
                        <button className='px-4 h-10 border-2 bg-black border-black text-white'>Learn More</button>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default navbar