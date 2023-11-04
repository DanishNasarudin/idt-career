"use server";

type Career = {
  title: string;
  location: string;
  shortDescription: string;
  content: string;
};

type CareersResponse = {
  data: {
    careers: {
      nodes: Career[];
    };
  };
};

async function fetchCareer() {
  const response = await fetch(`https://idealtech.com.my/graphql`, {
    method: "POST",
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
        }`,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    next: {
      revalidate: 10,
    },
  });

  const responseData: CareersResponse = await response.json();
  // console.log(responseData, "check json");
  return responseData.data.careers.nodes;
}

export default fetchCareer;
