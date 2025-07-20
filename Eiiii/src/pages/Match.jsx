import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/pages/styledMatch";
import MatchCard from "../components/MatchCard";
import DetailCard from "../components/DetailCard";
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { PageContainer } from "../styles/common/styledConainer";
import { BackgroundOverlay } from "../styles/common/styledBackground";
import axios from "axios";


const Match = ({ dataList }) => {
  const navigate = useNavigate();
  const [matchList, setMatchList] = useState([]); // 매치 카드
  const [selectedUser, setSelectedUser] = useState(null); // 유저
  const [isDetailLoading, setIsDetailLoading] = useState(false); // 상세 카드 로딩
  const [selectedImg, setSelectedImg] = useState(null);

  const accessToken = localStorage.getItem("accessToken");

  // 매칭 리스트 불러오기
  useEffect(() => {
    const fetchMatchList = async () => {
      try {
        const res = await axios.get("/api/accounts/match/", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        const myRes = await axios.get(`/api/accounts/profile/me`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        const myProfile = { ...myRes.data, isMe: true }

        const matchRes = await axios.get("/api/accounts/match/", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        const matchList = [myProfile, ...matchRes.data].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

        setMatchList(matchList);
      } catch (err) {
        console.error("매칭 리스트 불러오기 실패", err);

      }
    };

    fetchMatchList();
  }, [accessToken]);

  // 매칭 상세 카드 불러오기 
  const handleCardClick = async (user, image) => {
    try {
      // debugging code
      console.log(user);
      setIsDetailLoading(true);
      const res = await axios.get(`/api/accounts/profile/${user.id}/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setSelectedUser(res.data)
      setSelectedImg(image)
    } catch (err) {
      console.error("상세 카드 불러오기 실패", err);
    } finally {
      setIsDetailLoading(false);
    }
  };

  const handleCloseDetail = () => {
    setSelectedUser(null);
  };

  const handleApplyChat = async () => {
    if (!selectedUser || !selectedUser.user_id) {
      console.error("유효한 사용자 정보가 없습니다.");
      return;
    }

    try {
      const res = await axios.post(
        "/api/dmessages/request/",
        { receiver: selectedUser.user_id },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      alert("대화 신청이 완료되었습니다!");
      setSelectedUser(null); // 상세 카드 닫기
    } catch (err) {
      console.error("대화 신청 실패", err);
      alert("대화 신청에 실패했습니다.");
    }
  };


  return (
    <PageContainer>
      <Header
        titleImg="meal"
        titleText="즉석 밥약"
        rightIcon="ring"
        onClickLeft={() => navigate(-1)}
        onClickRight={() => navigate("/notice")}
      />
      <M.CardWrapper>
        {matchList.map((user) => (
          <MatchCard user={user} onClick={handleCardClick} />
        ))}
      </M.CardWrapper>
      <NavBar></NavBar>
      <>
        {/* 배경 흐리게 */}
        {selectedUser && <BackgroundOverlay></BackgroundOverlay>}


        {/* 상세 프로필 카드 모달 창 */}
        {selectedUser && !isDetailLoading && (
          <DetailCard user={selectedUser} img={selectedImg} />
        )}

        {isDetailLoading && <M.LoadingText>불러오는 중</M.LoadingText>}

        {selectedUser && (
          <M.ButtonGroup>
            <M.ApplyBtn onClick={handleApplyChat}>대화 신청</M.ApplyBtn>
            <M.ExtBtn onClick={handleCloseDetail}>나가기</M.ExtBtn>
          </M.ButtonGroup>
        )}

      </>
    </PageContainer>
  );
};


export default Match;
