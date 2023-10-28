
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const About = ({
  freepikShadows = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/freepik--shadows--inject-26-1@2x.png",
  freepikPlantInject = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/freepik--plant--inject-26-1@2x.png",
  freepikPictures = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/freepik--pictures--inject-26-1@2x.png",
  freepikCharacter = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/freepik--character--inject-26-1@2x.png",
  vector = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-46.svg",
  img = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-47.svg",
  vector1 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-48.svg",
  vector2 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-48.svg",
  vector3 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-50.svg",
  vector4 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-51.svg",
  vector5 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-52.svg",
  vector6 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-53.svg",
  vector7 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-54.svg",
  vector8 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-55.svg",
  vector9 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-56.svg",
  vector10 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-57.svg",
  vector11 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-58.svg",
  vector12 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-59.svg",
  vector13 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-61.svg",
  vector14 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-62.svg",
  vector15 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-63.svg",
  vector16 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-64.svg",
  vector17 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-65.svg",
  vector18 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-68.svg",
  vector19 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-69.svg",
  vector20 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-70.svg",
  vector21 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-71.svg",
  vector22 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-72.svg",
  vector23 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-73.svg",
  vector24 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-75.svg",
  vector25 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-76.svg",
  vector26 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-77.svg",
  vector27 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-80.svg",
  vector28 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-81.svg",
  vector29 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-82.svg",
  vector30 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-83.svg",
  vector31 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-84.svg",
  vector32 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-85.svg",
  vector33 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-87.svg",
  vector34 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-88.svg",
  vector35 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-89.svg",
  vector36 = "https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-90.svg",
}) => {
  return (
    <div className="about">
      <div className="code-typing-amico">
        <div className="overlap-3">
          <img
            className="freepik-floor-inject"
            alt="Freepik floor inject"
            src="https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/freepik--floor--inject-26@2x.png"
          />
          <img className="freepik-shadows" alt="Freepik shadows" src={freepikShadows} />
          <img className="freepik-plant-inject" alt="Freepik plant inject" src={freepikPlantInject} />
          <img className="freepik-pictures" alt="Freepik pictures" src={freepikPictures} />
          <img className="freepik-character" alt="Freepik character" src={freepikCharacter} />
          <div className="freepik-screen">
            <div className="overlap-group-2">
              <img className="vector" alt="Vector" src={vector} />
              <img className="vector" alt="Vector" src={img} />
              <img className="img" alt="Vector" src={vector1} />
              <img className="img" alt="Vector" src={vector2} />
              <img className="vector-2" alt="Vector" src={vector3} />
              <img className="img" alt="Vector" src={vector4} />
              <img className="vector-3" alt="Vector" src={vector5} />
              <img className="vector-4" alt="Vector" src={vector6} />
              <img className="vector-5" alt="Vector" src={vector7} />
              <img className="vector-6" alt="Vector" src={vector8} />
              <img className="vector-7" alt="Vector" src={vector9} />
              <img className="vector-8" alt="Vector" src={vector10} />
              <img className="vector-9" alt="Vector" src={vector11} />
              <img className="vector-10" alt="Vector" src={vector12} />
              <img
                className="vector-11"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-14.svg"
              />
              <img className="vector-12" alt="Vector" src={vector13} />
              <img className="vector-13" alt="Vector" src={vector14} />
              <img className="vector-14" alt="Vector" src={vector15} />
              <img className="vector-15" alt="Vector" src={vector16} />
              <img className="vector-16" alt="Vector" src={vector17} />
              <img
                className="vector-17"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-20.svg"
              />
              <img
                className="vector-18"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-21.svg"
              />
              <img className="vector-19" alt="Vector" src={vector18} />
              <img className="vector-20" alt="Vector" src={vector19} />
              <img className="vector-21" alt="Vector" src={vector20} />
              <img className="vector-22" alt="Vector" src={vector21} />
              <img className="vector-23" alt="Vector" src={vector22} />
              <img className="vector-24" alt="Vector" src={vector23} />
              <img
                className="vector-25"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-28.svg"
              />
              <img className="vector-26" alt="Vector" src={vector24} />
              <img className="vector-27" alt="Vector" src={vector25} />
              <img className="vector-28" alt="Vector" src={vector26} />
              <img
                className="vector-29"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-32.svg"
              />
              <img
                className="vector-30"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-33.svg"
              />
              <img className="vector-31" alt="Vector" src={vector27} />
              <img className="vector-32" alt="Vector" src={vector28} />
              <img className="vector-33" alt="Vector" src={vector29} />
              <img className="vector-34" alt="Vector" src={vector30} />
              <img className="vector-35" alt="Vector" src={vector31} />
              <img className="vector-36" alt="Vector" src={vector32} />
              <img
                className="vector-37"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-40.svg"
              />
              <img className="vector-38" alt="Vector" src={vector33} />
              <div className="text-wrapper-9">/</div>
              <img className="vector-39" alt="Vector" src={vector34} />
              <img className="vector-40" alt="Vector" src={vector35} />
              <img className="vector-41" alt="Vector" src={vector36} />
              <img
                className="vector-42"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/653c9d375650ba167f906efd/releases/653c9db10a18b93eb2753e38/img/vector-45.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="group-2">
        <p className="hello-my-name-is">
          √Hello, my name is Basil Sabu. I am currently pursuing a Bachelor&#39;s degree in Computer Science from the
          prestigious College of Engineering Trivandrum. I have a keen interest in the field of UI/UX design and Flutter
          development.
          <br />
          In addition to my technical skills, I possess strong communication and management abilities. I believe
          effective communication is essential for a successful collaboration with team members, stakeholders, and
          clients. Moreover, my management skills enable me to organize and prioritize tasks effectively, ensuring
          efficient project execution and timely delivery.
        </p>
        <div className="text-wrapper-10">About Me?</div>
      </div>
    </div>
  );
};

About.propTypes = {
  freepikShadows: PropTypes.string,
  freepikPlantInject: PropTypes.string,
  freepikPictures: PropTypes.string,
  freepikCharacter: PropTypes.string,
  vector: PropTypes.string,
  img: PropTypes.string,
  vector1: PropTypes.string,
  vector2: PropTypes.string,
  vector3: PropTypes.string,
  vector4: PropTypes.string,
  vector5: PropTypes.string,
  vector6: PropTypes.string,
  vector7: PropTypes.string,
  vector8: PropTypes.string,
  vector9: PropTypes.string,
  vector10: PropTypes.string,
  vector11: PropTypes.string,
  vector12: PropTypes.string,
  vector13: PropTypes.string,
  vector14: PropTypes.string,
  vector15: PropTypes.string,
  vector16: PropTypes.string,
  vector17: PropTypes.string,
  vector18: PropTypes.string,
  vector19: PropTypes.string,
  vector20: PropTypes.string,
  vector21: PropTypes.string,
  vector22: PropTypes.string,
  vector23: PropTypes.string,
  vector24: PropTypes.string,
  vector25: PropTypes.string,
  vector26: PropTypes.string,
  vector27: PropTypes.string,
  vector28: PropTypes.string,
  vector29: PropTypes.string,
  vector30: PropTypes.string,
  vector31: PropTypes.string,
  vector32: PropTypes.string,
  vector33: PropTypes.string,
  vector34: PropTypes.string,
  vector35: PropTypes.string,
  vector36: PropTypes.string,
};
