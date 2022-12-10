import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/logo.svg";
import { login } from "../../services/auth";
import { setCookie } from "../../utils/cookies";
import "./styles.css";

export function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("handleSubmit");
    const payload = {
      email,
      password,
    };
    login(payload)
      .then((result) => {
        console.log(result);

        if ("accessToken" in result) {
          localStorage.setItem("token", result.accessToken);
          setCookie("token", result.accessToken);
          navigate("/app/dnd-list");
        }
        if ("message" in result) {
          setErrorMessage(result.message);
        }
      })
  };
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <nav className="header">
        <a
          className="logo-link"
          href="/?trk=guest_homepage-basic_nav-header-logo"
        >
          <img alt="imagem" className="logo" src={Image} />
        </a>
        <div className="header-content">
          <ul className="link-list">
            <li>
              <a href="https://www.linkedin.com/pulse/topics/home/?trk=homepage-basic_guest_nav_menu_discover">
                <img
                  alt="imagem"
                  className="top-nav-link__icon flex h-3 w-3 flex-shrink-0"
                  src="https://static-exp1.licdn.com/aero-v1/sc/h/5x5h6fkfoq2njo0ocxqr98mrk"
                />
                <span className="top-nav-link__label-text font-sans text-sm leading-regular font-regular break-all">
                  Discover
                </span>
              </a>
            </li>
            <li>
              <a href=".">
                <img
                  alt="imagem"
                  className="top-nav-link__icon flex h-3 w-3 flex-shrink-0"
                  src="https://static-exp1.licdn.com/aero-v1/sc/h/7kb6sn3tm4cx918cx9a5jlb0"
                />
                <span className="top-nav-link__label-text font-sans text-sm leading-regular font-regular break-all">
                  People
                </span>
              </a>
            </li>
            <li>
              <a href="https://br.linkedin.com/learning/search?trk=homepage-basic_guest_nav_menu_learning">
                <img
                  alt="imagem"
                  className="top-nav-link__icon flex h-3 w-3 flex-shrink-0"
                  src="https://static-exp1.licdn.com/aero-v1/sc/h/8wykgzgbqy0t3fnkgborvz54u"
                />
                <span className="top-nav-link__label-text font-sans text-sm leading-regular font-regular break-all">
                  Learning
                </span>
              </a>
            </li>
            <li>
              <a href="https://br.linkedin.com/jobs/jobs-in-brazil?trk=homepage-basic_guest_nav_menu_jobs">
                <img
                  alt="imagem"
                  className="top-nav-link__icon flex h-3 w-3 flex-shrink-0"
                  src="https://static-exp1.licdn.com/aero-v1/sc/h/92eb1xekc34eklevj0io6x4ki"
                />
                <span className="top-nav-link__label-text font-sans text-sm leading-regular font-regular break-all">
                  Jobs
                </span>
              </a>
            </li>
          </ul>

          <div className="account-buttons">
            <a
              className="join-button"
              href="https://www.linkedin.com/signup/cold-join?trk=guest_homepage-basic_nav-header-join"
            >
              Join now
            </a>
            <a
              className="sign-button"
              href="https://www.linkedin.com/login?fromSignIn=true&amp;trk=guest_homepage-basic_nav-header-signin"
            >
              Sign in
            </a>
          </div>
        </div>
      </nav>

      <main className="main-container" role="main" id="main-content">
        <section className="sign-in-container">
          <div className="sign-in-content">
            <h1>Welcome to your professional community</h1>

            <div className="sign-in-form-container">
              <form className="sign-in-form" onSubmit={handleSubmit}>
                <div className="sign-in-form__form-input-container">
                  <div className="input">
                    <input
                      className="input__input"
                      autocomplete="username"
                      required="true"
                      id="session_key"
                      name="session_key"
                      placeholder=" "
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className="input__label" for="session_key">
                      Email or phone number
                    </label>
                  </div>

                  <div className="input">
                    <input
                      className="input__input"
                      autocomplete="current-password"
                      required="true"
                      id="session_password"
                      name="session_password"
                      placeholder=" "
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <label className="input__label" for="session_password">
                      Password
                    </label>

                    <button
                      className="sign-in-form__password-visibility-toggle-button"
                      aria-label="Show your LinkedIn password"
                      type="button"
                    >
                      Show
                    </button>
                  </div>
                </div>

                <a
                  className="sign-in-form__forgot-password-link"
                  href="/uas/request-password-reset?trk=homepage-basic_signin-form_forgot-password-link"
                >
                  Forgot password?
                </a>

                <button className="sign-in-form__submit-button" type="submit">
                  Sign in
                </button>
                <p style={{ color: "red" }}>{errorMessage}</p>
              </form>
            </div>
          </div>

          <img
            className="image-background"
            alt="Welcome to your professional community"
            src="https://static-exp1.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
          />
        </section>
      </main>

      <section className="topics-main-container">
        <div className="topics-container">
          <div className="secondary-heading-container">
            <h2 className="secondary-heading">
              Explore topics you are interested in
            </h2>
          </div>
          <div className="list-container">
            <h2 className="list-name">Content Topics</h2>
            <ul className="show-more-less__list show-more-less__list--no-hidden-elems">
              <li className="item">
                <a href="https://www.linkedin.com/pulse/topics/home/">
                  See All Topics
                </a>
              </li>
              <li className="item">
                <a href="https://www.linkedin.com/pulse/topics/workplace-c9/">
                  Workplace
                </a>
              </li>
              <li className="item">
                <a href="https://www.linkedin.com/pulse/topics/job-search-c27/">
                  Job Search
                </a>
              </li>
              <li className="item">
                <a href="https://www.linkedin.com/pulse/topics/careers-c1/">
                  Careers
                </a>
              </li>
              <li className="item">
                <a href="https://www.linkedin.com/pulse/topics/job-search-c27/interviewing-c28/">
                  Interviewing
                </a>
              </li>
              <li className="item">
                <a href="https://www.linkedin.com/pulse/topics/careers-c1/salary-and-compensation-c7/">
                  Salary and Compensation
                </a>
              </li>
              <li className="item">
                <a href="https://www.linkedin.com/pulse/topics/careers-c1/internships-c5/">
                  Internships
                </a>
              </li>
              <li className="item">
                <a href="https://www.linkedin.com/pulse/topics/workplace-c9/employee-benefits-c12/">
                  Employee Benefits
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
