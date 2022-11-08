import "./Testimonial.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const data = [
    {
      name: "Esther Nduka",
      position: "Data analyst and SQL pro.",
      description: "",
      image: "",
    },
    {
      name: "Noel Emmanuel",
      position: "Front-end developer and UI/UX",
      description: "",
      image: "",
    },
    {
      name: "Ayinla Omokeji",
      position: "Full stack developer",
      description: "",
      image: "",
    },
    {
      name: "Habeeb",
      position: "Back-end engineer",
      description: "",
      image: "",
    },
    {
      name: "Ayomide Giwa",
      position: "Computer software solutions",
      description: "",
      image: "",
    },
    {
      name: "Samson",
      position: "Accountant",
      description: "",
      image: "",
    },
    {
      name: "Christy Ifeoma",
      position: "Accountant",
      description: "",
      image: "",
    },
    {
      name: "Ezekiel Mcfadipe",
      position: "software solutions",
      description: "",
      image: "",
    },
    {
      name: "Kolawole Adeboyejo",
      position: "",
      description: "",
      image: "",
    },
  ];

  return (
    <div className="container testimonial-section">
      <div className="testimonial-title">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>
    </div>
  );
};

export default Testimonial;
