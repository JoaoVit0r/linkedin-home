import { useEffect, useState } from "react";

export const LevelFields = ({ index, level, funcAux }) => {
  const [name, setName] = useState("");
  const [features, setFeatures] = useState("");

  useEffect(() => {
    const levelAux = { ...level };
    levelAux.level = name;
    levelAux.features = features;

    funcAux(index, levelAux);
  }, [name, features, level, funcAux, index]);

  return (
    <div>
      <input
        required
        type="text"
        placeholder="Level"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        required
        type="text"
        placeholder="Funcionalidades"
        onChange={(e) => setFeatures(e.target.value)}
        value={features}
      />
    </div>
  );
};
