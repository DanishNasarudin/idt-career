import { Button } from "@/components/ui/button";
import { getCachedPositions } from "@/services/action";
import Image from "next/image";
import Link from "next/link";
import sanitizeHtml from "sanitize-html";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { data } = await getCachedPositions();
  const { id: rawId } = await params;
  const positionId = decodeURIComponent(rawId);
  const careers = data.careers.nodes.filter(
    (item) => item.title.toLowerCase().replace(/ /g, "-") === positionId
  );

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
            {careers.length > 0 ? (
              careers.map((career, carKey) => {
                const cleanHTML = sanitizeHtml(career.content, {
                  allowedTags: sanitizeHtml.defaults.allowedTags.concat([
                    "img",
                  ]),
                  allowedAttributes: {
                    ...sanitizeHtml.defaults.allowedAttributes,
                    img: ["src", "alt", "width", "height"],
                    a: ["href", "target", "rel"],
                  },
                });
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
              })
            ) : (
              <div className="w-full text-center">
                <h2>Position does not exist!</h2>
                <Link href={"/"}>
                  <Button className="mt-4">Go back</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <section className="h-[1000px]"></section> */}
    </div>
  );
}
