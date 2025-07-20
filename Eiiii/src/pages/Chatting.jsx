import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import * as C from "../styles/pages/styledChatting";
import { PageContainer } from "../styles/common/styledConainer";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      from: "other",
      text: "안녕하세요 마라탕이랑 꿔바로우 같이 먹고 싶은데 오늘 저녁으로 드시는 거 어떠세요?",
      time: "00:12",
    },
  ]);
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = {
      from: "me",
      text: input,
      time: "00:17",
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <PageContainer>
      {/* 헤더 */}
      <Header
        titleText="쪽지"
        leftIcon="back"
        onClickLeft={() => navigate(-1)}
        onClickRight={() => navigate("/notice")}
      />

      {/* 시스템 메시지 */}
      <C.SystemMessage>채팅이 시작되었습니다. 약속을 잡아보세요!</C.SystemMessage>

      {/* 날짜 + 약속잡기 */}
      <C.ChatDateRow>
        <C.ChatDate>2025.04.01</C.ChatDate>
        <C.AppointmentButton>약속잡기</C.AppointmentButton>
      </C.ChatDateRow>

      {/* 메시지 목록 */}
      <C.MessageList>
  {messages.map((msg, idx) => (
    <C.MessageRow key={idx} from={msg.from}>
      {msg.from === "other" ? (
        <>
          <C.Profile>
            <img src={`${process.env.PUBLIC_URL}/images/search.svg`} alt="profile" />
          </C.Profile>
          <C.MessageBubble>
            <span>{msg.text}</span>
          </C.MessageBubble>
          <C.MessageTime>{msg.time}</C.MessageTime>
        </>
      ) : (
        <>
          <C.MessageTime>{msg.time}</C.MessageTime>
          <C.MessageBubble>
            <span>{msg.text}</span>
          </C.MessageBubble>
          <C.Profile>
            <img src={`${process.env.PUBLIC_URL}/images/search.svg`} alt="profile" />
          </C.Profile>
        </>
      )}
    </C.MessageRow>
  ))}
</C.MessageList>


      {/* 입력창 */}
      <C.ChatInputRow>
        <C.CameraButton>
            <img 
            src={`${process.env.PUBLIC_URL}/images/cam.svg`} alt="cam"
            />
        </C.CameraButton>
        <C.ChatInput
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <C.SendButton onClick={handleSend}>
        <img 
            src={`${process.env.PUBLIC_URL}/images/send.svg`} alt="send"
            />
        </C.SendButton>
      </C.ChatInputRow>
    </PageContainer>
  );
};

export default Chat;
