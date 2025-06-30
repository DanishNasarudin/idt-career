import { getCachedPositions } from "@/services/action";
import { Inter } from "next/font/google";
import ApplyForm from "../components/custom/apply-form";
import Benefits from "../components/custom/benefits";
import Hero from "../components/custom/hero";
import Positions from "../components/custom/positions";
import Questions from "../components/custom/questions";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const { data } = await getCachedPositions();

  return (
    <main className={`${inter.className} flex flex-col mx-auto`}>
      {/* <section className="h-[80px]"></section> */}
      <Hero />
      <Benefits />
      <Positions careers={data.careers.nodes} />
      <ApplyForm />
      <Questions />
    </main>
  );
}
