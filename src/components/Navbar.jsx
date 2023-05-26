import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

export default function Navbar(){

  const [menu, setMenu] = useState(true)

  const changeMenu = () =>{
    setMenu(!menu)
  }
  return(
    <div className='w-screen h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg '>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl sm:text-4xl font-bold mr-4 px-2 md:px-0 '> BRAND.</h1>
          <ul className='hidden md:flex'>
            <li> Home </li>
            <li> About</li>
            <li> Support </li>
            <li> Platforms </li>
            <li> Pricing</li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-black mr-4 font-medium'> Sign In</button>
          <button className='px-8 py-3 font-medium'> Sign Up</button>
        </div>
        <div className='md:hidden ease-in duration-300' onClick={changeMenu}>
          {menu? <MenuIcon  className='w-7 mr-4 '/> : <XIcon className='w-7 mr-4'/>}
        </div>

      </div>
      <ul className= {!menu? 'absolute bg-zinc-100 w-full' : 'hidden'}>
        <li className='border-b-2 border-zinc-300 w-full'> Home</li>
        <li className='border-b-2 border-zinc-300 w-full'> About</li>
        <li className='border-b-2 border-zinc-300 w-full'> Support </li>
        <li className='border-b-2 border-zinc-300 w-full'> Platforms </li>
        <li className='border-b-2 border-zinc-300 w-full'> Pricing</li>
        <div className='flex flex-col my-4 pl-3 pr-3'>
                <button className='bg-transparent text-indigo-600 py-3 mb-4'> Sign In</button>
                <button className='px-8 py-3 font-medium'> Sign Up</button>
              </div>
      </ul>


    </div>
  )
}
