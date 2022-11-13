import React from "react";
import Project from "../Project";
import StudyBuddy from "../../assets/StudyBudy_screenshot.png";
import FieldPotato from "../../assets/FieldPotato_screenshot.png";
import Jate from "../../assets/JATE_screenshot.JPG";
import NoteTaker from "../../assets/ExpressJSNOteTaker_screenshot.JPG";
import WeatherDash from "../../assets/Weather-dashboard.JPG";

const projectData = [
  {
    image: StudyBuddy,
    title: "Study Buddy - Creating study groups made easy",
    linkDeployed:
      "https://github.com/HenniePenny/Study-Buddy/deployments/activity_log?environment=study-buddy-10178",
    linkGH: "https://github.com/HenniePenny/Study-Buddy",
  },
  {
    image: FieldPotato,
    title: "Countless ways to move you from couch to field",
    linkDeployed: "linkD.com",
    linkGH: "linkGH.com",
  },
  {
    image: Jate,
    title: "PWA text editor - JATE",
    linkDeployed: "https://serene-brushlands-11314.herokuapp.com/",
    linkGH: "https://github.com/HenniePenny/19-PWA-text-editor",
  },
  {
    image: NoteTaker,
    title: "Express.js Note Taker",
    linkDeployed: "https://limitless-island-12230.herokuapp.com/",
    linkGH: "https://github.com/HenniePenny/11-Express.js-Note-Taker",
  },
  {
    image: WeatherDash,
    title: "Weather Dashboard",
    linkDeployed: "https://limitless-island-12230.herokuapp.com/",
    linkGH: "https://github.com/HenniePenny/11-Express.js-Note-Taker",
  },
];

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      {projectData.map((project) => (
        <Project key={project.title} projectData={project} />
      ))}
    </div>
  );
}
