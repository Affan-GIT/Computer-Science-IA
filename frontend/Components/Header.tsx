import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { BsCart2, BsSearch, BsFillCaretDownFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { BiMenu } from 'react-icons/bi';
import axios from 'axios';
import { selectCartState } from '../store/cartSlice';
import { useSelector } from 'react-redux';

type Props = {};

const Header = (props: Props) => {
  const [user, setUser] = useState();
  const cartState = useSelector(selectCartState);
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/users/getUser', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
        },
      })
      .then((result) => setUser(result.data.FirstName));
  }, []);
  return (
    <div className='sticky top-0 flex pt-10 max-w-7xl mx-auto align-center px-5 z-10 backdrop-blur-[10px]'>
      <div className='mr-10 hidden lg:inline-block'>
        <Logo />
      </div>
      <div className='flex-1 flex border-black border h-max p-2 rounded-[10px] text-3xl items-center'>
        <input
          placeholder='Search'
          className='flex-1 outline-none bg-transparent'
        />{' '}
        <BsSearch className='mr-5' />
      </div>
      <div className='flex md:ml-10'>
        <div className='flex items-center'>
          <BiMenu className='text-5xl sm:hidden mx-3' />
        </div>
        <div className='flex-col items-center hidden md:flex'>
          <span className='text-2xl'>Hello,</span>
          {user ? (
            <span className='text-lg text-gray-500'>{user}</span>
          ) : (
            <span
              className='text-lg text-gray-500 cursor-pointer'
              onClick={() => {
                window.location.assign('../SignIn');
              }}
            >
              Log in
            </span>
          )}
        </div>
        <div className='mx-10 items-center relative group hidden sm:flex'>
          <CgProfile className='text-5xl cursor-pointer' />
          <BsFillCaretDownFill className='text-xl text-gray-500 cursor-pointer' />
          <div className='absolute top-[100%] left-[50%] translate-x-[-50%] text-center border-transparent group-hover:border-black border-2 rounded-[10px] overflow-hidden h-0 w-0 group-hover:h-max group-hover:w-max flex flex-col bg-white'>
            <span
              className='cursor-pointer hover:bg-gray-500 py-1 px-3'
              onClick={() => {
                window.location.assign('../Orders');
              }}
            >
              Orders
            </span>
            <span
              className='cursor-pointer hover:bg-gray-500 py-1 px-3'
              onClick={() => {
                window.location.assign('../Profile');
              }}
            >
              Profile
            </span>
            <span
              className='cursor-pointer hover:bg-gray-500 py-1 px-3'
              onClick={() => {
                localStorage.removeItem('jwtToken');
                window.location.reload();
              }}
            >
              Log Out
            </span>
            <span
              className='cursor-pointer hover:bg-gray-500 py-1 px-3 md:hidden'
              onClick={() => {
                window.location.assign('../SignIn');
              }}
            >
              Login
            </span>
          </div>
        </div>
        <div
          className='items-center relative cursor-pointer hidden sm:flex'
          onClick={() => {
            window.location.assign('../Cart');
          }}
        >
          <BsCart2 className='text-3xl' />
          <div className='absolute top-[-5px] right-[-10px] text-2xl'>
            {cartState.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
