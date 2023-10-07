import React, { Suspense, lazy } from "react";
import Layout from "./components/layout/Layout";
import ThemeProvider from "./utility/themeContextProvider";
import { StringProvider } from "./utility/StringContext";
import Main from "./components/layout/main/Main";
import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";

function App() {
  const ArticlePage = lazy(() =>
    import("./components/layout/article/articlePage")
  );
  const Articles = lazy(() => import("./components/layout/articles/Articles"));
  const AboutUs = lazy(() => import("./components/About us/AboutUs"));
  const Error404 = lazy(() => import("./components/errorPage/error404"));
  return (
    <ThemeProvider>
      <StringProvider>
        <HashRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Main />
                </Layout>
              }
            />
            <Route
              path="/articles"
              element={
                <>
                  <Suspense fallback={<div>Loading please wait...</div>}>
                    <Articles />
                    <Footer />
                  </Suspense>
                </>
              }
            />
            <Route
              path="/article/:id"
              element={
                <>
                  <Suspense fallback={<div>Loading please wait...</div>}>
                    <ArticlePage />
                    <Footer />
                  </Suspense>
                </>
              }
            />
            <Route
              path="/AboutUs"
              element={
                <Suspense fallback={<div>Loading please wait...</div>}>
                  <AboutUs />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<div>Loading please wait...</div>}>
                  <Error404 />
                </Suspense>
              }
            />
          </Routes>
        </HashRouter>
      </StringProvider>
    </ThemeProvider>
  );
}

export default App;
