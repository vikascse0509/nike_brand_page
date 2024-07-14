import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between max-w-7xl my-0 mx-auto h-20 items-center'>
          <div className="logo">
            <img src="./src/images/brand_logo.png" alt="logo" />
          </div>
          <ul className='flex list-none gap-6 cursor-pointer'>
            <li>Menu</li>
            <li>About</li>
            <li>Location</li>
            <li>Contact</li>
          </ul>
          <button className='bg-red-600 h-8 px-4 py-2 text-white font-medium'>Login</button>
        </nav>
      </div>
  )
}

export default Navbar