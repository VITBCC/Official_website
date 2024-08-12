import Image from "next/image";
import TechStack from "@/components/techStack/page";
import OurWorks from "@/components/whatWeDo/page";
import Landing from "@/components/landing/landing";
import ChooseUs from "@/components/whyUs/page";
import HowItWork from "@/components/working/page";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Landing />
      <TechStack />
      <OurWorks />
      <ChooseUs />
      <HowItWork />
      {/* <Testimonals /> */}
    </div>
  );
}
