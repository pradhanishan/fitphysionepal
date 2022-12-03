import customerImage1 from "../assets/images/customers/customer-one.jpg";
import customerImage2 from "../assets/images/customers/customer-two.jpg";
import customerImage3 from "../assets/images/customers/customer-three.jpg";

type TTestimonials = {
  id: number;
  image: any;
  testimonial: string;
  name: string;
  title: string;
}[];

export const testimonials: TTestimonials = [
  {
    id: 0,
    image: customerImage1,
    testimonial:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate magni, eveniet dicta numquam qui quia esse nam rem architecto aut temporibus pariatur eaque recusandae illum? Repellat sit magni quae!",
    name: "Customer 1",
    title: "Customer title 1",
  },
  {
    id: 1,
    image: customerImage2,
    testimonial:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate magni, eveniet dicta numquam qui quia esse nam rem architecto aut temporibus pariatur eaque recusandae illum? Repellat sit magni quae!",
    name: "Customer 2",
    title: "Customer title 2",
  },
  {
    id: 2,
    image: customerImage3,
    testimonial:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate magni, eveniet dicta numquam qui quia esse nam rem architecto aut temporibus pariatur eaque recusandae illum? Repellat sit magni quae!",
    name: "Customer 3",
    title: "Customer title 3",
  },
];
