import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as R from "../styles/pages/styledChatRequest";
import * as S from "../styles/pages/styledChatRequest";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import DetailCard from "../components/DetailCard";
import { PageContainer } from "../styles/common/styledConainer";
import { BackgroundOverlay } from "../styles/common/styledBackground";
import axios from "axios";

const Request = () => {
    const navigate = useNavigate();
    const [selectedUser, setSelectedUser] = useState(null);        // 프로필 정보
    const [selectedRequest, setSelectedRequest] = useState(null);  // 요청 정보 (id)
    const [requests, setRequests] = useState([]);
    const [messages, setMessages] = useState([]);
    const accessToken = localStorage.getItem("accessToken");

    const handleCardClick = async (req) => {
        console.log("user 객체:", req);

        if (!req.sender) {
            console.error("sender 없음");
            return;
        }

        try {
            const res = await axios.get(`/api/accounts/profile/user/${req.sender}/`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setSelectedUser(res.data);
            setSelectedRequest(req); // 요청 정보 저장
        } catch (err) {
            console.error("프로필 상세 조회 실패", err);
        }
    };

    const handleRespond = async (isAccepted) => {
        if (!selectedRequest || !selectedRequest.id) {
            console.error("선택된 쪽지 요청 ID가 없습니다.");
            return;
        }

        try {
            await axios.patch(
                `/api/dmessages/request/${selectedRequest.id}/respond/`,
                { is_accepted: isAccepted },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            alert(isAccepted ? "요청을 수락했습니다!" : "요청을 거절했습니다.");
            setSelectedUser(null);
            setSelectedRequest(null);

            // 수락/거절 후 리스트 갱신
            setRequests(prev => prev.filter(r => r.id !== selectedRequest.id));
        } catch (err) {
            console.error("응답 처리 실패", err);
            alert("요청 처리 중 문제가 발생했습니다.");
        }
    };

    const handleCloseDetail = () => {
        setSelectedUser(null);
        setSelectedRequest(null);
    };

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

    return (
        <PageContainer>
            <Header
                titleText="쪽지 요청"
                leftIcon="back"
                rightIcon="ring"
                onClickLeft={() => navigate(-1)}
                onClickRight={() => navigate("/notice")}
            />
            <R.SearchBar>
                <img
                    id="search"
                    src={`${process.env.PUBLIC_URL}/images/search.svg`}
                    alt="search"
                />
            </R.SearchBar>
            <R.Tabs>
                <R.TabWrapper>
                    <R.Tab active="false" onClick={() => navigate("/chat-list")}>
                        보관함 <R.Badge>{messages.length}</R.Badge>
                    </R.Tab>
                </R.TabWrapper>
                <R.TabWrapper>
                    <R.Tab active="true">
                        요청 <R.Badge>{requests.length}</R.Badge>
                    </R.Tab>
                </R.TabWrapper>
            </R.Tabs>
            <R.ReqWrapper>
                {requests.map((req, index) => (
                    <R.Item key={req.id || index}>
                        <R.ProfileImg>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/avatar.svg`}
                                alt="avatar"
                            />
                        </R.ProfileImg>
                        <R.Content>
                            <R.Info onClick={() => handleCardClick(req)}>
                                {req.sender_nickname} / {req.sender_major} {req.sender_year}
                            </R.Info>
                            <R.Del>
                                <img
                                    id="del"
                                    src={`${process.env.PUBLIC_URL}/images/trash.svg`}
                                    alt="delete"
                                />
                            </R.Del>
                        </R.Content>
                    </R.Item>
                ))}
            </R.ReqWrapper>

            <NavBar />

            {selectedUser && (
                <>
                    <S.BackgroundOverlay />
                    <DetailCard user={selectedUser} />
                    <S.ButtonGroup>
                        <S.Ok onClick={() => handleRespond(true)}>수락</S.Ok>
                        <S.Rej onClick={() => handleRespond(false)}>거절</S.Rej>
                    </S.ButtonGroup>
                </>
            )}
        </PageContainer>
    );
};

export default Request;
