import React from "react";
import { SearchUtil } from "../search/search";
import { useNavigate } from "react-router-dom";
import { StringContext } from "../../../utility/StringContext";

export const Home = () => {
  const navigate = useNavigate();
  const { updateString } = React.useContext(StringContext);

  React.useEffect(() => {
    updateString("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value) {
      navigate("/articles", { state: { data: e.target.value } });
      return;
    }
  };
  return (
    <>
      <SearchUtil keydownHandler={handleKeyPress} path="home"/>
    </>
  );
};
