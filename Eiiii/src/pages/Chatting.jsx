import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import * as C from "../styles/pages/styledChatting";
import { PageContainer } from "../styles/common/styledConainer";
import axios from "axios";

const Chat = () => {
  const { chatroomId } = useParams(); // URL에서 /chat/:chatroomId
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const accessToken = localStorage.getItem("accessToken");
  const myUserId = Number(localStorage.getItem("userId") || 0);
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get(`/api/dmessages/chatrooms/${chatroomId}/messages/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log("내 ID:", myUserId);
        console.log("채팅 메시지 응답:", res.data);
        setMessages(res.data);
      } catch (error) {
        console.error("채팅 메시지 조회 실패", error);
      }
    };
    fetchMessages();
  }, [chatroomId]);


  const handleSend = async () => {
    if (!input.trim()) return;
    console.log("보내는 사람 ID:", myUserId);
    console.log("보내는 채팅방 ID:", chatroomId);
    try {
      const res = await axios.post(
        `/api/dmessages/chatrooms/${chatroomId}/messages/send/`,
        {
          content: input.trim(),
          is_request: false,

        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      console.log("보내는 메시지 내용:", input.trim());
      console.log("보내는 chatroomId:", chatroomId);
      setMessages((prev) => [...prev, res.data]);
      setInput("");
    } catch (error) {
      console.error("쪽지 전송 실패", error);
    }
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
  <C.ChatDate>
    {messages.length > 0 &&
      new Date(messages[0].timestamp).toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
  </C.ChatDate>
  <C.AppointmentButton>약속잡기</C.AppointmentButton>
</C.ChatDateRow>

      {/* 메시지 목록 */}
      <C.MessageList>
        {messages.map((msg, idx) => {
          const isMine = msg.sender === myUserId;

          return (
            <C.MessageRow key={idx} from={isMine ? "me" : "other"}>
              {isMine ? (
                <>
                  {/* 내 메시지 */}
                  <C.MessageTime>{formatTime(msg.timestamp)}</C.MessageTime>
                  <C.MessageBubble>
                    <span>{msg.content}</span>
                  </C.MessageBubble>
                  <C.Profile>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/profile2.svg`}
                      alt={msg.sender_nickname}
                    />
                  </C.Profile>
                </>
              ) : (
                <>
                  {/* 상대 메시지 */}
                  <C.Profile>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/profile1.svg`}
                      alt={msg.sender_nickname}
                    />
                  </C.Profile>
                  <C.MessageBubble>
                    <span>{msg.content}</span>
                  </C.MessageBubble>
                  <C.MessageTime>{formatTime(msg.timestamp)}</C.MessageTime>
                </>
              )}
            </C.MessageRow>
          );
        })}
      </C.MessageList>



      {/* 입력창 */}
      <C.ChatInputRow>
        <C.CameraButton>
          <img src={`${process.env.PUBLIC_URL}/images/cam.svg`} alt="cam" />
        </C.CameraButton>
        <C.ChatInput
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <C.SendButton onClick={handleSend}>
          <img src={`${process.env.PUBLIC_URL}/images/send.svg`} alt="send" />
        </C.SendButton>
      </C.ChatInputRow>
    </PageContainer>
  );
};

export default Chat;
