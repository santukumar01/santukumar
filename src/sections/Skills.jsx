import React, { useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const icons = [
    { name: "c-plus-plus", showntxt: "C++", color: "#d3f21d" },
    {
      name: "data",
      showntxt: "Data Structures and Algorithms",
      color: "#0a17d7",
    },
    { name: "nodejs", showntxt: "NodeJS", color: "#dd0b0e" },
    { name: "React", showntxt: "ReactJs", color: "#4e0fda" },
    { name: "MongoDB", showntxt: "MongoDB", color: "#b50e10" },
    { name: "HTML5", showntxt: "HTML", color: "#dacc16" },
    { name: "CSS3", showntxt: "CSS", color: "#3716da" },
    { name: "JavaScript", showntxt: "JavaScript", color: "#ffe301" },
    { name: "Tailwind CSS", showntxt: "Tailwind CSS", color: "#391dc1" },
    { name: "GitHub", showntxt: "Github", color: "#615e33" },
  ];

  return (
    <section className="c-space my-20" id="skills">
      <div className="col-span-1 xl:row-span-3">
        <div className="grid-container">
          <p className="grid-headtext">My Skills</p>

          <div className="flex justify-start flex-wrap space-x-4">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="skill-icon"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon Container with Flip Effect */}
                <div className="icon-container">
                  {/* Front Side */}
                  <div
                    className="icon-face icon-front"
                    style={{ color: icon.color }}
                  >
                    <box-icon
                      name={icon.name.toLowerCase().replace(" ", "-")}
                      type="logo"
                      color={icon.color}
                      size="50px"
                    ></box-icon>
                  </div>

                  {/* Back Side with Reversed Text */}
                  <div className="icon-face icon-back">
                    <span>{[...icon.name].reverse().join("")}</span>
                  </div>
                </div>

                {/* Tooltip */}
                {hoveredIndex === index && (
                  <span className="tooltip">{icon.showntxt}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
