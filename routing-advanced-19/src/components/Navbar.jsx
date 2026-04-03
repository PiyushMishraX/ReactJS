import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex py-4 px-8 items-center bg-cyan-800 justify-between'>
      <h1 className='text-xl font-bold '>Website</h1>
      <div className='flex gap-8'>
        <a className='text-lg font-bold ' href="/">Home</a>
        <a className='text-lg font-bold ' href="/about">About</a>
        <a className='text-lg font-bold ' href="/contact">Contact</a>
      </div>
    </div>
  )
}

export default Navbar