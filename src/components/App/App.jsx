import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import InfoPage from "../InfoPage/InfoPage";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/info" element={<InfoPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
