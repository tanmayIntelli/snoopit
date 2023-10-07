import React from "react";
import "./usercard.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import tan from "../../images/tan.jpeg";
import pp from "../../images/pp.jpeg";

function UserCard() {
  return (
    <div className="container2">
      <div className="profile-card-1">
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src={pp} alt="Profile Picture" />
          </div>
          <div className="team-content">
            <p className="name">Priyanka Panjabi</p>
            <p className="about">Frontend Developer @Wipro Ltd</p>
            <p className="title">
              Fulltime keyboard masseur. Taking pleasure in frontend development
              and enthusiastic about acquiring knowledge.
            </p>
          </div>
          <ul className="social">
            <li>
              <Link
                className="social-media-link"
                to="https://www.linkedin.com/in/priyanka-panjabi-84496112b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </Link>
            </li>
            <li>
              <Link
                className="social-media-link"
                to="https://github.com/Priyanka-Panjabi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </Link>
            </li>
            <li>
              <a
                className="social-media-link"
                href="mailto:priyanka.panjabi88@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <EmailIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="profile-card-1">
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src={tan} alt="Profile Picture" />
          </div>
          <div className="team-content">
            <p className="name">Tanmay</p>
            <p className="about">SDE-2 @Oracle Cerner</p>
            <p className="title">
              Seasoned Frontend Developer with over 4 yrs of experience. Making
              healthcare accessible to all @Oracle Cerner. Specialize in
              crafting immersive UIs and bringing creative web solutions to
              life.
            </p>
          </div>
          <ul className="social">
            <li>
              <Link
                className="social-media-link"
                to="https://www.linkedin.com/in/tanmay-17886615b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </Link>
            </li>
            <li>
              <Link
                className="social-media-link"
                to="https://github.com/tanmayIntelli"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </Link>
            </li>
            <li>
              <a
                className="social-media-link"
                href="mailto:tanmaypach15@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <EmailIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
