import logo from '../assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='hidden sm:block space-x-8 font-bold text-gray-500'>
                <Link href="/" className='hover:underline'>Personal</Link>
                <Link href="/" className='hover:underline'>Business</Link>
                <Link href="/" className='hover:underline'>Partners</Link>
            </div>
            <Link href="/">
                <Image src={logo} alt="Uphold Logo" className='mr-36 w-[100px] sm:w-full' />
            </Link>
            <button className="login_button">
                Log In
            </button>
        </nav>
    )
}


export default Navbar