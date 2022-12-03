import { FC } from "react";
import CustomerTestimonialCard from "../cards/CustomerTestimonialCard";
import classes from "./customer-testimonial-card-container.module.css";

const CustomerTestimonialCardContainer: FC = () => {
  return (
    <div className={classes["customer-testimonial-card-container"]}>
      <CustomerTestimonialCard /> <CustomerTestimonialCard /> <CustomerTestimonialCard />
    </div>
  );
};

export default CustomerTestimonialCardContainer;
