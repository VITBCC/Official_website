import FlickeringGrid from "@/components/ui/flickering-grid";
import Company from "@/components/hackathonComp/Company";
import Tickets from "@/components/hackathonComp/Tickets";
import Buildx from "@/components/hackathonComp/Buildx";
import Timeline from "@/components/hackathonComp/Timeline";

export default function Hackathon() {
    return (
        <div>
        <FlickeringGrid 
            className=" -z-10 absolute bg-gradient inset-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.5}
            flickerChance={0.1}
        />
        <Buildx />
        <Timeline/>
        <Company />
        <Tickets />
        </div>
    )
}