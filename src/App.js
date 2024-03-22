import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <div>
        <h1 className="text-center display-1 my-3">DeWeather</h1>
        <h3 className="text-center display-5">Previsioni meteo in tempo reale</h3>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
