'use client'

import logo from '../assets/logo.svg'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='hidden sm:block space-x-8 font-bold text-gray-500'>
                <a href="/" className='hover:underline'>Personal</a>
                <a href="/" className='hover:underline'>Business</a>
                <a href="/" className='hover:underline'>Partners</a>
            </div>
            <a href="/">
                <Image src={logo} alt="Uphold Logo" className='mr-36 w-[100px] sm:w-full' />
            </a>
            <button className="login_button">
                Log In
            </button>
        </nav>
    )
}


export default Navbar