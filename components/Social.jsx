import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icons: <FaGithub />, path: "" },
  { icons: <FaLinkedin />, path: "" },
  { icons: <FaYoutube />, path: "" },
  { icons: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return <div className={containerStyles}> </div>;
};

export default Social;
