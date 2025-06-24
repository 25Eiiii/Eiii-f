
import { useNavigate } from "react-router-dom";
import * as M from "../styles/pages/styledMatch";
import MatchCard from "../components/MatchCard";
import DetailCard from "../components/DetailCard";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";


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
    <M.Container>
      <Header 
        titleText="즉석 밥약" 
        titleImg="meal"
        leftIcon="back"
        rightIcon="ring"
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
      {selectedUser && <M.BackgroundOverlay onClick={handleCloseDetail} />}

        
      {/* 상세 카드 */}
      {selectedUser && (
        <DetailCard user={selectedUser} onClose={handleCloseDetail} />
      )} 

      {selectedUser && (
      <M.ButtonGroup>
      <M.ApplyBtn>대화 신청</M.ApplyBtn>
      <M.ExtBtn>나가기</M.ExtBtn>
    </M.ButtonGroup>
      )}

    </>
    </M.Container>
  );
};


export default Match;
