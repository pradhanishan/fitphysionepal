import { FC } from "react";
import classes from "./customer-testimonial-card.module.css";
import DUMMY from "../../assets/images/customers/customer-one.jpg";

interface ICustoemrTestimonialCardProps {
  image: any;
  testimonial: string;
  name: string;
  title: string;
}

const CustomerTestimonialCard: FC<ICustoemrTestimonialCardProps> = (props: ICustoemrTestimonialCardProps) => {
  const { image, testimonial, name, title } = props;
  return (
    <div className={classes["customer-testimonial-card"]}>
      <img src={image} className={classes["customer-avatar"]} alt="DUMMY" />
      <p className={classes["testimonial-paragraph"]}>{testimonial}</p>
      <b>{name}</b>
      <br />
      <span>{title}</span>
    </div>
  );
};

export default CustomerTestimonialCard;
