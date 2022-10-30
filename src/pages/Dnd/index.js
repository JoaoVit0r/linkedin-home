import { useEffect, useState } from "react";
import { getClasses, getClassLevels } from "../../services/dnd";
import "./styles.css";

export function Dnd() {
  const [selectedClass, setSelectedClass] = useState(-1);
  const [classes, setClasses] = useState([]);
  const [classLevels, setClassLevels] = useState([]);

  useEffect(() => {
    try {
      getClasses().then((result) => {
        setClasses(result);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (classes.length && selectedClass >= 0 && selectedClass < classes.length) {
      try {
        getClassLevels(classes[selectedClass].index).then((result) => {
          setClassLevels(result);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [classes, selectedClass]);

  const handleSelectClass = (idx) => {
    setSelectedClass(idx)
  }

  return (
    <div className="container">
      <p className="text">Select your class</p>
      <div className="classes-container">
        {classes.map(({ index, name }, idx) => (
          <div className="button-container" key={index}>
            <button className="button" type="button" onClick={()=>handleSelectClass(idx)}>{name}</button>
          </div>
        ))}
      </div>
      <div className="levels-container">
        {classLevels.map(({ index, level, features }) => (
          <div className="level-card" key={index}>
            <p className="text">{level}</p>
            {features.map(({ index, name }) => (
              <div className="features-container" key={index}>
                <p className="text">{name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
