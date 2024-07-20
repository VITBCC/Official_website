import React from "react";
import { Container, Grid } from "@mui/material";
import EventCard from "./EventCard";

//Add API here
const events = [
  {
    image: "/images/project1.png",
    name: "Blockchain 101",
    description: "Introduction to blockchain technology.",
    aim: "Educate about blockchain basics.",
    perks: ["Certificate", "Swags"],
    eventDate: "2024-08-01",
    venue: "VIT Auditorium",
    mode: "Offline",
    capacity: 100,
  },
  {
    image: "/images/project1.png",
    name: "Web3 Workshop",
    description: "Hands-on workshop on Web3 development.",
    aim: "Build decentralized applications.",
    perks: ["Certificate", "Access to tools"],
    eventDate: "2024-08-10",
    venue: "Online",
    mode: "Online",
    capacity: 50,
  },
  {
    image: "/images/project1.png",
    name: "Web3 Workshop",
    description: "Hands-on workshop on Web3 development.",
    aim: "Build decentralized applications.",
    perks: ["Certificate", "Access to tools"],
    eventDate: "2024-08-10",
    venue: "Online",
    mode: "Online",
    capacity: 50,
  },
  {
    image: "/images/project1.png",
    name: "Web3 Workshop",
    description: "Hands-on workshop on Web3 development.",
    aim: "Build decentralized applications.",
    perks: ["Certificate", "Access to tools"],
    eventDate: "2024-08-10",
    venue: "Online",
    mode: "Online",
    capacity: 50,
  },
  // Add more event objects as needed
];

const EventsPage = () => {
  return (
    <Container sx={{ padding: "20px" }}>
      <Grid container spacing={3}>
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EventsPage;
