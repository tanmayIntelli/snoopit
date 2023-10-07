import React from "react";
import "./PostCardShimmer.css";
import { Box } from "@mui/material";

const PostCardShimmer = () => {
  return (
    <>
      <div className="shimmer-postcard-parent">
        {Array(9)
          .fill(0)
          .map((idx, val) => (
            <Box
              key={val}
              sx={{
                width: {
                  xs: "90vw",
                  sm: "90vw",
                  md: "30vw",
                  lg: "30vw"
                },
                height: {
                  xs: "40vw",
                  sm: "40vw",
                  md: "30vw",
                  lg: "30vw"
                }
              }}
              className="shimmer-card"
            >
              <div className="shimmer-card-img"></div>
              <div className="shimmer-card-text"></div>
            </Box>
          ))}
      </div>
    </>
  );
};

export default PostCardShimmer;
