import "./TechStack.css";

const TechStack = () => {
  const data = [
    {
      name: "Front-end developer",
    },
    {
      name: "React js",
    },
    {
      name: "Javascript(vanilla)",
    },
    {
      name: "Typescript",
    },
    {
      name: "SQL",
    },
    {
      name: "mySQL server",
    },
    {
      name: "Node js",
    },
    {
      name: "Next js",
    },
    {
      name: "Express js",
    },
    {
      name: "Mongo Db",
    },
  ];

  return (
    <div className="container techStack-section">
      <div className="techStack-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, i, arr) => {
          return (
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
              key={`${item.name}${Math.random()}`}
            >
              <div className="techStack-content">{<p>{item.name}</p>}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
