import * as React from "react";
import Image from "next/image";

const MumbaiSvg = ({ className, props }: any) => (
  <Image
    src="/pictures/mumbai.png"
    width={200}
    height={200}
    className={className}
    {...props}
  />
);

export default MumbaiSvg;
