import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPageConatainer from "./components/MainpageContainer.jsx";
import RentalContainer from "./components/rental/RentalContainer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPageConatainer />} />
        <Route path="/rental" element={<RentalContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
