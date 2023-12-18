import Container from "@/components/ui/utils/Container";
import Section from "@/components/ui/utils/Section";
import Image from "next/image";
import { Josefin_Slab } from "next/font/google";
import image from "../../public/images/gcc.png";

const josefinSlab = Josefin_Slab({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
export default function Home() {
  return (
    <Container>
      <Section>
        <div
          className={`${josefinSlab.className} grid grid-rows-10 grid-cols-5 bkpgrid:grid-rows-6 bkpgrid:grid-cols-10 bkpgrid:   w-full h-full  `}>
          <div className="row-start-2 row-end-5 col-start-1 col-end-2  bkpgrid:row-start-2 bkpgrid:row-end-5 bkpgrid:col-start-2 bkpgrid:col-end-5 rounded max-w-sm min-w-[250px] flex flex-col gap-4 p-2 self-start">
            <div className=" max-w-sm min-w-[250px]  flex flex-col  gap-6 ">
              <h2 className=" text-5xl ">Modou's playground?</h2>
              <p className="text-base   rounded-md">
                I am a fullstack developer, currently looking into learning
                new things (Astro, Next.JS, and backend technologies). Whenever
                I feel like I should share my knowledge with others, I like to
                do it via blog posts and social media.
              </p>
            </div>

            <button className="max-w-sm w-full text-xl font-extrabold text-center cursor-pointer group relative  px-8 py-4 bg-black text-[#f1f1f1] rounded-3xl hover:bg-opacity-90 hover:text-opacity-80  transition  shadow-md ">
              More About me
            </button>
          </div>

          <div className="row-start-6 row-end-10 col-start-1 col-end-2 bkpgrid:row-start-2 bkpgrid:row-end-6 bkpgrid:col-start-6 bkpgrid:col-end-10  border rounded  min-w-[250px]  flex flex-col gap-4 p-2 ">
            <div className="  min-w-[250px] h-full  flex flex-col gap-6 p-2 ">
              <h2 className=" text-xl text-center">Galsen Coding Challenge</h2>
              <div className="w-full h-full p-4  relative">
                <Image
                  src={image}
                  className="rounded-md w-10/12 absolute border"
                  fill
                />
              </div>
            </div>

            <div className=" w-full text-xl  p-4  hover:bg-opacity-90 hover:text-opacity-80  transition ">
              <div className="font-extrabold text-xl">See project</div>
              <div className="font-light text-xs text-opacity-40">
                The goal of this project is to provide a platform for coding
                challenges and collaboration within the Galsen (Senegal) coding
                community.
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
