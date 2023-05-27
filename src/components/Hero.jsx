import React from 'react'
import {CloudUploadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon} from "@heroicons/react/solid";
import Cyber from '../assets/cyber-bg.png'

export default function Hero(){
  return(
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] my-auto'>
        <div className='flex flex-col border-4 border-blue-500'>
          <p className='text-black'> Unique Sequencing & Production</p>
          <h1> Cloud Management</h1>
          <p> This is our Tech brand.</p>
          <button> Get Started</button>
        </div>

      </div>

    </div>
  )
}
