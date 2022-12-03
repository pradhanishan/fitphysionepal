import { FC } from "react";
import { timings } from "../../data/timings";
import ListGroup from "react-bootstrap/ListGroup";
import classes from "./timings-card.module.css";

const TimingsCard: FC = () => {
  return (
    <div>
      <ListGroup variant="flush">
        {timings.map((timing) => {
          return (
            <ListGroup.Item key={timing.id}>
              <div className={classes["timing-list-item-container"]}>
                <span style={{ marginRight: "1rem" }}>{timing.day}</span>
                <span>{`${timing.from} - ${timing.to}`}</span>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default TimingsCard;
