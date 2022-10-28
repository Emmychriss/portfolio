import "./TechStack.css";

const TechStack = () => {
  const data = [
    {
      name: "Front-end developer",
      color: "#F0B041",
    },
    {
      name: "React js",
      color: "#68D68D",
    },
    {
      name: "Javascript(vanilla)",
      color: "#7D3C98",
    },
    {
      name: "Typescript",
      color: "#76D7C4",
    },
    {
      name: "SQL",
      color: "#6E2C0D",
    },
    {
      name: "mySQL server",
      color: "#F1C410",
    },
    {
      name: "Node js",
      color: "#CD6155",
    },
    {
      name: "Next js",
      color: "#DC7633",
    },
    {
      name: "Express js",
      color: "#3F80BA",
    },
    {
      name: "Mongo Db",
      color: "#306B3B",
    },
  ];

  return (
    <div className="container techStack-section">
      <div className="techStack-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index, arr) => {
          return (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="techStack-content">
                <span
                  className="techStack-number"
                  style={{ backgroundColor: data[index].color }}
                >
                  {index + 1}
                </span>
                {<p>{item.name}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
