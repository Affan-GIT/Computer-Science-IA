import React, { useCallback, useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { object, string, ref } from "yup";
import Input from "./Input";
import axios from "axios";
import Logo from "./Logo";
import Image from "next/image";

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
});
const useYupValidationResolver = (validationSchema: { validate: Function }) =>
  useCallback(
    async (data) => {
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

const Profile = (props: Props) => {
  const fileRef = useRef();
  const [user, setUser] = useState();
  const [file, setFile] = useState();
  const [profilePic, setProfilePic] = useState();
  const getUser = () => {
    axios
      .get("http://localhost:5000/api/v1/users/getUser", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
      })
      .then((result) => {
        axios
          .get("http://localhost:5000/api/v1/users/getUserAddresses", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("jwtToken"),
            },
          })
          .then((addressesResult) => {
            setUser({
              addresses: [...addressesResult.data, ""],
              ...result.data,
            });
          });
      });
  };

  const getProfilePic = () => {
    axios
      .get("http://localhost:5000/api/v1/users/getProfilePic", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwtToken"),
        },
      })
      .then((result) => {
        setProfilePic(result.data);
      });
  };

  useEffect(() => {
    getUser();
    getProfilePic();
  }, []);
  const resolver = useYupValidationResolver(validationSchema);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onSubmit", reValidateMode: "onChange", resolver });
  const onSubmit = (data) => {
    let payload = {
      token: localStorage.getItem("jwtToken"),
      addresses: [],
    };

    const AddressesArray = Array.from(
      document.getElementsByTagName("textarea")
    ).map((text) => text.value);
    const dataAddresses = [];
    for (let i = 0; i < AddressesArray.length; i += 2) {
      dataAddresses.push({
        AddressLine: AddressesArray.slice(i, i + 2)[0],
        PhoneNumber: AddressesArray.slice(i, i + 2)[1],
      });
    }
    for (let i = 0; i < AddressesArray.length / 2; i += 1) {
      if (
        dataAddresses[i].AddressLine !== "" &&
        dataAddresses[i].PhoneNumber !== ""
      ) {
        if (
          dataAddresses[i].AddressLine !== user.addresses[i].AddressLine ||
          dataAddresses[i].PhoneNumber !== user.addresses[i].PhoneNumber
        ) {
          dataAddresses[i].AddressID = user.addresses[i].AddressID;
          payload.addresses.push(dataAddresses[i]);
        }
      }
    }

    axios
      .patch("http://localhost:5000/api/v1/users/updateAddresses", payload)
      .then((result) => {
        if ((result.status = 200)) {
          console.log("updated successfully");
          getUser();
        }
      });

    payload = {
      token: localStorage.getItem("jwtToken"),
    };
    Object.keys(data)
      .map((key) => (data[key] !== user[key] ? key : ""))
      .forEach((key) => (key !== "" ? (payload[key] = data[key]) : ""));

    axios
      .patch("http://localhost:5000/api/v1/users/updateUser", payload)
      .then((result) => {
        if ((result.status = 200)) {
          console.log("updated successfully");
          getUser();
        }
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/v1/users/updateProfilePic";
    const formData = new FormData();
    formData.append("profilePic", e.target.files[0]);
    formData.append("fileName", e.target.files[0].name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + localStorage.getItem("jwtToken"),
      },
    };
    axios.post(url, formData, config).then((response) => {
      getProfilePic();
    });
  };

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto items-center">
      <div className="flex items-center mb-[3vw] mt-[3vw] gap-[5vw]">
        <Logo />

        <h1 className="text-7xl">User Profile</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full rounded-[10px] overflow-hidden"
      >
        {user ? (
          <>
            <div>
              <div className="flex justify-evenly">
                <div>
                  <Input
                    register={register}
                    errors={errors}
                    inputName="FirstName"
                    initialValue={user.FirstName}
                  />
                  <Input
                    register={register}
                    errors={errors}
                    inputName="LastName"
                    initialValue={user.LastName}
                  />
                  <Input
                    register={register}
                    errors={errors}
                    inputName="PhoneNumber"
                    initialValue={user.PhoneNumber}
                  />
                  <Input
                    register={register}
                    errors={errors}
                    inputName="Email"
                    initialValue={user.Email}
                  />
                </div>
                <div>
                  <div
                    className=" relative w-[300px] h-[300px] bg-black rounded-full overflow-hidden group"
                    onClick={() => {
                      fileRef.current.click();
                    }}
                  >
                    {profilePic ? (
                      <img
                        src={profilePic.image}
                        layout="fill"
                        alt="profile"
                        className="rounded-full object-cover hover:blur-xl cursor-pointer"
                      />
                    ) : (
                      ""
                    )}
                    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white hidden group-hover:inline text-3xl whitespace-nowrap ">
                      <form>
                        <input
                          hidden
                          ref={fileRef}
                          id="photo-upload"
                          type="file"
                          name="profilePic"
                          accept="image/x-png,image/webp,image/jpeg"
                          onChange={handleChange}
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <div className="flex text-3xl text-center">
                  <div className="p-3 flex-1 m-2">Address Line</div>
                  <div className="pr-5 m-2 mr-5">Phone Number</div>
                </div>
                {user.addresses.map((address, key) => (
                  <div key={key}>
                    <div className="flex">
                      <textarea
                        className="text-2xl bg-transparent p-3 outline-none flex-1 border-2 border-black rounded-[10px] m-2"
                        defaultValue={address.AddressLine}
                      />
                      <textarea
                        className="text-2xl bg-transparent p-3 outline-none border-2 border-black rounded-[10px] m-2"
                        defaultValue={address.PhoneNumber}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-5">
              <input
                className="cursor-pointer px-3 py-1 bg-black text-white rounded-[5px] text-2xl mb-5"
                type="submit"
                value="Update"
              />
            </div>
          </>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
};

export default Profile;
