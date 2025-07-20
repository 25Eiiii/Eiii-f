import React, { useMemo } from "react";
import * as M from "../styles/pages/styledMatch"; 

const MatchCard = ({ user, onClick }) => {

  // 프로필을 랜덤 이미지로 설정
  const randomImg = useMemo(() => {
    const imgList = [
      "/images/profile1.svg",
      "/images/profile2.svg"
    ];
    const randomIndex = Math.floor(Math.random()*imgList.length);
    return imgList[randomIndex];
  }, []);

  return (
    <M.Card onClick={() => onClick(user, randomImg)}>
      <M.ProfileImg>
        <img src={randomImg} alt="profile" />
      </M.ProfileImg>
      <M.InfoWrapper>
        <M.Profile1>
          <M.Nickname>{user.nickname}</M.Nickname>
          <M.UserId>@{user.username}</M.UserId>
        </M.Profile1>
        <M.Profile2>
          <M.Detail>{user.dining_style}</M.Detail>
          <M.Detail>{user.meal_purpose}</M.Detail>
          <M.Detail>{user.eating_speed}</M.Detail>
          <M.Detail>{user.dining_style}</M.Detail>
        </M.Profile2>
      </M.InfoWrapper>
    </M.Card>
  );
};


export default MatchCard;
