import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'></Route>
        <Route path='/myKeyWord'></Route>
        <Route path='/idealKeyWord'></Route>
        <Route path='/matching'></Route>
        <Route path='/result'></Route>
        <Route path='/end'></Route>
      </Routes>
    </div>
  );
}

export default App;
