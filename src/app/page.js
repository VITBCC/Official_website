import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import Image from "next/image";

import part1 from "../../public/stark.png";
import part2 from "../../public/avalanche.png";
import part3 from "../../public/7le55xb8.png";
import part5 from "../../public/h6tjaqpe.png";

import Marquee from "react-fast-marquee";
import ProfileSlide from "./components/ProfileSlide";
import ProjectSlide from "./components/ProjectSlide";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Home() {
  return (
    <div style={{ color: "white" }}>
      <Container>
        <Box sx={{ padding: "50px", textAlign: "center" }}>
          <Typography variant="h2">VIT Blockchain Community</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Bringing the world of web3 to VIT, Vellore
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "40px" }}
          >
            Get Started
          </Button>
        </Box>
        <Box sx={{ padding: "50px", textAlign: "center" }}>
          <Typography variant="h4" marginBottom="40px">
            PARTNER COMPANIES
          </Typography>
          <Marquee gradient={false} speed={50}>
            <div>
              <Image
                src={part1}
                alt="Partner 1"
                style={{ height: "100px", width: "100px", margin: "0 60px" }}
              />
            </div>
            <div>
              <Image
                src={part2}
                alt="Partner 2"
                style={{ height: "100px", width: "100px", margin: "0 60px" }}
              />
            </div>
            <div>
              <Image
                src={part3}
                alt="Partner 2"
                style={{ height: "100px", width: "100px", margin: "0 60px" }}
              />
            </div>
            {/* <div>
              <Image
                src={part4}
                alt="TPG"
                style={{ height: "100px", width: "100px", margin: "0 60px" }}
              />
            </div> */}
            <div>
              <Image
                src={part5}
                alt="Partner 2"
                style={{ height: "100px", width: "100px", margin: "0 60px" }}
              />
            </div>
          </Marquee>
        </Box>
        <Box sx={{ padding: "50px", textAlign: "center" }}>
          <Typography variant="h3">Meet our Team!!</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Board members of VIT Blockchain Community
          </Typography>
          <div style={{ marginTop: "50px" }}>
            <ProfileSlide />
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid white",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#3b3c36",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h3" sx={{ color: "white" }}>
              Check out our events
            </Typography>
            <ArrowForwardIcon sx={{ color: "white", ml: 1 }} />
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0fae96",
              color: "white",
              "&:hover": {
                backgroundColor: "#2a2b23",
              },
            }}
          >
            Our Events
          </Button>
        </Box>
        <Box sx={{ padding: "50px", textAlign: "center" }}>
          <Typography variant="h3">Projects</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Some projects developed by us..
          </Typography>
          <div style={{ marginTop: "50px" }}>
            <ProjectSlide />
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "50px",
            border: "1px solid white",
            padding: "25px",
            borderRadius: "5px",
            backgroundColor: "#3b3c36",
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ color: "white" }}>
              Wanna get started in blockchain ??
            </Typography>
            <Typography variant="subtitle1">
              Click to find all the resources and guide to start your journey.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0fae96",
                color: "white",
                "&:hover": {
                  backgroundColor: "#2a2b23",
                },
                marginTop: "30px",
              }}
            >
              Get Started
            </Button>
          </Box>
          <Box>
            <Typography variant="h5">Create a wallet</Typography>
            <Typography variant="subtitle1">Create a metmask wallet</Typography>
            <Typography variant="h5" style={{ marginTop: "15px" }}>
              Learn basics of blockchain
            </Typography>
            <Typography variant="subtitle1">Create a metmask wallet</Typography>
            <Typography variant="h5" style={{ marginTop: "15px" }}>
              Learn basics of solidity
            </Typography>
            <Typography variant="subtitle1">Create a metmask wallet</Typography>
          </Box>
        </Box>
        <Box sx={{ padding: "50px", textAlign: "center" }}>
          <Typography variant="h3">Blogs</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Technical Reads!!
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
