"use client";
import fetchCareer from "@/app/(serverActions)/FetchCareer";
import { Button } from "@/components/ui/button";
import DOMPurify from "dompurify";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Career = {
  title: string;
  location: string;
  shortDescription: string;
  content: string;
};

type Props = {};

const Position = ({}: Props) => {
  const [careers, setCareers] = useState<Career[]>([]);

  useEffect(() => {
    fetchCareer().then((careers) => {
      setCareers(careers);
    });
  }, []);

  const pathname = usePathname();

  const [positionId, setPositionId] = useState<string | null>(null);

  useEffect(() => {
    const pathArray = pathname!.split("/");
    const id = pathArray[pathArray.length - 1]
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    if (id) {
      setPositionId(id);
    }
  }, [pathname]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (careers && positionId) {
      setLoading(true);
    }
  }, [positionId, careers]);

  if (!loading) {
    return (
      <h2 className="flex flex-col justify-center items-center h-[100vh] text-center">
        Loading...
      </h2>
    );
  }

  // console.log(positionId);
  return (
    <div className=" w-full mx-auto">
      <Image
        src="https://idealtech.com.my/wp-content/uploads/2023/10/career-center.webp"
        width={500}
        height={500}
        alt="logo"
        className="mx-auto"
        priority
        unoptimized={true}
      />
      <div className="w-full bg-white text-black">
        <div className="max-w-[1060px] w-full mx-auto">
          <div className="w-full sm:w-4/5 px-4 sm:px-0 mx-auto py-16">
            {careers &&
              positionId &&
              careers.map((career, carKey) => {
                if (positionId === career.title) {
                  const cleanHTML = DOMPurify.sanitize(career.content);
                  return (
                    <div key={carKey}>
                      <div className="border-y-[1px] text-center py-4 mb-8">
                        <h1>{career.title}</h1>
                        <p>{career.location}</p>
                        <Link href={"/#apply"}>
                          <Button className="mt-4 bg-accent hover:bg-accent/80 text-white font-bold">
                            Apply
                          </Button>
                        </Link>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{ __html: cleanHTML }}
                        className="[&>ul]:list-disc [&>ul]:!list-inside"
                      />
                    </div>
                  );
                } else {
                  return null;
                }
              })}
          </div>
        </div>
      </div>
      {/* <section className="h-[1000px]"></section> */}
    </div>
  );
};

export default Position;
