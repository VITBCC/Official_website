import React from "react";
import { MagicCard } from "../magicui/magic-card";
import { AiFillProject } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import { GoVersions } from "react-icons/go";
import { SiInsta360 } from "react-icons/si";
import { MdChildFriendly } from "react-icons/md";
import { MdQuickreply } from "react-icons/md";

const obj = [
    {
        id: 1,
        image: <AiFillProject />,
        title: "Seamless Project Deployment",
        desc: "Deploy your entire project with a single click, directly to GitHub and Vercel, without navigating multiple steps or tools."
    },
    {
        id: 2,
        image: <MdDashboardCustomize />,
        title: "Customizable Project Setup",
        desc: "Easily customize project settings with a pop-up for naming, descriptions, and privacy options before deployment."
    },
    {
        id: 3,
        image: <GoVersions />,
        title: "Integrated Version Control with GitHub",
        desc: "Automatically publish your projects to GitHub, enabling secure version control and easy collaboration.",
    },
    {
        id: 4,
        image: <SiInsta360 />,
        title: "Instant Deployment to Vercel",
        desc: "After publishing on GitHub, your project is immediately live on Vercel, optimized for performance and scalability.",
    },
    {
        id: 5,
        image: <MdChildFriendly />,
        title: "User-Friendly Interface",
        desc: "An intuitive interface ensures quick and confident deployment, even for users with minimal technical experience.",
    },
    {
        id: 6,
        image: <MdQuickreply />,
        title: "Efficiency and Time-Saving",
        desc: "Streamline deployment and save time, letting you focus more on development and less on logistics."
    }
];

const Card = ({ item }) => {
    return (
        <MagicCard key={item.id} className="border border-solid bg-transparent text-white border-white pt-6 pb-6 pl-3 pr-6 flex flex-col items-start w-80 min-h-60 rounded-lg" gradientColor={"#D9D9D955"}>
            <div className="space-y-3">
                <div className="text-2xl text-yellow-500">
                    {item.image}
                </div>
                <h2 className="font-bold">{item.title}</h2>
                <p className="font-thin text-sm">{item.desc}</p>
            </div>
        </MagicCard>
    );
};

export default function OurWorks() {
    return (
        <div className="bg-[#110F0F] text-white p-8 flex flex-col items-center w-screen gap-y-6">
            <div className="text-2xl font-bold mb-4">We Offer</div>
            <div className="font-thin mb-8">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                {obj.map((item) => (

                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}
