import { FaSearch, FaHome, FaInfoCircle, FaSignInAlt, FaBook } from 'react-icons/fa'; // Importing icons
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-gray-800 shadow-lg'>
      <div className='flex justify-between items-center px-6 py-3 w-full'>
        {/* Logo with responsive size */}
        <Link to='/' className='flex items-center'>
          <FaBook className='text-[#F5A623] text-3xl sm:text-4xl mr-2' />
          <h1 className='font-bold text-lg sm:text-2xl flex flex-wrap'>
            <span className='text-[#F5A623]'>Book</span>
            <span className='text-white'>Ease</span>
          </h1>
        </Link>

        {/* Center-aligned search bar */}
        <div className='flex-1 flex justify-center mx-4'>
          <form className='bg-gray-700 p-2 rounded-full flex items-center shadow-inner w-full max-w-lg'>
            <input
              type="text"
              placeholder='Search...'
              className='bg-transparent focus:outline-none text-white w-full placeholder-gray-400' 
            />
            <FaSearch className='text-gray-400 ml-2' />
          </form>
        </div>

        {/* Mobile menu toggle for small screens */}
        <ul className='hidden sm:flex gap-12'>
          <Link to='/'>
            <li className='flex items-center text-gray-300 hover:text-[#F5A623] transition-colors duration-200'>
              <FaHome className='mr-2' /> Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='flex items-center text-gray-300 hover:text-[#F5A623] transition-colors duration-200'>
              <FaInfoCircle className='mr-2' /> About
            </li>
          </Link>
          <Link to='/sign-in'>
            <li className='flex items-center text-gray-300 hover:text-[#F5A623] transition-colors duration-200'>
              <FaSignInAlt className='mr-2' /> Sign in
            </li>
          </Link>
        </ul>

        {/* Mobile menu button */}
        <div className='sm:hidden'>
          <button className='text-white'>
            {/* You can replace this with a menu icon or use something like hamburger menu */}
            <FaSearch />
          </button>
        </div>
      </div>
    </header>
  );
}
