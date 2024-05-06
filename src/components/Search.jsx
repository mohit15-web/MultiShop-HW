'use client'

import React from 'react'
// import { Menu, X } from 'lucide-react'

export function Search() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className=" w-full bg-white py-4">
      <div className="mx-auto flex items-center justify-between py-2 sm:px-6">
        <div className="inline-flex items-center">
          
          <span className="font-bold text-4xl tracking-widest ml-14">MULTISHOP</span>
        </div>
        <div className='flex'>
            <input type="text" placeholder='Search For Products' className='border px-3 py-1 w-80 hidden lg:block 2xl:block' />
            <button className='border py-1 px-2'>Search</button>
        </div>
        <div className="hidden lg:block mr-10">
        <h1 className='text-lg'>Customer Service </h1>
                <h1 className='text-2xl text-gray-500'>+012 345 6789</h1>
        </div>
        </div>
       
    </div>
  )
}
