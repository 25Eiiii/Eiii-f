import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "./data.json"
import Match from './pages/Match';


function App() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(data);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Match dataList={dataList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
