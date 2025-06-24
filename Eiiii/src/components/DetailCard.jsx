import React from "react";
import * as M from "../styles/components/styledDetailCard";

const DetailCard = ({ text, user, onClose }) => {
  return (
    <M.DetailCard>
      <M.Text>{text}</M.Text>
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
    </M.DetailCard>
  );
};

export default DetailCard;
