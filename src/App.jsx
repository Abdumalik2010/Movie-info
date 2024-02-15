import { Header, Footer } from "./Components/index";
import { HomePage, AboutPage, InfoPage } from "./pages/index";
import { Routes } from "react-router";
import { Route } from "react-router";
import "./style.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<InfoPage />} path="/about/:id" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
