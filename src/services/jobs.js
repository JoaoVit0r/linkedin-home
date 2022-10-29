import { apiArbeitnow } from "./apiArbeitnow.js";

// url: 'https://arbeitnow.com/api/job-board-api',
export const listJobs = async () => {
  const result = await apiArbeitnow
    .get("job-board-api")
    .then((res) => res.data)
    .catch((err) => err.response?.data);

  return result;
};
// app.get('/hello', function (req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.send('Hello World');
//   })