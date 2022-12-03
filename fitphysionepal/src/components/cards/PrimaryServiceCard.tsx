import { FC } from "react";
import classes from "./primary-service-card.module.css";

interface IPrimaryServiceCardProps {
  title: string;
  text: string;
}

const PrimaryServiceCard: FC<IPrimaryServiceCardProps> = (props: IPrimaryServiceCardProps) => {
  const { title, text } = props;
  return (
    <div className={classes["primary-service-card"]}>
      <div className={classes["primary-service-card-inner"]}>
        <h5 className={classes["primary-service-card-heading"]}>{title}</h5>
        <hr />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PrimaryServiceCard;
