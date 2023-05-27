import React from 'react'
import {HiPhone, HiSupport, HiChip} from  'react-icons/hi';

export default function Support(){
  return(
    <div className='w-full h-screen py-16'>
      <div className="bg-img_bg flex flex-col items-center">
        <h1 className='text-gray-200 text-3xl'> SUPPORT</h1>
        <h1 className='text-5xl py-6 text-white font-bold'> Finding the right team</h1>
        <p className='text-gray-300 text-3xl px-8 justify-evenly'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

        <div className='flex gap-12 px-8 mt-8'>
          <div className='flex flex-col border border-gray-200'>
            <div className='bg-indigo-600 p-4 w-2/12'>
              <HiPhone size={32}/>
            </div>
            <div>
              <h1> Sales </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun ut labore
              </p>
            </div>
          </div>

          <div className='flex flex-col'>
                      <div className='bg-indigo-600 p-4'>
                        <HiPhone size={32}/>
                      </div>
                          <h1> Sales </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                      </p>

                    </div>

          <div className='flex flex-col'>
                      <div className='bg-indigo-600 p-4'>
                        <HiPhone size={32}/>
                      </div>
                          <h1> Sales </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                      </p>

                    </div>
        </div>

      </div>
    </div>
  )
}
