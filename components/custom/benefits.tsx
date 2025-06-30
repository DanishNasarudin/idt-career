import Image from "next/image";

export default function Benefits() {
  const imageSize = 300;
  return (
    <div className="bg-white text-black py-16 px-4">
      <div className="max-w-none sm:max-w-[1060px] mx-auto w-full flex flex-col gap-10 text-center">
        <div className="border-y-[1px] border-border/20 flex flex-col gap-0">
          <h1 className="py-8 leading-none">
            Technology Enthusiasts <b className="text-accent">Wanted</b>.
          </h1>
          <p className="mb-6">
            Are you driven by the latest in computer technology? <br />
            Do you get excited about being the first to use and understand new
            products? <br />
            Ready to apply your skills in a real-world setting?
          </p>
        </div>
        <section className="flex w-full sm:w-4/5 mx-auto justify-between flex-col-reverse sm:flex-row gap-8 items-center">
          <div className="max-w-[350px] w-full flex flex-col gap-4 text-center sm:text-left">
            <h2 className="leading-none">
              Get Hands-On <br /> With Innovation.
            </h2>
            <p>
              Join us and be at the forefront of technology. Engage with new
              gadgets and systems before they hit the shelves. It's not about
              waiting; it's about leading the charge.
            </p>
          </div>
          <div className="flex">
            <Image
              src="https://idealtech.com.my/wp-content/uploads/2023/11/career-art-1.webp"
              width={imageSize}
              height={imageSize}
              alt="logo"
              priority
              unoptimized={true}
              className="max-w-[400px] min-w-0 xs:min-w-[300px] aspect-[16/10] w-full object-cover rounded-xl bg-slate-500"
            />
          </div>
        </section>
        <section className="flex w-full sm:w-4/5 mx-auto justify-between flex-col sm:flex-row gap-8 items-center">
          <div className="flex">
            <Image
              src="https://idealtech.com.my/wp-content/uploads/2023/11/career-art-2.webp"
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
              Demonstrate <br />
              Your Skills.
            </h2>
            <p>
              Show what you're made of. Put your technical abilities to the test
              in an environment that not only expects but requires your
              expertise to shine.
            </p>
          </div>
        </section>
        <section className="flex w-full sm:w-4/5 mx-auto justify-between flex-col-reverse sm:flex-row gap-8 items-center">
          <div className="max-w-[350px] w-full flex flex-col gap-4 text-center sm:text-left">
            <h2 className="leading-none">
              Your Growth <br /> Is Our Goal.
            </h2>
            <p>
              If you're ready to take your career to the next level with a
              company that's as forward-thinking as you are, we're the right
              fit. Grow, learn, and lead with us.
            </p>
          </div>
          <div className="flex">
            <Image
              src="https://idealtech.com.my/wp-content/uploads/2023/11/career-art-3.webp"
              width={imageSize}
              height={imageSize}
              alt="logo"
              priority
              unoptimized={true}
              className="max-w-[400px] min-w-0 xs:min-w-[300px] aspect-[16/10] w-full object-cover rounded-xl bg-slate-500"
            />
          </div>
        </section>
        <section className="max-w-[700px] w-full flex flex-col gap-4 text-center mx-auto mt-8">
          <h2>This Is Your Tech Playground.</h2>
          <p>
            We're not just offering a job; we're providing a platform to
            catapult your career in technology. <br /> This is where your
            passion meets your profession.
          </p>
        </section>
        <section className="w-full mx-auto flex gap-8 justify-center flex-wrap">
          <Image
            src="https://idealtech.com.my/wp-content/uploads/2023/11/all-logo-68.webp"
            width={100}
            height={100}
            alt="logo"
            priority
            unoptimized={true}
            className="max-w-[100px] min-w-0 xs:min-w-[30px] w-full object-cover "
          />
          <Image
            src="https://idealtech.com.my/wp-content/uploads/2023/11/all-logo-70.webp"
            width={100}
            height={100}
            alt="logo"
            priority
            unoptimized={true}
            className="max-w-[100px] min-w-0 xs:min-w-[30px] w-full object-cover "
          />
          <Image
            src="https://idealtech.com.my/wp-content/uploads/2023/11/all-logo-42.webp"
            width={100}
            height={100}
            alt="logo"
            priority
            unoptimized={true}
            className="max-w-[100px] min-w-0 xs:min-w-[30px] w-full object-cover "
          />
          <Image
            src="https://idealtech.com.my/wp-content/uploads/2023/11/all-logo-56.webp"
            width={100}
            height={100}
            alt="logo"
            priority
            unoptimized={true}
            className="max-w-[100px] min-w-0 xs:min-w-[30px] w-full object-cover "
          />
          <Image
            src="https://idealtech.com.my/wp-content/uploads/2023/11/all-logo-66.webp"
            width={100}
            height={100}
            alt="logo"
            priority
            unoptimized={true}
            className="max-w-[100px] min-w-0 xs:min-w-[30px] w-full object-cover "
          />
          <Image
            src="https://idealtech.com.my/wp-content/uploads/2023/11/all-logo-69.webp"
            width={100}
            height={100}
            alt="logo"
            priority
            unoptimized={true}
            className="max-w-[100px] min-w-0 xs:min-w-[30px] w-full object-cover "
          />
        </section>
      </div>
    </div>
  );
}
