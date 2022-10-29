import axios from "axios";

export const baseURL = "https://arbeitnow.com/api";

export const apiArbeitnow = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  // headers: {
  // },
});
// apiArbeitnow.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
// apiArbeitnow.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
// apiArbeitnow.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// apiArbeitnow.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
// res.header("Access-Control-Allow-Origin", "*");
