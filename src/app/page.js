import Image from "next/image";
import TechStack from "@/components/events/page";
import OurWorks from "@/components/whatWeDo/page";
import Landing from "@/components/landing/landing";
import ChooseUs from "@/components/events/page";
// import HowItWork from "@/components/working/page";
import Reviews from "@/components/reviews/page";
import Navbar from "@/components/navbar/Navbar";
import JoinUs from "@/components/joinOurTeam/page";
import Companies from "@/components/techStack/page";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Navbar />
      <Landing />
      <Companies />
      <OurWorks />
      <ChooseUs />
      <Reviews />
      <JoinUs />
    </div>
  );
}
