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
import Test from "./pages/Test";
import Test1 from "./pages/Test1";
import Test3 from "./pages/Test3";
import Test2 from "./pages/Test2";
import Home from "./pages/Home";
import Test5 from "./pages/Test5";
import Test4 from "./pages/Test4";
import Test6 from "./pages/Test6";
import Test7 from "./pages/Test7";
import Test8 from "./pages/Test8";
import TestComplete from "./pages/TestComplete";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Chat from "./pages/Chatting"

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
        <Route path="/community/:category" element={<Community />}/>
        <Route path="/community-write" element={<Write />}/>
        <Route path="/community-detail/:pk" element={<Detail />}/>
        <Route path="/plan" element={<Plan />}/>
        <Route path="/scrap" element={<Scrap />}/>
        <Route path="/like" element={<Like />}/>
        <Route path="/my-comments" element={<MComments />}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/test/step3" element={<Test3/>}/>
        <Route path="/test/step2" element={<Test2/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/test/step5" element={<Test5/>}/>
        <Route path="/test/step4" element={<Test4/>}/>
        <Route path="/test/step6" element={<Test6/>}/>
        <Route path="/test/step7" element={<Test7/>}/>
        <Route path="/test/step8" element={<Test8/>}/>
        <Route path="/test/complete" element={<TestComplete/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profileEdit" element={<ProfileEdit/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/test/step1" element={<Test1/>}/>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/chat/:chatroomId" element={<Chat />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
