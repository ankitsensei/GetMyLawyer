import React from 'react'
import NavBar from './components/Nav'
import Lawyer from './assets/imgs/lawyer.png'

const App: React.FC = () => {
  return (
    <div>
      <div id="page1" className='bg-[#0a2342] text-zinc-400'>
        <NavBar/>
        <div className='flex justify-between items-center mx-[5vw] mt-24'>
                <div className="intro flex flex-col items-start">
                    <p className='text-5xl'>You may know me as</p>
                    <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">
JITENDRA MONDAL</h1>
                    <p className='text-2xl text-slate-200'>Expert Legal Services for Your Needs.</p>
                    <div className='flex gap-5 w-full justify-center'>
                      <button className='bg-purple-600 text-white outline-none w-40 h-10 rounded-[50px] mt-10 hover:bg-purple-800'>Hire me now</button>
                      <button className='bg-white text-purple-600 outline-none w-40 h-10 rounded-[50px] mt-10 hover:bg-[#d82a7f] hover:text-white'>Know me more</button>
                    
                    </div>
                </div>
                    <img src={Lawyer} alt="lawyer" className="w-auto h-[80vh]" />
                </div>
      </div>
      <div id="page2" className='w-full h-screen bg-[#0A2342] text-white py-20'>
                <h1 className="text-4xl font-semibold flex justify-center underline">Services We Offer</h1>
                <ul>
                    <li>Legal Consultation</li>
                    <li>Document Drafting</li>
                </ul>
      </div>
    </div>
  )
}

export default App