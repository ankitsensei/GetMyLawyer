import React from 'react'
import NavBar from './components/Nav'

const App: React.FC = () => {
  return (
    <div>
      <div id="page1">
        <NavBar/>
        <div className='flex justify-between items-center mx-[10vw] mt-40'>
                <div className="intro flex flex-col items-start">
                    <p className='text-5xl'>You may know me as</p>
                    <h1 className='text-8xl font-semibold text-rose-600'>JITENDRA MONDAL</h1>
                    <p className='text-2xl'>Expert Legal Services for Your Needs.</p>
                    <button className='bg-rose-600 px-10 py-3 rounded-[50px] mt-10 hover:bg-rose-700'>Hire me now</button>
                </div>
                    <img src="https://www.pngmart.com/files/5/Lawyer-PNG-Pic.png" alt="lawyer" className="w-auto h-[80vh]" />
                </div>
      </div>
    </div>
  )
}

export default App