import React from "react";
import Image from "next/image";

type Props = {};

function Benefits({}: Props) {
  const imageSize = 300;
  return (
    <div className="bg-white text-black py-16 px-4">
      <div className="max-w-none sm:max-w-[1060px] mx-auto w-full flex flex-col gap-10 text-center">
        <h1 className="py-8 border-y-[1px] hidden sm:block">
          What you will <b className="text-accent">experience</b> with us.
        </h1>
        <h1 className="py-8 border-y-[1px] sm:hidden block leading-none">
          What you will <br /> <b className="text-accent">experience</b> with
          us.
        </h1>
        <section className="flex w-full sm:w-4/5 mx-auto justify-between flex-col sm:flex-row gap-8 items-center">
          <div className="max-w-[350px] w-full flex flex-col gap-4 text-center sm:text-left">
            <h2 className="leading-none">
              1st-Hand <br /> Experience.
            </h2>
            <p>
              Seize the opportunity to engage with cutting-edge products before
              they hit the market, gaining exclusive firsthand insights and
              experiences.
            </p>
          </div>
          <div className="flex">
            <Image
              src="https://idealtech.com.my/wp-content/uploads/2023/11/firsthand-experience.webp"
              width={imageSize}
              height={imageSize}
              alt="logo"
              priority
              unoptimized={true}
              className="max-w-[400px] min-w-0 xs:min-w-[300px] aspect-[16/10] w-full object-cover rounded-xl bg-slate-500"
            />
          </div>
        </section>
        <section className="flex w-full sm:w-4/5 mx-auto justify-between flex-col-reverse sm:flex-row gap-8 items-center">
          <div className="flex">
            <Image
              src="https://idealtech.com.my/wp-content/uploads/2023/11/growth-explore.webp"
              width={imageSize}
              height={imageSize}
              alt="logo"
              priority
              unoptimized={true}
              className="max-w-[400px] min-w-0 xs:min-w-[300px] aspect-[16/10] w-full object-cover rounded-xl bg-slate-500"
            />
          </div>
          <div className="max-w-[350px] w-full flex flex-col gap-4 text-center sm:text-left">
            <h2 className="leading-none">
              Growth & <br /> Exploration.
            </h2>
            <p>
              Navigate through various departments to discover and align your
              career path with your unique skills and passions.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Benefits;
