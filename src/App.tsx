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
      <div id="page2" className='w-full h-[100%] bg-[#0A2342] text-white py-20'>
                <h1 className="text-5xl font-semibold flex justify-center underline text-purple-600">Services We Offer</h1>
                <ul className="mt-20 mx-20 flex justify-center gap-10 flex-wrap" id="page2li">
                    <li><h1>Legal Consultation</h1><p>Offering advice on legal matters like rights, obligations, and the legal process.</p></li>
                    <li><h1>Document Drafting</h1> <p>Preparing legal documents such as contracts, wills, trusts, and agreements.</p></li>
                    <li>
                      <h1>Representation in Court</h1>
                      <p>Defending or prosecuting clients in criminal and civil court cases.</p>
                    </li>
                    <li>
                      <h1>Dispute Resolution</h1>
                      <p>Assisting in resolving disputes through mediation, arbitration, or negotiation.</p>
                    </li>
                    <li>
                      <h1>Legal Research:</h1>
                      <p>Investigating case law, statutes, and regulations to support legal arguments.</p>
                    </li>
                    <li>
                      <h1>Contract Review</h1>
                      <p>Reviewing agreements and contracts to ensure they are legally sound and protect the client's interests.</p>
                    </li>
                    <li>
                      <h1>Corporate Services</h1>
                      <p>Handling business-related legal issues like company formation, compliance, mergers, and acquisitions.</p>
                    </li>
                    <li>
                      <h1>Family Law</h1>
                      <p>Handling cases related to divorce, child custody, alimony, and adoption.</p>
                    </li>
                    <li>
                      <h1>Criminal Defense</h1>
                      <p>Defending individuals accused of crimes.</p>
                    </li>
                    <li>
                      <h1>Estate Planning</h1>
                      <p>Helping clients plan the distribution of their assets after death through wills or trusts.</p>
                    </li>
                </ul>
      </div>
    </div>
  )
}

export default App