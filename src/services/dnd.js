import { apiDnd } from "./apiDnd.js";

export const getClassLevels = async (characterClass) => {
  return await apiDnd
    .get(`api/classes/${characterClass}/levels`)
    .then((res) => res.data.results)
    .catch((err) => {
      throw err;
    });
};

export const getClasses = async () => {
  return await apiDnd
    .get(`api/classes`)
    .then((res) => res.data.results)
    .catch((err) => {
      throw err;
    });
};

export const createClass = async ({ index, name, image, levels }) => {
  const data = new FormData();
  data.append("index", index);
  data.append("name", name);
  data.append("image", image, image.name);
  data.append("levels", JSON.stringify(levels));
  return await apiDnd
    .post(`api/classes`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};
