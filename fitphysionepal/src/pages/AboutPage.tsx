import { FC } from "react";
import classes from "./about-page.module.css";
import AboutCardContainer from "../components/containers/AboutCardContainer";
import AboutEmployeeCard from "../components/cards/AboutEmployeeCard";
import descriptionImage from "../assets/images/breathing.jpg";
const AboutPage: FC = () => {
  return (
    <div className={classes.about}>
      <div className={classes["description-container"]}>
        <div className={classes["description-text-container"]}>
          <h5>a fitness facility</h5>
          <p>
            Our treatment plans are made just for you, taking into account your symptoms, medical history, and any
            health restrictions you might have. We look forward to watching you achieve your fitness, health, and
            recovery objectives. FitPhysio Clinic wants to encourage healthy living and fitness. Integrating
            cutting-edge technology, science, and patient care, we strive to deliver services of the highest caliber.
          </p>
        </div>
        <div className={classes["description-image-container"]}>
          <img src={descriptionImage} height="250px" alt="description" />
        </div>
      </div>
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
