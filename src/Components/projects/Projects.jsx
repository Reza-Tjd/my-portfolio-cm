import React from "react";

export default function Project({ title, description, techUsed }) {
  return (
    <div className="project">
      <img src="/img/placeholder.png" alt="" />
      <div className="title">{title}</div>
      <p className="description">{description}</p>
      <div className="tech">
        <span> Tech Used:</span>
        <ul>
          {techUsed.map((tech, index) => (
            <li key={index}>
              <img src={tech.icon} alt={tech.name} />
            </li>
          ))}
        </ul>
      </div>
      <div className="buttons">
        <a className="button ghost" href="#">
          <i className="fa-regular fa-eye"></i>Demo
        </a>
        <a href="#" className="button outline dark">
          <i className="fa-brands fa-github"></i>View Code
        </a>
      </div>
    </div>
  );
}
