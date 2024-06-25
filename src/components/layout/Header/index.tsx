import React from 'react'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between w-full min-h-16 bg-slate-500 px-3'>
      <h1 onClick={() => navigate('/posts')} className='m-0 p-0 text-lg text-white cursor-pointer'>BandaPixels</h1>
      <nav className='flex items-center'>
        <ul className='flex items-center gap-6'>
          <li className='text-white cursor-pointer'>SomeLink</li>
          <li className='text-white cursor-pointer'>SomeLink</li>
          <li className='text-white cursor-pointer'>SomeLink</li>
        </ul>
      </nav>
    </div>
  )
}

export default Index