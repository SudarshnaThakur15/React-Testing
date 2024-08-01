import React from 'react';

function Navbar() {
  return (
    <div>
      <ul className='bg-black p-4 text-lime-400 flex justify-around'>
        <li className='hover:bg-cyan-600 p-2'>
          <a href='/'>Home</a>
        </li>
        <li className='p-2'>
          <a href='#'>Login</a>
        </li>
        <li className='p-2'>
          <a href='#'>Signup</a>
        </li>
        <li className='p-2'>
          <a href='/'>Explore</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
