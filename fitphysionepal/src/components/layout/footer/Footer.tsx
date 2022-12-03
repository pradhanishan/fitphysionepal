import { FC } from "react";
import classes from "./footer.module.css";
import { briefTiming } from "../../../data/timings";
import { GrFacebook } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaTiktok } from "react-icons/fa";
import { socialMedia } from "../../../data/socialMedia";

const Footer: FC = () => {
  return (
    <footer className={classes.footer}>
      <div style={{ marginBottom: "2rem" }}>
        <div>
          <span>{`open ${briefTiming}`}</span>
        </div>
      </div>
      <div>
        <a href={socialMedia.facebookUrl.value} target="_blank" rel="noreferrer" className={classes["footer-link"]}>
          <GrFacebook size={24} style={{ marginRight: "1rem" }} />
        </a>
        <a href={socialMedia.facebookUrl.value} target="_blank" rel="noreferrer" className={classes["footer-link"]}>
          <RiInstagramFill size={24} style={{ marginRight: "1rem" }} />
        </a>
        <a href={socialMedia.facebookUrl.value} target="_blank" rel="noreferrer" className={classes["footer-link"]}>
          <FaLinkedin size={24} style={{ marginRight: "1rem" }} />
        </a>
        <a href={socialMedia.facebookUrl.value} target="_blank" rel="noreferrer" className={classes["footer-link"]}>
          <FaTiktok size={24} style={{ marginRight: "1rem" }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
