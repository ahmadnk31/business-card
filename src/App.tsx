import React from 'react'

import { BsFacebook, BsInstagram, BsLinkedin, BsTiktok, BsTwitch, BsTwitterX } from 'react-icons/bs'
const Header=()=>{
  return(
    <header className=''>
      <img src="https://images.unsplash.com/photo-1467307983825-619715426c70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmx8ZW58MHx8MHx8fDA%3D" alt="" />
      <section className='text-center my-6'>
        <div className='mb-2'>
        <h1 className='text-xl font-bold'>Ahmadullah Nekzad</h1>
        <h2 className='text-gray-700'>Project manager</h2>
        </div>
        <p className='text-black/80'>ahmad@gmail.com</p>
      </section>
      <section className='flex justify-center gap-4'>
        <button className='bg-white shadow px-4 py-2 rounded flex items-center justify-center gap-2'>
          <BsTwitterX/>
          X
        </button>
        <button className='bg-white rounded shadow px-4 py-2 flex items-center justify-center gap-2'>
          <BsLinkedin/>
          Linkedin
        </button>
      </section>
    </header>
  )

}
const Main=()=>{
  return(
    <main className='px-8 my-6'>
      <section className='mb-4'>
        <h2 className='text-xl font-bold'>About</h2>
        <p className='mb-4 text-gray-700'>
          I am a project manager with 5 years of experience in the tech industry.
          I have worked with companies like Google, Facebook, and Amazon.
          My expertise includes project management, frontend development, and backend development.

        </p>
        <h2 className='text-xl font-bold'>Skills</h2>
        <ul className='list-disc ml-4 text-gray-700'>
          <li>Project Management</li>
          <li>Frontend Development</li>
          <li>Backend Development</li>
        </ul>
      </section>
      <section>
        <h2 className='text-xl font-bold'>Experience</h2>
        <ul className='list-disc ml-4 text-gray-700'>
          <li>Project Manager at Google</li>
          <li>Frontend Developer at Facebook</li>
          <li>Backend Developer at Amazon</li>
        </ul>
      </section>
    </main>
  
  )
}

const Footer=()=>{
  return(
    <footer className='text-center p-4'>
      <div className='flex justify-evenly mb-4'>
      <a href='www.facebook.com/@ahmadn20' role='icon' className='text-2xl p-2 rounded border'><BsFacebook/></a>
      <a href='www.facebook.com/@ahmadn20' role='icon' className='text-2xl p-2 rounded border'><BsTwitterX/></a>
      <a href='www.facebook.com/@ahmadn20' role='icon' className='text-2xl p-2 rounded border'><BsTwitch/></a>
      <a href='www.facebook.com/@ahmadn20' role='icon' className='text-2xl p-2 rounded border'><BsInstagram/></a>
      <a href='www.facebook.com/@ahmadn20' role='icon' className='text-2xl p-2 rounded border'><BsTiktok/></a>
      </div>
      <small>&copy; 2021 Ahmadullah Nekzad</small>
    </footer>
  
  )
}


const App = () => {
  return (
    <div className='border w-1/3 m-4 rounded overflow-hidden mx-auto'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App