import React, { useContext } from "react";
import ThemeContext from "../../../utility/themeContext";
import styles from "./Heading.module.scss";

export default function Heading({ text }) {
  const { theme } = useContext(ThemeContext);
  return (
    <h2 className={theme ? styles.dark : styles.light}>
      {text}
    </h2>
  );
}
