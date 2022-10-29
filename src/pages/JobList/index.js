import { useEffect, useState } from "react";
import { login } from "../../services/auth";
import { listJobs } from "../../services/jobs";
import "./styles.css";

export function JobList() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [jobs, setJobs] = useState([]);


  useEffect(() => {
    listJobs().then((result)=>{
      console.log(result);

      // if ("token" in result) {
      //   localStorage.setItem("token", result.token)
      // }
      // if ("error" in result) {
      //   setErrorMessage(result.error)
      // }
    })
  }, [])
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log("handleSubmit");
  //   const payload = {
  //     email,
  //     password,
  //   }
  //   login(payload).then((result)=>{
  //     console.log(result);

  //     if ("token" in result) {
  //       localStorage.setItem("token", result.token)
  //     }
  //     if ("error" in result) {
  //       setErrorMessage(result.error)
  //     }
  //   })
  // }
  // const [errorMessage, setErrorMessage] = useState('');

  return <p>hello world</p>
}
 