import React from "react";
import "./aboutSm.css";
import SnoopItDark from "../../images/logo-aboutUS.png";
import UserCard from "./UserCard";

const AboutSm = () => {
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

  return (
    <>
      <div
        style={{
          backgroundColor: "black"
        }}
        ref={containerRef}
      >
        <div className="about-banner">
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
            <UserCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSm;
