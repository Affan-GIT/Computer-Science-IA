import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { object, string, ref } from "yup";
import Input from "./Input";
import axios from "axios";
import OTP from "./OTP";
import Link from "next/link";

type Props = {};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = object({
  FirstName: string()
    .required("Please Enter the First Name")
    .max(40, "First Name is too long"),
  LastName: string()
    .required("Please Enter the Last Name")
    .max(40, "Last Name is too long"),
  Email: string()
    .email("Please enter a valid email id")
    .required("Please Enter the Email")
    .max(50, "Email Id is too long"),
  PhoneNumber: string()
    .required("Please enter the Phone Number")
    .matches(phoneRegExp, "Phone Number is invalid")
    .max(15, "Phone Number is too long"),
  Password: string().required("Please enter the Password"),
  ConfirmPassword: string()
    .required("Please re-enter the Password")
    .oneOf([ref("Password"), null], "Passwords must match"),
});

const useYupValidationResolver = (validationSchema: { validate: Function }) =>
  useCallback(
    async (data: {
      FirstName: string;
      LastName: string;
      Email: string;
      PhoneNumber: string;
      Password: string;
      ConfirmPassword: string;
    }) => {
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
                type: currentError.type ?? "validation",
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

const RegistrationForm = (props: Props) => {
  const [formNum, setFormNum] = useState(0);
  const [Phonenumber, setPhoneNumber] = useState("");
  const resolver = useYupValidationResolver(validationSchema);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onSubmit", reValidateMode: "onChange", resolver });
  const onSubmit = (data: {
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
    Password: string;
    ConfirmPassword?: string;
  }) => {
    delete data.ConfirmPassword;
    setPhoneNumber(data.PhoneNumber);
    setFormNum(formNum + 1);
    console.log(data.PhoneNumber);
    axios.post("http://localhost:5000/api/v1/users/newUser", data);
  };
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto h-[100vh] items-center">
      <h1 className="text-7xl mb-10 mt-[5vw]">Sign Up</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[80vw] sm:w-[50vw] lg:w-[25vw] border-2 border-black rounded-[10px] overflow-hidden"
      >
        <div style={{ display: formNum === 0 ? "block" : "none" }}>
          <Input register={register} errors={errors} inputName="FirstName" />
          <Input register={register} errors={errors} inputName="LastName" />
          <Input register={register} errors={errors} inputName="PhoneNumber" />
          <Input register={register} errors={errors} inputName="Email" />
        </div>
        <div style={{ display: formNum === 1 ? "block" : "none" }}>
          <Input register={register} errors={errors} inputName="Password" />
          <Input
            register={register}
            errors={errors}
            inputName="ConfirmPassword"
          />
        </div>
        <div style={{ display: formNum === 2 ? "block" : "none" }}>
          <OTP PhoneNumber={Phonenumber} NewUser={true} />
        </div>
        <div className="flex justify-center mb-3">
          <Link href="SignIn">
            <div className="text-xl underline text-blue-500 cursor-pointer">
              Already have an account?
            </div>
          </Link>
        </div>
        <div className="flex justify-center">
          {formNum === 1 ? (
            <div className="flex">
              <div
                className="cursor-pointer px-3 py-1 text-white rounded-[5px] text-2xl mb-5 mr-5"
                style={{
                  backgroundColor:
                    Object.values(errors).length === 0 ? "black" : "red",
                }}
                onClick={() => {
                  setFormNum(formNum - 1);
                }}
              >
                Back
              </div>
              <input
                className="cursor-pointer px-3 py-1 bg-black text-white rounded-[5px] text-2xl mb-5"
                type="submit"
                value="Get OTP"
              />
            </div>
          ) : (
            <div
              className="cursor-pointer px-3 py-1 bg-black text-white rounded-[5px] text-2xl mb-5"
              onClick={() => {
                setFormNum(formNum + 1);
              }}
            >
              Next
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
