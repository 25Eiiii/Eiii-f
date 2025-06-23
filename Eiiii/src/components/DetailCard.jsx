import React from "react";
import * as M from "../styles/styledDetailCard";

const DetailCard = ({ user, onClose }) => {
  return (
    <M.DetailCardWrapper>
      <M.Text>대화 신청을 해보세요!</M.Text>
      <M.ProfileImg src={user.img} />
      <M.Profile1>
        <M.Nickname>{user.nickname}</M.Nickname>
        <M.UserId>@{user.userId}</M.UserId>
      </M.Profile1>
      <M.Profile2>
        <M.Detail>{user.major}</M.Detail>
        <M.Detail>{user.grade}</M.Detail>
        <M.Detail>{user.gender}</M.Detail>
        <M.Detail>{user.mealType}</M.Detail>
        <M.Detail>{user.type}</M.Detail>
        <M.Detail>{user.goal}</M.Detail>
        <M.Detail>{user.fav}</M.Detail>
        <M.Detail>{user.msg}</M.Detail>
        <M.Detail>{user.type2}</M.Detail>
      </M.Profile2>

    </M.DetailCardWrapper>
  );
};

export default DetailCard;
