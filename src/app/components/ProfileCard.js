import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import Image from "next/image";

const ProfileCard = ({ image, name, position, description, socialLinks }) => {
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
          {position}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ marginTop: "10px" }}
        >
          {description}
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
        >
          {socialLinks.github && (
            <IconButton
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </IconButton>
          )}
          {socialLinks.linkedin && (
            <IconButton
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </IconButton>
          )}
          {socialLinks.instagram && (
            <IconButton
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
