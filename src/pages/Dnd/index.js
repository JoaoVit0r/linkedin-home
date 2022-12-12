import { useEffect, useRef, useState } from "react";
import { LevelFields } from "../../component/LevelFields";
import { apiDnd } from "../../services/apiDnd";
import { createClass, getClasses, getClassLevels } from "../../services/dnd";
import "./styles.css";

export function Dnd() {
  const [index, setIndex] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const [newLevels, setNewLevels] = useState([
    { index: "0", level: "1", features: "" },
  ]);

  const [errorMessage, setErrorMessage] = useState("");
  const [count, setCount] = useState(0);

  const refImage = useRef(null);
  const refToNewLevels = useRef([...newLevels]);

  const [selectedClass, setSelectedClass] = useState(-1);
  const [classes, setClasses] = useState([]);
  const [classLevels, setClassLevels] = useState([]);

  useEffect(() => {
    try {
      getClasses().then((result) => {
        result.map((classObj)=>{
          const base64String = window.btoa(String.fromCharCode(...new Uint8Array(classObj.img.data.data)))
          classObj.srcBase64 = `data:image/${classObj?.img?.contentType};base64,${base64String}`
          return classObj
        })
        setClasses(result);
      });
    } catch (error) {
      console.log(error);
    }
  }, [count]);

  useEffect(() => {
    if (
      classes.length &&
      selectedClass >= 0 &&
      selectedClass < classes.length
    ) {
      try {
        getClassLevels(classes[selectedClass].index).then((result) => {
          setClassLevels(
            result.map((level) => {
              level.features = level.features
                .split(";")
                .map((featuresStr, index) => ({ index, name: featuresStr }));
              return level;
            })
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [classes, selectedClass, count]);

  const handleSelectClass = (idx) => {
    setSelectedClass(idx);
  };

  const handleAddLevel = () => {
    const numAux = newLevels.length;
    const newlevelAux = [...newLevels];
    newlevelAux.push({
      index: numAux.toString(),
      level: (numAux + 1).toString(),
      features: "",
    });
    // features: { index: "0", name: "" },

    refToNewLevels.current = [...newlevelAux];
    setNewLevels(newlevelAux);
  };

  async function handleSubmit(e) {
    e.preventDefault()
    
    console.log("SUBMIT image", image);
    console.log("SUBMIT refToNewLevels.current", {...refToNewLevels.current});

    try {
      await createClass({index, name, image, levels: refToNewLevels.current})

      setIndex('')
      setName('')
      setImage(null)

      setNewLevels([
        { index: "0", level: "1", features: "" },
      ])

      refImage.current && (refImage.current.value = "");

      setCount(new Date().getTime())
    } catch (err) {
      if ("message" in err.response.data) {
        setErrorMessage(err.response.data.message);
      }
    }
  }

  const handleLevelFieldChange = (index, levelAux) => {
    // const newLevelsAux = [...newLevels]

    // newLevelsAux[index] = levelAux

    // setNewLevels(newLevelsAux)

    refToNewLevels.current[index] = levelAux;
  };

  return (
    <div className="container">
      <div style={{ margin: "10px", padding: "6px" }}>
        <form>
          <input
            required
            type="text"
            placeholder="Identificador da Classe"
            onChange={(e) => setIndex(e.target.value)}
            value={index}
          />
          <input
            required
            type="text"
            placeholder="Nome da Classe"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            required
            ref={refImage}
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.item(0) ?? null)}
          />

          <button type="button" onClick={handleAddLevel}>
            Add level
          </button>

          {newLevels.map((level, index) => (
            <LevelFields
              key={level.index}
              index={index}
              level={level}
              funcAux={handleLevelFieldChange}
            />
          ))}

          <button type="submit" onClick={(e)=>handleSubmit(e)}>
            Enviar
          </button>
        </form>
        <p style={{ color: "red" }}>{errorMessage}</p>
      </div>

      <p className="text">Select your class</p>
      <div className="classes-container">
        {classes.map(({ index, name, srcBase64 }, idx) => (
          <div className="button-container" key={index}>
            <button
              className="button"
              type="button"
              onClick={() => handleSelectClass(idx)}
            >
              <img style={{ width: "40px", height: "40px", margin: "0 5px" }} src={srcBase64} alt={`${name}`} />
              {name}
            </button>
          </div>
        ))}
      </div>
      <div className="levels-container">
        {classLevels.map(({ index, level, features }) => (
          <div className="level-card" key={index}>
            <p className="text">Level: {level}</p>
            <div className="feature-container">
              {features.map(({ index, name }) => (
                <div className="feature-container" key={index}>
                  <p className="text">{name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
