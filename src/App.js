import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import SingleUser from './Components/SingleUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/:userId' element={<SingleUser/>}/>
         
      </Routes>
    </BrowserRouter>
  );
}

export default App;
