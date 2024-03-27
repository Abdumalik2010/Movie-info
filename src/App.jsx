import { Header, Footer } from "./Components/index";
import { HomePage, MoviePage, InfoPage, SearchPage } from "./pages/index";
import { Routes } from "react-router";
import { Route } from "react-router";
import "./style.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<MoviePage />} path="/movie" />
        <Route element={<InfoPage />} path="/about/:id" />
        <Route element={<SearchPage />} path="/search" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
