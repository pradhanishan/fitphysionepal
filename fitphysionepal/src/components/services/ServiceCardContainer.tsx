import { FC } from "react";
import { services } from "../../data/services";
import ServiceCard from "../cards/ServiceCard";
import classes from "./service-card-container.module.css";

const ServiceCardContainer: FC = () => {
  return (
    <div className={classes["service-card-container"]}>
      {services.map((service) => {
        return <ServiceCard key={service.id} title={service.title} text={service.text} image={service.image} />;
      })}
    </div>
  );
};

export default ServiceCardContainer;
