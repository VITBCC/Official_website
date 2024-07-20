import Marquee from "react-fast-marquee";
import ProjectCard from "./ProjectCard";

// Add API here
const profiles = [
  {
    image: "../../../public/stark.png",
    name: "DAO",
    type: "Web3 project",
    description: "this project is made with solidity by the team of vit bcc.",
    techStack: ["Solidity", "React"],
  },
  {
    image: "../../../public/stark.png",
    name: "ECommerce",
    type: "MERN project",
    description: "this project is made with MERN by the team of vit bcc",
    techStack: ["React", "MongoDB"],
  },
  // Add more profiles here
];

const ProjectSlide = () => {
  return (
    <Marquee gradient={false} speed={50}>
      {profiles.map((profile, index) => (
        <div key={index} style={{ margin: "0 20px" }}>
          <ProjectCard
            image={profile.image}
            name={profile.name}
            type={profile.type}
            description={profile.description}
            techStack={profile.techStack}
          />
        </div>
      ))}
    </Marquee>
  );
};

export default ProjectSlide;
