import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import Input from './Input';
import axios from 'axios';
import OTP from './OTP';

type Props = {};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = object({
  Credential: string()
    .required('Please Enter the Credential')
    .max(50, 'Credential is too long'),
  Password: string(),
});
const useYupValidationResolver = (validationSchema: { validate: Function }) =>
  useCallback(
    async (data: { Email: string; PhoneNumber: string; Password: string }) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });
        return { values, errors: {} };
      } catch (errors: any) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (
              allErrors: Array<object>,
              currentError: { path: string; type: string; message: string }
            ) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

const SignInForm = (props: Props) => {
  const resolver = useYupValidationResolver(validationSchema);
  const [OTPForm, setOTPForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: 'onSubmit', reValidateMode: 'onChange', resolver });
  const onSubmit = (data: { Credential: string; Password: string }) => {
    if (data.Password === '') {
      axios.post('http://localhost:5000/api/v1/users/sendOTP', {
        Email: data['Phone Number/Email'],
      });
      setPhoneNumber(data.Credential);
      console.log(phoneNumber);
      setOTPForm(true);
    } else {
      axios
        .post('http://localhost:5000/api/v1/users/signIn', data)
        .then((result) => {
          if (result.status === 200) {
            console.log(result.data);
            localStorage.setItem('jwtToken', result.data.token);
            window.location.assign('Landing');
          }
        });
    }
  };
  return (
    <div className='flex flex-col w-full max-w-7xl mx-auto h-[100vh] items-center'>
      <h1 className='text-7xl mb-10 mt-[5vw]'>Sign Up</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-[80vw] sm:w-[50vw] lg:w-[25vw] border-2 border-black rounded-[10px] overflow-hidden'
      >
        <div>
          {!OTPForm ? (
            <>
              <h3 className='text-xl text-center my-5'>
                (Enter Phone Number and leave password for OTP Login)
              </h3>
              <Input
                register={register}
                errors={errors}
                inputName='Credential'
              />
              <Input register={register} errors={errors} inputName='Password' />
            </>
          ) : (
            <OTP PhoneNumber={phoneNumber} NewUser={false} />
          )}
        </div>
        <div className='flex justify-center mb-3'>
          <div
            className='text-xl underline text-blue-500 cursor-pointer'
            onClick={() => {
              window.location.assign('SignUp');
            }}
          >
            New User?
          </div>
        </div>
        <div className='flex justify-center'>
          {!OTPForm ? (
            <input
              className='cursor-pointer px-3 py-1 bg-black text-white rounded-[5px] text-2xl mb-5'
              type='submit'
              value='Sign In'
            />
          ) : (
            ''
          )}
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
