import React from "react";
import Link from "next/link";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href="../Landing">
      <div className="text-5xl cursor-pointer">Logo</div>
    </Link>
  );
};

export default Logo;
