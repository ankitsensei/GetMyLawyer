import React from 'react'
import NavBar from './components/Nav'
import Reviews from './components/Reviews'

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
      <div id="hero2" className='flex items-center justify-between my-28 mx-10'>
        <div id="hero2Text" className='p-20 w-1/2'>
          <h1 className='text-4xl font-bold'>Your Trusted Partner for Comprehensive Legal Solutions Tailored to Your Needs</h1>
          <p className='my-10 text-[22px]'>With extensive experience across various legal fields, I provide personalized strategies that cater to your unique situation. My proven track record demonstrates my commitment to achieving favorable outcomes for my clients.</p>
        </div>
        <div id="hero2Pic" className='w-1/2'>
          <img className='h-[600px] w-auto' src="https://thepublicsquare.com/wp-content/uploads/2019/09/judge-web.jpg" alt="judge" />
        </div>  
      </div>
      <div id="trust1" className='mt-24'>
        <div className='flex flex-col mb-16 justify-center items-center'>
            <p className='text-s mb-5 font-semibold'>Justice</p>
            <h1 className="text-4xl font-bold">Your Trusted Legal Partner</h1>
            <p className='text-s'>Expert legal representation for various case types.</p>
        </div>
        <div className='flex justify-between mx-20 mb-40 gap-6'>
          <div id="boxCase1" className='border-2 border-black w-2/4 h-[350px] p-10 flex flex-col gap-4'>
            <i className="fa-solid fa-cube text-5xl"></i>
            <h1 className = "text-3xl font-bold">Case Specialization</h1>
            <p className='text-lg'>From criminal defense to family law, I cover a wide range of legal issues.</p>
            <div className='flex justify-start items-center gap-5'>
              <button className='px-5 py-2 border-2 border-black'>Learn More</button>
              <button className='flex gap-2 items-center'>Contact<i className="fa-solid fa-chevron-right text-lg"></i></button>
            </div>
          </div>
          <div id="boxCase2" className='border-2 border-black w-1/4 h-[350px] p-10 flex flex-col gap-4'>
            <i className="fa-solid fa-cube text-5xl"></i>
            <h1 className = "text-2xl font-bold">Comprehensive Legal Services Offered</h1>
            <p className='text-lg'>Criminal Defense, Family Law, Corporate Law.</p>
            <button className='flex gap-2 items-center text-lg'>Explore<i className="fa-solid fa-chevron-right text-lg"></i></button>
          </div>
          <div id="boxCase3" className='border-2 border-black w-1/4 h-[350px] p-10 flex flex-col gap-4'>
            <i className="fa-solid fa-cube text-5xl"></i>
            <h1 className = "text-2xl font-bold">Why Chosse My Service?</h1>
            <p className='text-lg'>Dedicated, experienced, and client-focused legal assistance.</p>
            <button className='flex gap-2 items-center text-lg'>Get Started<i className="fa-solid fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
      <div id="trust2" className='mx-20'>
        <h1 className='text-5xl font-bold my-5'>Client Testimonials</h1>
        <p className='font-semibold '>A true professional who exceeded my expectations.</p>
          <div className='flex mx-20 my-14 gap-2'>
            <Reviews stars = {5} comment="I felt supported every step of the way." profile = "https://c.pxhere.com/photos/08/7a/male_portrait_profile_social_media_cv_young_elegant_suit-459413.jpg!d" name = "John Doe" position = "CEO, Legal Corp" />
            <Reviews stars = {5} comment="Expert advice that made all the difference!" profile = "https://i.pinimg.com/originals/3d/40/6a/3d406aa185eb1845276ecf3a8c963fce.jpg" name = "Jane Smith" position = "Manager, Law Firm" />
            <Reviews stars = {5} comment="Highly recommend for any legal issues!" profile = "https://sguru.org/wp-content/uploads/2017/06/bb4d683d694b005802524761d9f8d0c9.jpg" name = "Mark Johnson" position = "Director, Justice Inc" />
          </div>
      </div>
    </div>
  )
}

export default App