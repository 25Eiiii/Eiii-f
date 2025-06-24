import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "./data.json"
import Match from './pages/Match';
import ChatList from './pages/ChatList';
import Request from './pages/ChatRequest';


function App() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(data);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Match dataList={dataList} />} />
        <Route path="/chat-list" element={<ChatList />}/>
        <Route path="/chat-request" element={<Request />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
