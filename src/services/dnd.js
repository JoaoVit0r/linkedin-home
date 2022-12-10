import { apiDnd } from "./apiDnd.js";

export const getClassLevels = async (characterClass) => {
  return await apiDnd
    .get(`/classes/${characterClass}/levels`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const getClasses = async () => {
  return await apiDnd
    .get(`/classes`)
    .then((res) => res.data.results)
    .catch((err) => {
      throw err;
    });
};