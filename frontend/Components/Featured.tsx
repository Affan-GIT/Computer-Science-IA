import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";

type Props = {};

const Featured = (props: Props) => {
  const [image, setImage] = useState(1);
  return (
    <div className="w-[100vw] mx-auto max-w-7xl flex justify-center items-center text-3xl mt-5">
      <div className="cursor-pointer">
        <AiOutlineLeft onClick={() => setImage(image <= 1 ? 1 : image - 1)} />
      </div>
      <div className="mx-5 w-full">
        <Image
          src={`/images/featured/f${image}.jpg`}
          sizes="100vw"
          width="100%"
          height="50%"
          layout="responsive"
          alt="Featured Images"
        />
      </div>
      <div className="cursor-pointer">
        <AiOutlineRight onClick={() => setImage(image >= 3 ? 3 : image + 1)} />
      </div>
    </div>
  );
};

export default Featured;
