import React from 'react';
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <ul className='bg-black p-4 text-lime-400 flex justify-around'>
        <li className='hover:bg-cyan-600 p-2'>
          <Link to='/'>Home</Link>
        </li>
        <li className='p-2'>
          <Link to='/login'>Login</Link>
        </li>
        <li className='p-2'>
          <Link to='/signup'>Signup</Link>
        </li>
        <li className='p-2'>
          <Link to='/explore'>Explore</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
