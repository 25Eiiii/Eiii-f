import React from "react";
import * as M from "../styles/pages/styledMatch"; 

const MatchCard = ({ img, nickname, userId, major, grade, gender, mealType, onClick }) => {
  return (
    <M.Card onClick={onClick}>
      <M.ProfileImg src={img} alt="캐릭터" />
      <M.InfoWrapper>
        <M.Profile1>
            <M.Nickname>{nickname}</M.Nickname>
            <M.UserId>@{userId}</M.UserId>
        </M.Profile1>
        <M.Profile2>
        <M.Detail>{major}</M.Detail>
        <M.Detail>{grade}</M.Detail>
        <M.Detail>{gender}</M.Detail>
        <M.Detail>{mealType}</M.Detail>
        </M.Profile2>
      </M.InfoWrapper>
    </M.Card>
  );
};

export default MatchCard;
