import { FC } from "react";
import classes from "./contact-page.module.css";
import googleMapLocationImage from "../assets/images/map/map-location.png";
import Icon from "../components/icon/Icon";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const ContactPage: FC = () => {
  return (
    <div className={classes["contact-page"]}>
      <div className={classes["contact-detail-container"]}>
        <div className={classes["contact-container"]}>
          <Icon>
            <FaPhoneAlt size={24} className={classes["contact-icon"]} />
          </Icon>
          <span className={classes["contact-text"]}> +977-9841092994</span>
        </div>
        <div className={classes["contact-container"]}>
          <Icon>
            <MdEmail size={24} className={classes["contact-icon"]} />
          </Icon>
          <span className={classes["contact-text"]}> fitphysio.np@gmail.com</span>
        </div>
        <div className={classes["contact-container"]}>
          <Icon>
            <MdLocationOn size={24} className={classes["contact-icon"]} />
          </Icon>
          <span className={classes["contact-text"]}> Hasapota Ganesh Marg, Jhamsikhel</span>
        </div>
      </div>
      <div className={classes["contact-map-header"]}>
        <span>For directions, please click the map image </span>
      </div>
      <div className={classes["image-container"]}>
        <a
          href="https://www.google.com/maps/place/FitPhysio/@27.6810532,85.3126868,16z/data=!4m5!3m4!1s0x0:0xf1498a5e7414ada1!8m2!3d27.6818275!4d85.3105681"
          target="_blank"
          rel="noreferrer"
        >
          <img src={googleMapLocationImage} alt="fitphysio nepal location" className={classes["location-image"]} />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
