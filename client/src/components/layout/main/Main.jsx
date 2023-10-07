import React from "react";
import styles from "./Main.module.scss";
import { Home } from "../home";
import ThemeContext from "../../../utility/themeContext";
import { TypeAnimation } from "react-type-animation";

export default function Main() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: theme ? "#D1B3AA" : null }}
    >
      <TypeAnimation
        sequence={[
          "Welcome to Front-End Brilliance",
          1500,
          "Elevate Your Web Design Game",
          1500,
          "Empowering Development Experience",
          1500,
          "Explore the intersection of Creativity and Code",
          1500,
          "Designing tomorrow's web, Today",
          1500
        ]}
        wrapper="span"
        speed={60}
        className={styles.typing}
        repeat={Infinity}
      />
      <Home />
    </div>
  );
}
