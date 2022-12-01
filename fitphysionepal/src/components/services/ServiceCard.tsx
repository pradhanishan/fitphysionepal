import { FC } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

interface IServiceCardProps {
  image: any;
  title: string;
  text: string;
}

const ServiceCard: FC<IServiceCardProps> = (props: IServiceCardProps) => {
  const { image, title, text } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} height="50%" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text.length > 150 ? `${text.substring(0, 147)}...` : text.length}</Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
