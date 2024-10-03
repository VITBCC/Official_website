"use client"
import React, { useEffect, useState } from "react";
import { MagicCard } from "../magicui/magic-card";
import Link from "next/link";

// Replace these URLs with your actual image paths
// const cards = [
//   {
//     id: 1,
//     image: "/event1.jpg", // Placeholder image path
//     title: "Exclusive Event One",
//     desc: "Join us for an exclusive event showcasing the latest in blockchain technology.",
//   },
//   {
//     id: 2,
//     image: "/event2.jpg", // Placeholder image path
//     title: "Workshop on Deployment",
//     desc: "Attend our workshop on seamless project deployment..",
//   },
// ];

const EventCard = ({ card }) => {
  console.log(card)
  return (
    <MagicCard
      key={card._id}
      className="border border-solid bg-transparent text-white border-white pt-6 pb-6 pl-3 pr-6 flex flex-col items-start w-80 min-h-60 rounded-lg"
      gradientColor={"#D9D9D955"}
    >
      <div className="space-y-3">
        {/* Larger Image */}
        <img
          src={card?.eventImage}
          alt={card?.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="flex flex-col justify-center items-center text-center gap-y-3 w-full">
          <h2 className="font-bold">{card?.name}</h2>
          <p className="font-thin text-sm">{card?.description}</p>
        </div>
      </div>
    </MagicCard>
  );
};

export default function Events() {
  const [events, setAllEvents] = useState([]);

  async function getAllEvents() {
    try {
      const result = await fetch("http://localhost:8003/api/v1/events/getAllEvents");
      const data = await result.json();
      if (data) {
        const topTwoEvents = data?.data?.events.slice(0, 2);
        setAllEvents(topTwoEvents);
        console.log(events);
      }
    }
    catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    getAllEvents();
  }, [])


  return (
    <div className="bg-black w-screen flex md:flex-row flex-col items-center justify-center h-fit p-7">
      <div className="md:w-1/2">
        <img src="/choose.svg" alt="Choose Illustration" />
      </div>
      <div className="md:w-1/2 text-white space-y-11 w-screen md:p-0 p-6">
        <div className="font-bold text-2xl">Upcoming events</div>

        {/* Replacing paragraph with two cards */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {events.map((event) => (
            <Link href={`/event/${event._id}`}><EventCard card={event} key={event._id} /></Link>
          ))}
        </div>

        <button className="p-3 text-sm rounded-full text-[#FFA800] border border-solid-2px border-[#FFA800] items-center w-full">
          View all events.
        </button>
      </div>
    </div>
  );
}
