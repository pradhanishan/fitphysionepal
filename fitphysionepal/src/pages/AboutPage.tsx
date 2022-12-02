import { FC } from "react";
import classes from "./about-page.module.css";
import AboutCardContainer from "../components/containers/AboutCardContainer";
import AboutEmployeeCard from "../components/cards/AboutEmployeeCard";
const AboutPage: FC = () => {
  return (
    <div className={classes.about}>
      <div className={classes["about-card-container-wrapper"]}>
        <AboutCardContainer />
      </div>
      <div className={classes["about-employee-card-wrapper"]}>
        <AboutEmployeeCard />
      </div>
    </div>
  );
};

export default AboutPage;
