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
          <h5>A team of blabla</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quam eaque eius eos excepturi quis libero
            nemo explicabo porro hic obcaecati illo alias pariatur quasi reprehenderit, ex neque voluptate mollitia ab
            recusandae. Recusandae praesentium est voluptatibus aliquam corrupti eaque atque libero quasi vitae totam
            quisquam nulla quis, dignissimos esse quaerat.
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
