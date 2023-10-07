import React, { useState } from "react";
import { PostCard } from "../../postcard";
import { callService } from "../../../utility/common";
import Heading from "../heading/Heading";
import styles from "./PopularPost.module.scss";

export default function PopularPost() {
  const [popularArticle, setPopularArticle] = useState([]);

  React.useEffect(() => {
    callService("/articles?type=popular").then((article) => {
      setPopularArticle(article);
    });
  }, []);

  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <Heading text={"TRENDY POST"} />
      <PostCard
        type="popular"
        articles={popularArticle}
        styleCardWrapper={styles.cardWrapper}
      />
    </div>
  );
}
