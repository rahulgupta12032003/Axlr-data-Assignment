import "./App.css";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Location from "./Pages/Distance";
// import Background from './components/Background';

function App() {
  return (
    <div className="App">
      {/* <Background /> */}
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </div>
  );
}

export default App;
