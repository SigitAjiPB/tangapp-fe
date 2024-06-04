import React from 'react';
import { Link } from 'react-router-dom';

const LoginButton =()=> {
  return (
    <Link to='/login'>
            <a
        class="block rounded-md bg-sky-400 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-500"
        href="#"
      >
        Login
      </a>
    </Link>
  )
}

export default LoginButton