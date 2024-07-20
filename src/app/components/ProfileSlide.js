import Marquee from "react-fast-marquee";
import ProfileCard from "./ProfileCard";

// Add API here
const profiles = [
  {
    image: "../../../public/stark.png",
    name: "John Doe",
    position: "Developer",
    description: "John is a full-stack developer with 5 years of experience.",
    socialLinks: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
  },
  {
    image: "../../../public/stark.png",
    name: "Jane Smith",
    position: "Designer",
    description:
      "Jane specializes in UX/UI design and has a keen eye for detail.",
    socialLinks: {
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      instagram: "https://instagram.com/janesmith",
    },
  },
  // Add more profiles here
];

const ProfileSlide = () => {
  return (
    <Marquee gradient={false} speed={50}>
      {profiles.map((profile, index) => (
        <div key={index} style={{ margin: "0 20px" }}>
          <ProfileCard
            image={profile.image}
            name={profile.name}
            position={profile.position}
            description={profile.description}
            socialLinks={profile.socialLinks}
          />
        </div>
      ))}
    </Marquee>
  );
};

export default ProfileSlide;
