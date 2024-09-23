import React from "react";
import { MagicCard } from "../magicui/magic-card";

// Replace these URLs with your actual image paths
const cards = [
  {
    id: 1,
    image: "/event1.jpg", // Placeholder image path
    title: "Exclusive Event One",
    desc: "Join us for an exclusive event showcasing the latest in blockchain technology.",
  },
  {
    id: 2,
    image: "/event2.jpg", // Placeholder image path
    title: "Workshop on Deployment",
    desc: "Attend our workshop on seamless project deployment..",
  },
];

const EventCard = ({ card }) => {
  return (
    <MagicCard
      key={card.id}
      className="border border-solid bg-transparent text-white border-white pt-6 pb-6 pl-3 pr-6 flex flex-col items-start w-80 min-h-60 rounded-lg"
      gradientColor={"#D9D9D955"}
    >
      <div className="space-y-3">
        {/* Larger Image */}
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h2 className="font-bold">{card.title}</h2>
        <p className="font-thin text-sm">{card.desc}</p>
      </div>
    </MagicCard>
  );
};

export default function TechStack() {
  return (
    <div className="bg-black w-screen flex md:flex-row flex-col items-center justify-center h-[35rem]">
      <div className="md:w-1/2">
        <img src="/choose.svg" alt="Choose Illustration" />
      </div>
      <div className="md:w-1/2 text-white space-y-11 w-screen md:p-0 p-6">
        <div className="font-bold text-2xl">Our events</div>

        {/* Replacing paragraph with two cards */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {cards.map((card) => (
            <EventCard card={card} key={card.id} />
          ))}
        </div>

        <button className="p-2 text-sm rounded-full text-[#FFA800] border border-solid-2px border-[#FFA800]">
          View more events in detail.
        </button>
      </div>
    </div>
  );
}
