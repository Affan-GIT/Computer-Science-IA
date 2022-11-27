import React from "react";
import Link from "next/link";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href="../Landing">
      <div className="text-5xl cursor-pointer font-poppins">NISA</div>
    </Link>
  );
};

export default Logo;
