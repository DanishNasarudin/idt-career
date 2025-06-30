import { Career } from "@/services/action";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Positions({ careers }: { careers: Career[] }) {
  return (
    <div
      className="max-w-none sm:max-w-[1060px] mx-auto w-full py-16"
      id="positions"
    >
      <div className="w-full mx-auto flex flex-col gap-10 px-4 sm:px-0">
        <div className="max-w-[500px] w-full mx-auto text-center flex flex-col gap-4">
          <h1 className="leading-none">Open Positions.</h1>
          <p>
            There is always an opportunity. All you need to do is to take the
            first step, which is to submit your Portfolio (for selected role) &
            CV.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {careers.length > 0 ? (
            careers.map((career, carKey) => {
              return (
                <div
                  key={carKey}
                  className="w-full sm:w-[350px] p-8 rounded-xl bg-white text-black flex flex-col gap-4 justify-between"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <p>{career.location}</p>
                      <h2 className="leading-none">{career.title}</h2>
                    </div>
                    <p>{career.shortDescription}</p>
                  </div>
                  <Link
                    href={`/position/${career.title
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                  >
                    <Button variant="outline" className="bg-transparent">
                      View Details
                    </Button>
                  </Link>
                </div>
              );
            })
          ) : (
            <h2 className="text-center mx-auto">None currently available.</h2>
          )}
        </div>
      </div>
    </div>
  );
}
