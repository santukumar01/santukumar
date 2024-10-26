import React, { useState } from "react";

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const icons = [
    { name: "c-plus-plus", color: "#d3f21d" },
    { name: "react", color: "#4e0fda" },
    { name: "nodejs", color: "#dd0b0e" },
    { name: "mongodb", color: "#b50e10" },
    { name: "html5", color: "#dacc16" },
    { name: "css3", color: "#3716da" },
    { name: "javascript", color: "#ffe301" },
    { name: "tailwind-css", color: "#391dc1" },
    { name: "github", color: "#615e33" },
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
                className="p-6 text-white cursor-pointer rounded-lg"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  transition: "transform 0.5s",
                  transform:
                    hoveredIndex === index
                      ? "rotateY(180deg)"
                      : "rotateY(0deg)",
                  perspective: "1000px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100px",
                  height: "100px",
                }}
              >
                <div
                  style={{
                    fontSize: "40px",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <box-icon
                    name={icon.name}
                    type="logo"
                    color={icon.color}
                    size="50px"
                  ></box-icon>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
