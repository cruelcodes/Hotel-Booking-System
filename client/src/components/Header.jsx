import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-gray-800 shadow-lg'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <Link to='/'>
          <h1 className='font-bold text-lg sm:text-2xl flex flex-wrap'>
            <span className='text-amber-300'>Book</span>
            <span className='text-white'>Ease</span>
          </h1>
        </Link>

        <form className='bg-gray-700 p-2 rounded-full flex items-center shadow-inner'>
          <input
            type="text"
            placeholder='Search...'
            className='bg-transparent focus:outline-none text-white w-24 sm:w-64 placeholder-gray-400'
          />
          <FaSearch className='text-gray-400 ml-2' />
        </form>

        <ul className='flex gap-6'>
          <Link to='/'>
            <li className='hidden sm:inline text-gray-300 hover:text-amber-300 transition-colors duration-200'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-gray-300 hover:text-amber-300 transition-colors duration-200'>About</li>
          </Link>
          <Link to='/sign-in'>
            <li className='text-gray-300 hover:text-amber-300 transition-colors duration-200'>Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
