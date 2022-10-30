import "./Project.css";

const Project = () => {
  const data = [
    {
      name: "Swift Bank App",
      description: "A simple bank app for transfer and receival of amounts",
      projectLink: "",
      techUsed: [
        {
          techName: "Firebase",
        },
        {
          techName: "Html",
        },
        {
          techName: "CSS",
        },
        {
          techName: "Javascript",
        },
      ],
    },

    {
      name: "Insta clone app",
      description: "This is a simple Instagram clone application",
      projectLink: "",
      techUsed: [
        {
          techName: "ReactJS",
        },
        {
          techName: "Javascript",
        },
        {
          techName: "CSS",
        },
        {
          techName: "next JS",
        },
      ],
    },

    {
      name: "Swift Bank App",
      description: "A simple bank app for transfer and receival of amounts",
      projectLink: "",
      techUsed: [
        {
          techName: "Firebase",
        },
        {
          techName: "Html",
        },
        {
          techName: "CSS",
        },
        {
          techName: "Javascript",
        },
      ],
    },

    {
      name: "Insta clone app",
      description: "This is a simple Instagram clone application",
      projectLink: "",
      techUsed: [
        {
          techName: "ReactJS",
        },
        {
          techName: "Javascript",
        },
        {
          techName: "CSS",
        },
        {
          techName: "next JS",
        },
      ],
    },
  ];

  return (
    <div className="container project-section">
      <div className="techStack-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item) => {
          return (
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
