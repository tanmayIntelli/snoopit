import React from "react";
import { styled } from "@mui/material/styles";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StringContext } from "../../../utility/StringContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  border: "2px solid #000000",
  boxShadow: "0 0 10px #383838",
  backgroundColor: "rgba(255,255,255,0.73)",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0
}));

const StyledInputBase = styled(InputBase)(({ theme, path}) => ({
  width:"100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    cursor: "pointer",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: path?"40ch":"",
      "&:focus": {
        width: path?"60ch":""
      }
    }
  }
}));

export const SearchUtil = ({ keydownHandler, path }) => {
  const [searchStr, setSearchStr] = React.useState("");
  const { sharedString, updateString } = React.useContext(StringContext);
  const handleChange = (e) => {
    setSearchStr(e.target.value);
    updateString(e.target.value);
  };

  return (
    <Search path={path}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={sharedString}
        autoFocus={true}
        placeholder="Search…"
        inputProps={{ "aria-label": "Search blogs" }}
        onChange={(e) => handleChange(e)}
        onKeyDown={keydownHandler}
        path = {path}
      />
    </Search>
  );
};
