import React from "react";
import "./aboutLg.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import SnoopItDark from "../../images/logo-aboutUS.png";
import tan from "../../images/tan.jpeg";
import pp from "../../images/pp.jpeg";

const AboutLg = () => {
  const [translateXBody, setTranslateXBody] = React.useState(0);
  const [translateXCap, setTranslateXCap] = React.useState(0);
  const containerRef = React.useRef(null);
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setTranslateXBody(scrollTop);
    setTranslateXCap(scrollTop);

    if (
      document.documentElement.scrollTop + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      setTranslateXBody(0);
      setTranslateXCap(0);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const elementStyle = {
    transform: `translate(${
      translateXBody - 250 > 300 ? 750 : translateXBody - 250
    }px)`,
    transition: "transform 0.3s ease-out",
    zIndex: "1"
  };
  const elementStyleCap = {
    transform: `translate(${-translateXCap < -450 ? -550 : -translateXCap}px)`,
    transition: "transform 0.3s ease-out",
    zIndex: "2"
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "black"
        }}
        ref={containerRef}
      >
        <div className="about-banner">
          <div className="parent-pen">
            <div className="penbody">
              <img
                id="cap"
                style={elementStyleCap}
                src="https://uploads-ssl.webflow.com/5c3a6378e76e088403f168d4/5c81317bb78f130f5aaa4789_pen-1-1%403x.png"
                height={80}
                width={250}
                alt="cap styling"
              />
              <img
                style={elementStyle}
                id="pen"
                src="https://uploads-ssl.webflow.com/5c3a6378e76e088403f168d4/5c8057df4f71c1e19f5e15a6_pen-1-2%403x.png"
                height={80}
                alt="pen styling"
              />
            </div>
          </div>
          <div className="banner-img"></div>
        </div>
        <div className="about-content">
          <div className="content-text-parent">
            <img src={SnoopItDark} id="logo-img" alt="Snoopit logo" />
            <p id="about-snoopit">
              <strong>SnoopIt</strong>, is a convenient resource hub, crafted to
              centralise the articles for convenience. We take pride in our
              user-friendly, responsive interface with rich content. It's our
              modest contribution to help you to deepen your knowledge and
              furnish personal growth. Truly at our core, we embrace the notion
              that more we share knowledge, more we grow.
            </p>
            <p id="about-tagline">
              Let's collaborate on establishing a digital presence
            </p>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={pp}
                      alt="Avatar"
                      style={{ width: "300px", height: "300px" }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <Link
                      className="social-media-link"
                      to="https://www.linkedin.com/in/priyanka-panjabi-84496112b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon />
                    </Link>
                    <Link
                      className="social-media-link"
                      to="https://github.com/Priyanka-Panjabi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </Link>
                    <a
                      className="social-media-link"
                      href="mailto:priyanka.panjabi88@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <EmailIcon />
                    </a>
                  </div>
                </div>
              </div>
              <div id="person-details1">
                <p className="name">Priyanka Panjabi</p>
                <p className="about">
                  Fulltime keyboard masseur. Taking pleasure in frontend
                  development and enthusiastic about acquiring knowledge.
                </p>
                <p className="about">Frontend Developer @Wipro Ltd.</p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                marginTop: "50px"
              }}
            >
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={tan}
                      alt="Avatar"
                      style={{ width: "300px", height: "300px" }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <Link
                      className="social-media-link"
                      to="https://www.linkedin.com/in/tanmay-17886615b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon />
                    </Link>
                    <Link
                      className="social-media-link"
                      to="https://github.com/tanmayIntelli"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </Link>
                    <a
                      className="social-media-link"
                      href="mailto:tanmaypach15@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <EmailIcon />
                    </a>
                  </div>
                </div>
              </div>
              <div id="person-details2">
                <p className="name">Tanmay</p>
                <p className="about">
                  Seasoned Frontend Developer with over 4 yrs of experience.
                  Making healthcare accessible to all @Oracle Cerner. Specialize
                  in crafting immersive UIs and bringing creative web solutions
                  to life.
                </p>
                <p className="about">SDE-2 @ Oracle Cerner</p>
              </div>
            </div>

            <p id="about-endline">
              We are open for collaboration and discussions. Looking forward to
              receive a "Hello "from you
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutLg;
