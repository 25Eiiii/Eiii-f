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
import Plan from './pages/Plan';
import Scrap from './pages/Scrap';
import Like from './pages/Like';
import MComments from './pages/MyComments';
import Login from "./pages/Login";
import Test from "./pages/Test";
import Login1 from "./pages/Login1";
import Home from "./pages/Home";

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
        <Route path="/plan" element={<Plan />}/>
        <Route path="/scrap" element={<Scrap />}/>
        <Route path="/like" element={<Like />}/>
        <Route path="/my-comments" element={<MComments />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/login1" element={<Login1/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
