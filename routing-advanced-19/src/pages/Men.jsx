import React from 'react'
import { Link } from 'react-router-dom'

const Men = () => {
  return (
    <div>
        <div className='flex justify-center gap-10 py-4'>
            <Link className='text-xl font-semibold' to='/men' >Men</Link>
            <Link className='text-xl font-semibold' to='/wommen' >WoMen</Link>
        </div>
        <h1>Men's collection</h1>
    </div>
  )
}

export default Men