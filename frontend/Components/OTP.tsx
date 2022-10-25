import React, { useRef, useState } from 'react';
import axios from 'axios';

type Props = { PhoneNumber: string; NewUser: boolean };

const OTP = ({ PhoneNumber, NewUser }: Props) => {
  const [currFocus, setCurrFocus] = useState(1);
  const OTP1 = useRef();
  const OTP2 = useRef();
  const OTP3 = useRef();
  const OTP4 = useRef();
  const OTPRefs = [OTP1, OTP2, OTP3, OTP4];

  const changeFocus = () => {
    OTPRefs[currFocus]?.current.focus();
    currFocus < OTPRefs.length ? setCurrFocus(currFocus + 1) : '';
  };

  return (
    <div>
      <h1 className='text-center text-3xl mt-5'>Enter The OTP</h1>
      <h2 className='text-center text-lg mt-1   '>OTP Sent to {PhoneNumber}</h2>

      <div className='flex justify-center my-10 gap-5'>
        <input
          className='w-[50px] h-[50px] border-2 border-black text-3xl text-center'
          type='text'
          onChange={(e) => {
            e.target.value.match(/[0-9]/)
              ? changeFocus()
              : (e.target.value = '');
          }}
          maxLength={1}
          ref={OTP1}
        ></input>
        <input
          className='w-[50px] h-[50px] border-2 border-black text-3xl text-center'
          type='text'
          onChange={(e) => {
            e.target.value.match(/[0-9]/)
              ? changeFocus()
              : (e.target.value = '');
          }}
          maxLength={1}
          ref={OTP2}
        ></input>{' '}
        <input
          className='w-[50px] h-[50px] border-2 border-black text-3xl text-center'
          type='text'
          onChange={(e) => {
            e.target.value.match(/[0-9]/)
              ? changeFocus()
              : (e.target.value = '');
          }}
          maxLength={1}
          ref={OTP3}
        ></input>
        <input
          className='w-[50px] h-[50px] border-2 border-black text-3xl text-center'
          type='text'
          onChange={(e) => {
            e.target.value.match(/[0-9]/)
              ? changeFocus()
              : (e.target.value = '');
          }}
          maxLength={1}
          ref={OTP4}
        ></input>
      </div>
      <div className='flex justify-center'>
        <div
          className='cursor-pointer px-3 py-1 bg-black text-white rounded-[5px] text-2xl mb-5'
          onClick={() => {
            if (
              !!OTPRefs.reduce(
                (partialSum, a) => partialSum + parseInt(a.current.value),
                0
              )
            ) {
              axios
                .post('http://localhost:5000/api/v1/users/checkOTP', {
                  PhoneNumber: PhoneNumber,
                  OTP: OTPRefs.map((ref) => ref.current.value).join(''),
                  NewUser: NewUser,
                })
                .then((result) => {
                  if (result.status === 200) {
                    console.log(result.data);
                    localStorage.setItem('jwtToken', result.data.token);
                    // window.location.assign('Landing');
                  }
                });
            }
          }}
        >
          Check OTP
        </div>
      </div>
    </div>
  );
};

export default OTP;
