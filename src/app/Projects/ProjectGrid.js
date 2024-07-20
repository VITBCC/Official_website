import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Link,
} from "@mui/material";

//Add API..
const projects = [
  {
    image: "/images/project1.png",
    name: "DAO",
    mentors: ["John Doe", "Jane Smith"],
    description: "Made with Solidity",
    technologies: ["Solidity", "React"],
    projectLink: "https://example.com/dao",
  },
  {
    image: "/images/project2.png",
    name: "ECommerce",
    mentors: ["Alice Johnson", "Bob Brown"],
    description: "Made with MERN",
    technologies: ["React", "MongoDB"],
    projectLink: "https://example.com/ecommerce",
  },
  {
    image: "/images/project1.png",
    name: "DAO",
    mentors: ["John Doe", "Jane Smith"],
    description: "Made with Solidity",
    technologies: ["Solidity", "React"],
    projectLink: "https://example.com/dao",
  },
  {
    image: "/images/project1.png",
    name: "DAO",
    mentors: ["John Doe", "Jane Smith"],
    description: "Made with Solidity",
    technologies: ["Solidity", "React"],
    projectLink: "https://example.com/dao",
  },
  // Add more projects here
];

const ProjectGrid = () => {
  return (
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={project.image}
              alt={project.name}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {project.description}
              </Typography>
              <div style={{ margin: "10px 0" }}>
                {project.mentors.map((mentor, idx) => (
                  <Chip
                    key={idx}
                    label={mentor}
                    style={{ marginRight: "5px", marginBottom: "5px" }}
                  />
                ))}
              </div>
              <div style={{ margin: "10px 0" }}>
                {project.technologies.map((tech, idx) => (
                  <Chip
                    key={idx}
                    label={tech}
                    color="primary"
                    style={{ marginRight: "5px", marginBottom: "5px" }}
                  />
                ))}
              </div>
              <Link
                href={project.projectLink}
                target="_blank"
                rel="noopener"
                variant="body2"
              >
                Project Link
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectGrid;
