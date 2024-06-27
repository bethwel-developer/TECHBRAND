
import React, {useState} from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[95px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 pt-4 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
        <img
                        className="mx-auto w-36 cursor-pointer"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
          <ul className='hidden md:flex m-10'>
          <li className='hover:cursor'> <NavLink to="/">Home</NavLink></li>
          <li  className='cursor-pointer'> <NavLink to="/about">About and services</NavLink></li>
          <li  className='cursor-pointer'><NavLink to="/contacts">Contacts</NavLink></li>
        
          </ul>
        </div>
        <div className='hidden md:flex pr-14'>
        
         
         
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm 
                px-8 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
          <NavLink to="/signin"> signin</NavLink>
          </button>

          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm 
                px-8 py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
          <NavLink to="/signup"> signup</NavLink>
          </button>

        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

     <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><NavLink onClick={handleClose} to="/" smooth={true} duration={500}>Home</NavLink></li>
          <li className='border-b-2 border-zinc-300 w-full'><NavLink onClick={handleClose} to="/about" smooth={true} offset={-200} duration={500}>About</NavLink></li>
          <li className='border-b-2 border-zinc-300 w-full'><NavLink onClick={handleClose} to="/contacts" smooth={true} offset={-50} duration={500}>Contacts</NavLink></li>

        <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'> <NavLink  onClick={handleClose}  to="/signin" smooth={true} duration={500}> sign in</NavLink></button>
            <button className='px-8 py-3'> <NavLink  onClick={handleClose}  to="/signup"smooth={true} duration={500}> sign up</NavLink></button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
