import React from "react";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

type Props = {
  FirstName: string;
  LastName: string;
  Email: string;
};

const UserCard = ({ FirstName, LastName, Email }: Props) => {
  return (
    <div className="flex flex-col border-2 border-black w-max p-5 text-3xl rounded-[10px] items-center gap-5">
      <Link href="Profile">
        <div className="text-5xl">
          <CgProfile />
        </div>
      </Link>
      <div className="flex gap-2">
        <div>{FirstName}</div>
        <div>{LastName}</div>
      </div>
      <div>{Email}</div>
    </div>
  );
};

export default UserCard;
