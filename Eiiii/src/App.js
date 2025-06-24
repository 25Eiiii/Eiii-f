import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "./data.json"
import Match from './pages/Match';
import Chat from './pages/Chat';


function App() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(data);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Match dataList={dataList} />} />
        <Route path="/chat" element={<Chat />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
