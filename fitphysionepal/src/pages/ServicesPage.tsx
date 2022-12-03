import { FC } from "react";
import ServiceCardContainer from "../components/containers/ServiceCardContainer";
import classes from "./service-page.module.css";

const ServicesPage: FC = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className={classes["service-card-container-wrapper"]}>
        <ServiceCardContainer />
      </div>
    </div>
  );
};

export default ServicesPage;
