import { Inter } from "next/font/google";
import ApplyForm from "./(section)/ApplyForm";
import Benefits from "./(section)/Benefits";
import Hero from "./(section)/Hero";
import Positions from "./(section)/Positions";
import Questions from "./(section)/Questions";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} flex flex-col mx-auto`}>
      {/* <section className="h-[80px]"></section> */}
      <Hero />
      <Benefits />
      <Positions />
      <ApplyForm />
      <Questions />
    </main>
  );
}
