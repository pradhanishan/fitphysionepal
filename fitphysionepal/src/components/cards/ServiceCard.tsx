import { FC } from "react";
import Card from "react-bootstrap/Card";
import classes from "./service-card.module.css";

interface IServiceCardProps {
  image: any;
  title: string;
  text: string;
}

const ServiceCard: FC<IServiceCardProps> = (props: IServiceCardProps) => {
  const { image, title, text } = props;
  return (
    <Card style={{ width: "18rem" }} className={classes["service-card"]}>
      <Card.Img variant="top" src={image} height="50%" />
      <Card.Body className={classes["service-card-body"]}>
        <Card.Title className={classes["service-card-title"]}>{title}</Card.Title>
        <Card.Text>{text.length > 150 ? `${text.substring(0, 147)}...` : text.length}</Card.Text>
        {/* <Button style={{ backgroundColor: "#fc5185", border: "none" }}>
          read more <MdExpandMore />
        </Button> */}
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
