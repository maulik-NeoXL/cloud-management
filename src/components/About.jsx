import React from 'react'

export default function About(){
  return(
      <div className='w-full h-screen flex flex-col items-center justify-center'>
            <h1 className='text-2xl md:text-5xl font-bold'> Trusted by developers across the world</h1>
            <p className='text-gray-500 text-3xl px-4 text-center py-4'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis dignissimos itaque.</p>
        <div className='flex gap-4 w-full justify-center mt-4'>
          <div className='border rounded-xl border-gray-300 py-8 px-28 flex flex-col gap-4 items-center justify-center shadow-xl'>
            <h1 className='text-indigo-600 text-6xl font-bold'> 100% </h1>
            <p> Completion</p>
          </div>
          <div className='border rounded-xl border-gray-300 py-8 px-28 flex flex-col gap-4 items-center justify-center shadow-xl'>
            <h1 className='text-indigo-600 text-6xl font-bold'> 24/7 </h1>
            <p> Delivery</p>
          </div>
          <div className='border rounded-xl border-gray-300 py-8 px-28 flex flex-col gap-4 items-center justify-center shadow-xl'>
            <h1 className='text-indigo-600 text-6xl font-bold '> 100k </h1>
            <p> Transactions</p>
          </div>
        </div>
    </div>

  )
}
