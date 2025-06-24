
import { useNavigate } from "react-router-dom";
import * as M from "../styles/pages/styledMatch";
import MatchCard from "../components/MatchCard";
import DetailCard from "../components/DetailCard";
import React, { useState } from "react";
import NavBar from "../components/NavBar";


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
      <M.Box>
        <M.Btn>
            <img
                id="back"
                src={`${process.env.PUBLIC_URL}/images/back.svg`}
                alt="back"
            />
        </M.Btn>
        <M.Title>
            즉석 밥약
            <img 
                id="meal"
                src={`${process.env.PUBLIC_URL}/images/meal.svg`}
                alt="meal"
            />
        </M.Title>
        <M.Btn>
            <img
                id="ring"
                src={`${process.env.PUBLIC_URL}/images/ring.svg`}
                alt="ring"
            />
        </M.Btn>
      </M.Box>
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
        <DetailCard text="대화 신청을 해보세요!" user={selectedUser} onClose={handleCloseDetail} />
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
