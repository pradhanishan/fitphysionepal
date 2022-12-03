import { FC } from "react";
import CustomerTestimonialCard from "../cards/CustomerTestimonialCard";
import classes from "./customer-testimonial-card-container.module.css";
import { testimonials } from "../../data/testimonials";

const CustomerTestimonialCardContainer: FC = () => {
  return (
    <div className={classes["customer-testimonial-card-container"]}>
      {testimonials.map((testimonial) => {
        return (
          <CustomerTestimonialCard
            key={testimonial.id}
            image={testimonial.image}
            name={testimonial.name}
            testimonial={testimonial.testimonial}
            title={testimonial.title}
          />
        );
      })}
    </div>
  );
};

export default CustomerTestimonialCardContainer;
