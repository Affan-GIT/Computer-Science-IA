import React from 'react';
import { CgProfile } from 'react-icons/cg';

type Props = {
  FirstName: string;
  LastName: string;
  Email: string;
};

const UserCard = ({ FirstName, LastName, Email }: Props) => {
  return (
    <div className='flex flex-col border-2 border-black w-max p-5 text-3xl rounded-[10px] items-center gap-5'>
      <div
        className='text-5xl'
        onClick={() => {
          window.location.assign('Profile');
        }}
      >
        <CgProfile />
      </div>
      <div className='flex gap-2'>
        <div>{FirstName}</div>
        <div>{LastName}</div>
      </div>
      <div>{Email}</div>
    </div>
  );
};

export default UserCard;
