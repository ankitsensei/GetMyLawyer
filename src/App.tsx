import React from 'react'
import NavBar from './components/Nav'

const App: React.FC = () => {
  return (
    <div>
      <div id="page1" className=''>
        <NavBar/>
      </div>
      <div id="hero" className='flex w-screen h-full'>
        <div id="heroText" className='w-1/2 px-20 py-52'>
          <h1 className='text-6xl font-bold'>Your Trusted Legal Partner for Every Case</h1>
          <p className='my-10 text-[22px]'>With a wealth of experience across various legal fields, I am dedicated to providing personalized solutions tailored to your unique needs. Whether you face a criminal charge, need family law assistance, or require business counsel, I'm here to guide you every step of the way.</p>
          <div className='flex gap-4'>
            <button className='px-6 h-12 border-2 bg-black border-black text-white'>Get Started</button>
            <button className='px-6 h-12 border-2 border-black'>Learn More</button>
          </div>
        </div>
        <div id="heroPic" className='w-1/2'>
          <img className='' src="https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/05/04/Local/Images/JUDGELEE_22.JPG?t=20170517" alt="judge" />
        </div>
      </div>
    </div>
  )
}

export default App