import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "./data.json"
import Match from './pages/Match';
import ChatList from './pages/ChatList';
import Request from './pages/ChatRequest';
import Notice from './pages/Notice';
import Community from './pages/Community';
import Write from './pages/Write';
import Detail from './pages/CmDetail';


function App() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(data);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/match" element={<Match dataList={dataList} />} />
        <Route path="/chat-list" element={<ChatList />}/>
        <Route path="/chat-request" element={<Request />}/>
        <Route path="/notice" element={<Notice />}/>
        <Route path="/community" element={<Community />}/>
        <Route path="/community-write" element={<Write />}/>
        <Route path="/community-detail" element={<Detail />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
