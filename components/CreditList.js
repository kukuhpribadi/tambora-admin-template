import React from "react";
import Image from "next/image";

const CreditList = ({ img, creator }) => {
  return (
    <div className="flex flex-col items-center gap-3 p-5 rounded-md shadow-md bg-white text-gray-600">
      <div>
        <Image src={img} alt="John Doe" width={200} height={200} />
      </div>
      <div>{creator}</div>
    </div>
  );
};

export default CreditList;
