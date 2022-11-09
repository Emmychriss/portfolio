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

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container testimonial-section">
      <div className="testimonial-title">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>

      <div className="testimonial-slider">
        <Slider {...settings}>
          {data.map((item, index, arr) => {
            return (
              <div className="slider-content" key={index}>
                <img
                  src={item.image}
                  alt="Testimonial Pic"
                  className="centerImage "
                ></img>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
