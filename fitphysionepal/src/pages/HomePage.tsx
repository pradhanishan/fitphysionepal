import { FC } from "react";
import AboutEmployeeCard from "../components/cards/AboutEmployeeCard";
import AboutCardContainer from "../components/containers/AboutCardContainer";
import classes from "./home-page.module.css";

const HomePage: FC = () => {
  return (
    <div>
      <div className={classes["about-card-container-wrapper"]}>
        <AboutCardContainer />
      </div>
      <div className={classes["about-employee-card-wrapper"]}>
        <AboutEmployeeCard />
      </div>
    </div>
  );
};

export default HomePage;
