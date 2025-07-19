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
  const [matchList, setMatchList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDetailLoading, setIsDetailLoading] = useState(false);

  const accessToken = localStorage.getItem("access_token");

  // 매칭 리스트 불러오기
  useEffect(() => {
    const fetchMatchList = async () => {
      try {
        const res = await axios.get("api/accounts/match", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setMatchList(res.data);
      } catch(err) {
        console.error("매칭 리스트 불러오기 실패", err)
      }
    };

    fetchMatchList();
  }, [accessToken]);

  // 매칭 상세 카드 불러오기 
  const handleCardClick = async (user) => {
    try {
      setIsDetailLoading(true);
      const res = await axios.get(`/api/accounts/profile/${user.pk}/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setSelectedUser(res.data)
    } catch(err) {
      console.error("상세 카드 불러오기 실패", err);
    } finally {
      setIsDetailLoading(false);
    }
  };
    
  const handleCloseDetail = () => {
    setSelectedUser(null);
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
          {matchList.map((user, idx) => (
            <MatchCard
              key={idx}
              {...user}
              onClick={() => handleCardClick(user)}
            />
          ))}
        </M.CardWrapper>
        <NavBar></NavBar>
        <>
      {/* 배경 흐림 처리 */}
        {selectedUser && <BackgroundOverlay></BackgroundOverlay>}

        
      {/* 상세 카드 */}
      {selectedUser && ! isDetailLoading && (
        <DetailCard text="대화 신청을 해보세요!" user={selectedUser}  />
      )} 

      {isDetailLoading && <M.LoadingText>불러오는 중</M.LoadingText>}

      {selectedUser && (
      <M.ButtonGroup>
        <M.ApplyBtn onClick={handleCloseDetail}>대화 신청</M.ApplyBtn>
        <M.ExtBtn onClick={handleCloseDetail}>나가기</M.ExtBtn>
      </M.ButtonGroup>
      )}

    </>
    </PageContainer>
  );
};


export default Match;
