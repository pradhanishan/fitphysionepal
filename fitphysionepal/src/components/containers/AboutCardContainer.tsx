import { FC } from "react";
import AboutCard from "../cards/AboutCard";
import classes from "./about-card-container.module.css";
import { abouts } from "../../data/abouts";

const AboutCardContainer: FC = () => {
  return (
    <div className={classes["about-card-container"]}>
      {abouts.map((about) => {
        return <AboutCard key={about.id} id={about.id} heading={about.heading} content={about.content} />;
      })}
    </div>
  );
};

export default AboutCardContainer;
