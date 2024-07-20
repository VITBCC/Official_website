import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import Image from "next/image";

const ProjectCard = ({ image, name, type, description, techStack }) => {
  return (
    <Card>
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {type}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ marginTop: "10px" }}
        >
          {description}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", mt: 1 }}>
          {techStack.map((tech, index) => (
            <Chip key={index} label={tech} sx={{ margin: "2px" }} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
