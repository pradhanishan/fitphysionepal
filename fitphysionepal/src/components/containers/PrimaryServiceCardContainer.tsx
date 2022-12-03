import { FC } from "react";
import PrimaryServiceCard from "../cards/PrimaryServiceCard";
import { primaryServices } from "../../data/services";
import classes from "./primary-service-card-container.module.css";

const PrimaryServiceCardContainer: FC = () => {
  return (
    <div className={classes["primary-service-card-container"]}>
      {primaryServices.map((primaryService) => {
        return <PrimaryServiceCard key={primaryService.id} text={primaryService.text} title={primaryService.title} />;
      })}
    </div>
  );
};

export default PrimaryServiceCardContainer;
