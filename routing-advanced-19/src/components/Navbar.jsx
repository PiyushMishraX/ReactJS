import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex py-4 px-8 items-center bg-cyan-800 justify-between'>
      <h2 className='text-xl font-bold '>Website</h2>
      <div className='flex gap-10'>
        <a className='text-medium font-bold ' href="/">Home</a>
        <a className='text-medium font-bold ' href="/about">About</a>
        <a className='text-medium font-bold ' href="/contact">Contact</a>
      </div>
    </div>
  )
}

export default Navbar