"use server";

import { unstable_cache } from "next/cache";

export type Career = {
  title: string;
  location: string;
  shortDescription: string;
  content: string;
};

export type CareersResponse = {
  data: {
    careers: {
      nodes: Career[];
    };
  };
};

const fetchPositions = async (): Promise<CareersResponse> => {
  const res = await fetch("https://idealtech.com.my/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `
        query Careers {
          careers {
            nodes {
              title
              location
              shortDescription
              content
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch careers");
  }

  return res.json();
};

export const getCachedPositions = unstable_cache(
  fetchPositions,
  ["positions"],
  {
    tags: ["positions"],
    revalidate: 60,
  }
);
