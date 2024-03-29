import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/main";
import MyKeyWordPage from "./pages/myKeyWordPage/index";
import Question07 from "./pages/myKeyWordPage/animal/animal";
import IdealKeyWordPage from "./pages/idealKeyWordPage/idealKeyWord";
import MatchingPage from "./pages/matchingPage/matching";
import ResultPage from "./pages/resultPage/result";
import EndPage from "./pages/endPage/end";
import KeywordQuestion from "./pages/myKeyWordPage/index";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/myKeyWord" element={<MyKeyWordPage />}></Route>
        <Route path="/myKeyWord/animal" element={<Question07 />}></Route>
        <Route path="/mykeyWord/:id" element={<KeywordQuestion />}></Route>
        <Route path="/idealKeyWord" element={<IdealKeyWordPage />}></Route>
        <Route path="/matching" element={<MatchingPage />}></Route>
        <Route path="/result" element={<ResultPage />}></Route>
        <Route path="/end" element={<EndPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
