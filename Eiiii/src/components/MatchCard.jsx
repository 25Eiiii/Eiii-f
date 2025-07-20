import React from "react";
import * as M from "../styles/pages/styledMatch"; 

const MatchCard = ({ user, onClick }) => {
  return (
    <M.Card onClick={onClick}>
      <M.ProfileImg>
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
