import React from "react";

const styles = {
  card: {
    width: "18rem",
  },
};

export default function Project({ projectData }) {
  return (
    <div className="d-inline-flex d-flex flex-row justify-content-start">
      <div className="card p-2" style={styles.card}>
        <img className="card-img-top" src={projectData.image} alt="attribute" />
        <div className="card-body">
          <h5 className="card-title">{projectData.title}</h5>
        </div>
        <div className="card-body">
          <a href={projectData.linkDeployed} className="card-link">
            Deployment
          </a>
          <a href={projectData.linkGH} className="card-link">
            See on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
