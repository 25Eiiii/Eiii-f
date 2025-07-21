import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import * as C from "../styles/pages/styledChatList"
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../styles/common/styledConainer";
import axios from "axios";

const ChatList = () => {
    const navigate = useNavigate()
    const [messages, setMessages] = useState([]);
    const [requests, setRequests] = useState([]);
    const accessToken = localStorage.getItem("accessToken");

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString("ko-KR", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });
    };


    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const res = await axios.get("/api/dmessages/accepted/", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                console.log("쪽지 보관함 응답:", res.data);
                setMessages(res.data);
            } catch (err) {
                console.error("보관함 목록 불러오기 실패", err);
            }
        };

        fetchMessages();
    }, []);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const res = await axios.get("/api/dmessages/request/received/", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                console.log("쪽지 요청 목록 응답:", res.data);
                setRequests(res.data);
            } catch (err) {
                console.error("쪽지 요청 목록 불러오기 실패", err);
            }
        };

        fetchRequests();
    }, []);

    return (
        <PageContainer>
            <Header
                titleText="쪽지 목록"
                leftIcon="back"
                rightIcon="ring"
                onClickLeft={() => navigate(-1)}
                onClickRight={() => navigate('/notice')}
            />
            <C.SearchBar>
                <img
                    id="search"
                    src={`${process.env.PUBLIC_URL}/images/search.svg`}
                    alt="search"
                />
            </C.SearchBar>
            <C.Tabs>
                <C.TabWrapper>
                    <C.Tab active="true">
                        보관함 <C.Badge>{messages.length}</C.Badge>
                    </C.Tab>
                </C.TabWrapper>
                <C.TabWrapper>
                    <C.Tab active="false" onClick={() => navigate('/chat-request')}>
                        요청 <C.Badge>{requests.length}</C.Badge>
                    </C.Tab>
                </C.TabWrapper>
            </C.Tabs>

            <C.List>
                {messages.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '20px', color: '#aaa' }}>
                        채팅방이 생성되었습니다! 먼저 말을 걸어보세요 😊
                    </div>
                ) : (
                    messages.map((msg, index) => (
                        <C.Item key={index}
                            onClick={() => navigate(`/chat/${msg.chatroom_id}`)}
                            style={{ cursor: "pointer" }} // 마우스 포인터 바뀌게
                        >
                            <C.Profile>
                                <img src={msg.img} alt="pic" />
                            </C.Profile>
                            <C.Text>
                                <C.Name>{msg.sender_nickname}</C.Name>
                                <C.SubInfo>
                                    {msg.sender_major} {msg.sender_grade} | {formatDate(msg.timestamp)}
                                </C.SubInfo>
                                <C.Msg>{msg.message}</C.Msg>
                            </C.Text>
                        </C.Item>
                    ))
                )}
            </C.List>


            <NavBar></NavBar>
        </PageContainer>
    )
}

export default ChatList