import { FC } from "react";
import AboutEmployeeCard from "../components/cards/AboutEmployeeCard";
import AboutCardContainer from "../components/containers/AboutCardContainer";
import classes from "./home-page.module.css";

const HomePage: FC = () => {
  return (
    <div>
      <div className={classes["about-card-container-wrapper"]}>
        <h5 className={classes.heading}>why fitphysio?</h5>
        <AboutCardContainer />
      </div>
      <div className={classes["about-employee-card-wrapper"]}>
        <h5 className={classes.heading}>meet our therapist</h5>
        <AboutEmployeeCard />
      </div>
    </div>
  );
};

export default HomePage;
