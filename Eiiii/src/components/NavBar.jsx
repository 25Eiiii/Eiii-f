import React from "react";
import { useNavigate } from "react-router-dom";
import * as N from "../styles/components/styledNavBar";

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <N.Container>
        <N.Line></N.Line>
        <N.Group>
            <N.Icon onClick={() => navigate("/home")}>
                <img
                    id="home"
                    src={`${process.env.PUBLIC_URL}/images/home.svg`}
                    alt="home"
                />
            </N.Icon>
            <N.Icon onClick={() => navigate("/chat-list")}>
                <img
                    id="chat"
                    src={`${process.env.PUBLIC_URL}/images/chat.svg`}
                    alt="chat"
                />  
            </N.Icon>
            <N.Icon onClick={() => navigate("/community/mentoring")}>
                <img
                    id="user-group"
                    src={`${process.env.PUBLIC_URL}/images/user-group.svg`}
                    alt="user-group"
                />
                </N.Icon>
            <N.Icon onClick={() => navigate("/scrap")}>
                <img
                    id="star"
                    src={`${process.env.PUBLIC_URL}/images/star.svg`}
                    alt="star"
                />
            </N.Icon>
            <N.Icon onClick={() => navigate("/profile")}>
                <img
                    id="user"
                    src={`${process.env.PUBLIC_URL}/images/user.svg`}
                    alt="user"
                />
            </N.Icon>
        </N.Group>
    </N.Container>
  );
};

export default NavBar;
