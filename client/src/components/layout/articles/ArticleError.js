import React from "react";
import styles from "./Article.module.scss";
import { red } from "@mui/material/colors";

const ArticleError = () => {
  return (
    <div className={styles.articles_error_parent}>
      <div className={styles.articles_error}>
        <p className={styles.error_text}>
          Oops! We are working to fix this error.
        </p>
        <img
          src="https://png.pngtree.com/png-vector/20220710/ourmid/pngtree-robot-with-broken-leg-in-plaster-png-image_5693680.png"
          alt="500 error"
        />
      </div>
    </div>
  );
};

export default ArticleError;
