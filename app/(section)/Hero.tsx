import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const imageSize = 300;
  return (
    <div className="max-w-[1060px] mx-auto w-full flex gap-10 relative justify-center items-center h-auto sm:h-[400px] mt-8 px-4">
      <Image
        src="https://idealtech.com.my/wp-content/uploads/2023/10/career-left.webp"
        width={imageSize}
        height={imageSize}
        alt="logo"
        className="absolute left-0 hidden sm:block"
        priority
        unoptimized={true}
      />
      <div className="text-center">
        <div className="flex flex-col gap-4 w-fit">
          <h1 className="leading-none">
            Join the <br /> <b className="text-accent">Ideal</b> Team.
          </h1>
          <p>Find your career path through Ideal Tech PC!</p>
          <Link href={"#positions"}>
            <button className="py-2 px-4 sm:py-4 sm:px-8 border-white border-[1px] rounded-lg text-xs w-fit mx-auto sm:mt-8 mt-0">
              <p className="text-[10px] sm:text-sm">
                <b>Explore Positions</b>
              </p>
            </button>
          </Link>
          <Image
            src="https://idealtech.com.my/wp-content/uploads/2023/10/career-center.webp"
            width={imageSize + 150}
            height={imageSize + 150}
            alt="logo"
            className="sm:hidden block"
            priority
            unoptimized={true}
          />
        </div>
      </div>
      <Image
        src="https://idealtech.com.my/wp-content/uploads/2023/10/career-right.webp"
        width={imageSize}
        height={imageSize}
        alt="logo"
        className="absolute right-0 hidden sm:block"
        priority
        unoptimized={true}
      />
    </div>
  );
};

export default Hero;
