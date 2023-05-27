import React from 'react'
//import {CloudUploadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon} from "@heroicons/react/solid";
import Cyber from '../assets/cyber-bg.png'

export default function Hero(){
  return(
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 items-center max-w-[1240px] m-auto'>
        <div className='flex flex-col gap-4 px-8'>
          <p className='text-black text-xl md:text-3xl '> Unique Sequencing & Production</p>
          <h1 className='font-bold text-3xl md:text-7xl'> Cloud Management</h1>
          <p className='text-xl md:text-3xl'> This is our Tech brand.</p>
          <button className='px-8 py-3 font-medium w-8/12'> Get Started</button>
        </div>
        <div className='mt-14 md:mt-0'>
          <img src={Cyber} alt={''}  />
        </div>
      </div>

    </div>
  )
}
