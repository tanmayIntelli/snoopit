import React, { useState, useEffect, useContext } from "react";
import { Header } from "../header";
import { PostCard } from "../../postcard";
import { callService } from "../../../utility/common";
import { useDispatch, useSelector } from "react-redux";
import { getArticles, getSearchArticles } from "../../../rtk/articlesSlice";
import styles from "./Article.module.scss";
import { useLocation } from "react-router-dom";
import { StringContext } from "../../../utility/StringContext";
import { Pagination, Stack } from "@mui/material";
import { SearchUtil } from "../search/search";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";
import ArticleError from "./ArticleError";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Articles({ fromPath }) {
  const [pageCount, setPageCount] = useState(0);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showProgressBar, setProgressBar] = useState(false);
  const [shouldCallAPI, setShouldCallAPI] = useState(true);
  const [currPage, setCurrPage] = React.useState(0);
  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const allArticles = useSelector(({ articles }) => {
    return articles.articles;
  });
  const { sharedString } = useContext(StringContext);

  const searchApi = (searchString) => {
    let urlToCall;
    if (searchString) {
      urlToCall = `/search?str=${searchString}`;
    } else {
      urlToCall = `/search?str=${location.state.data}`;
    }
    callService(urlToCall)
      .then((articles) => {
        setShowError(false);
        if (articles.length) {
          dispatch(getSearchArticles(articles));
          setPageCount(Math.ceil(articles.length / 6));
          setProgressBar(false);
        } else {
          setShowSnackbar(true);
          callService(`/articles?count=true`)
            .then((count) => {
              setShowError(false);
              setProgressBar(false);
              return setPageCount(Math.ceil(count / 6));
            })
            .catch(() => setShowError(true));
          getMoreArticles();
        }
        setCurrPage(1);
      })
      .catch((err) => {
        setShowError(true);
        console.log("Error:", err);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setProgressBar(true);
      searchApi(e.target.value);
      setShouldCallAPI(true);
      return;
    } else if (e.key === "Enter") {
      if (shouldCallAPI) {
        setProgressBar(true);
        getMoreArticles();
        callService(`/articles?count=true`)
          .then((count) => {
            setShowError(false);
            setProgressBar(false);
            setCurrPage(0 + 1);
            return setPageCount(Math.ceil(count / 6));
          })
          .catch(() => {
            setShowError(true);
          });
      }
      setShouldCallAPI(false);
    }
  };

  useEffect(() => {
    if (sharedString && location?.state?.data) {
      //TODO call search api with the string in location.state.data
      searchApi();
    } else {
      if (!fromPath) {
        callService(`/articles?count=true`)
          .then((count) => {
            setShowError(false);
            setProgressBar(false);
            return setPageCount(Math.ceil(count / 6));
          })
          .catch(() => {
            setShowError(true);
          });
      }
      getMoreArticles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMoreArticles = (page = 0) => {
    callService(`/articles?page=${page}${fromPath ? "&limit=3" : ""}`)
      .then((articles) => {
        setShowError(false);
        if (articles.length) {
          dispatch(getArticles(articles));
        }
        setProgressBar(false);
      })
      .catch(() => setShowError(true));
    setCurrPage(page + 1);
  };

  const handleClose = () => {
    setShowSnackbar(false);
  };

  return (
    <div>
      {fromPath ? (
        <>
          {allArticles && (
            <div className={styles.allCardsContainer}>
              <PostCard
                articles={allArticles}
                styleCard={styles.styleCard}
                styleCardWrapper={styles.styleCardWrapper}
              />
            </div>
          )}
        </>
      ) : (
        <>
          <Header />
          {showError ? (
            <ArticleError />
          ) : (
            <>
              <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={showSnackbar}
                autoHideDuration={3000}
                onClose={handleClose}
              >
                <Alert severity="error" sx={{ width: "100%" }}>
                  No result found!
                </Alert>
              </Snackbar>
              <div className={styles.main}>
                <div className={styles.searchBar}>
                  <SearchUtil keydownHandler={handleKeyPress} />
                </div>
                {showProgressBar && (
                  <LinearProgress
                    style={{ margin: "10px", padding: "2px 10px" }}
                    color="secondary"
                  />
                )}
                <div className={styles.allCardsContainer}>
                  {console.log("dfdsf", allArticles)}
                  <PostCard
                    articles={allArticles}
                    styleCard={styles.styleCard}
                    styleCardWrapper={styles.styleCardWrapper}
                  />
                </div>
                <Stack spacing={2}>
                  <Pagination
                    count={pageCount}
                    color="secondary"
                    onChange={(evt, page) => getMoreArticles(page - 1)}
                    className={styles.paginate}
                    size="large"
                    page={currPage}
                  />
                </Stack>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
