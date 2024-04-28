import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/main";
import MyKeyWordPage from "./pages/myKeyWordPage/index";
import IdealKeyWordPage from "./pages/idealKeyWordPage/idealKeyWord";
import MatchingPage from "./pages/matchingPage/matching";
import EndPage from "./pages/endPage/end";
import KeywordQuestion from "./pages/myKeyWordPage/index";
import { data } from "./data";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/main" element={<MainPage data={data} />}></Route>
        <Route
          path="/mykeyWord/:id"
          element={<KeywordQuestion data={data} />}
        ></Route>
        <Route
          path="/idealKeyWord/:id"
          element={<IdealKeyWordPage data={data} />}
        ></Route>
        <Route path="/matching" element={<MatchingPage data={data} />}></Route>
        <Route path="/end" element={<EndPage data={data} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
