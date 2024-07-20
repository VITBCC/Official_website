"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Grid,
  CardMedia,
} from "@mui/material";

const EventCard = ({ event }) => {
  const [registered, setRegistered] = useState(false);

  const handleRegister = () => {
    setRegistered(!registered);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardContent>
        <CardMedia
          component="img"
          height="140"
          image={event.image}
          alt={event.name}
        />
        <Typography variant="h5" component="div">
          {event.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.description}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: 1 }}
        >
          <strong>Aim:</strong> {event.aim}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: 1 }}
        >
          <strong>Date:</strong> {event.eventDate}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: 1 }}
        >
          <strong>Venue:</strong> {event.venue}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: 1 }}
        >
          <strong>Mode:</strong> {event.mode}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: 1 }}
        >
          <strong>Capacity:</strong> {event.capacity}
        </Typography>
        <div sx={{ marginTop: 1 }}>
          {event.perks.map((perk, index) => (
            <Chip key={index} label={perk} sx={{ margin: 0.5 }} />
          ))}
        </div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: registered ? "#d32f2f" : "#0fae96",
            color: "white",
            marginTop: 2,
            "&:hover": {
              backgroundColor: registered ? "#a02929" : "#2a2b23",
            },
          }}
          onClick={handleRegister}
        >
          {registered ? "De-register" : "Register"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
