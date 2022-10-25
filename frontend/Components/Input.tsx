import React, { useState } from 'react';
import { FieldErrorsImpl } from 'react-hook-form';

type InputProps = {
  register: Function;
  errors: FieldErrorsImpl<{
    [key: string]: { message: string };
  }>;
  inputName: string;
  initialValue: string;
};

const Input = ({ register, errors, inputName, initialValue }: InputProps) => {
  const [focus, setFocus] = useState(false);
  const { onChange, onBlur, name, ref } = register(inputName);
  return (
    <div
      className='relative flex flex-col m-5'
      onClick={() => {
        setFocus(true);
      }}
    >
      <div className='relative border-2 border-black rounded-[10px] -z-0'>
        <input
          onChange={onChange}
          className='text-2xl bg-transparent p-3 outline-none z-10 w-full'
          ref={ref}
          name={name}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={(e) => {
            if (e.target.value.length === 0) {
              setFocus(false);
            }
          }}
          defaultValue={initialValue}
        />
        {!initialValue ? (
          <div
            style={{
              position: 'absolute',
              top: focus ? '0%' : '50%',
              transform: 'translateY(-50%)',
              left: '10px',
              transition: 'all',
              backgroundColor: focus ? 'white' : 'transparent',
              transitionDuration: '100ms',
              transitionDelay: '0',
              paddingRight: '3px',
              paddingLeft: '3px',
              fontSize: focus ? '' : '1.5rem',
              zIndex: '-1',
              color: errors && errors[name]?.message ? 'red' : 'black',
            }}
          >
            {Array.from(inputName)
              .map((char) => (char.match(/[A-Z]/) ? ' ' + char : char))
              .join('')}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <span className='text-red-500 text-md text-center'>
        {`${errors[name]?.message || ''}`}
      </span>
    </div>
  );
};

export default Input;
