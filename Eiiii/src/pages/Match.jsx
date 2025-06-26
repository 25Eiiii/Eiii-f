import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/pages/styledMatch";
import MatchCard from "../components/MatchCard";
import DetailCard from "../components/DetailCard";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { PageContainer } from "../styles/common/styledConainer";
import { BackgroundOverlay } from "../styles/common/styledBackground";


const Match = ({ dataList }) => {
  const navigate = useNavigate();
    const [selectedUser, setSelectedUser] = useState(null);

    const handleCardClick = (user) => {
        setSelectedUser(user);
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
          {dataList.map((user, idx) => (
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
      {selectedUser && (
        <DetailCard text="대화 신청을 해보세요!" user={selectedUser}  />
      )} 

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
