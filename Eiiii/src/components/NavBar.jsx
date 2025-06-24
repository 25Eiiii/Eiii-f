import React from "react";
import * as N from "../styles/components/styledNavBar";

const NavBar = () => {
  return (
    <N.Container>
        <N.Line></N.Line>
        <N.Group>
            <N.Icon>
                <img
                    id="home"
                    src={`${process.env.PUBLIC_URL}/images/home.svg`}
                    alt="home"
                />
            </N.Icon>
            <N.Icon>
                <img
                    id="chat"
                    src={`${process.env.PUBLIC_URL}/images/chat.svg`}
                    alt="chat"
                />  
            </N.Icon>
            <N.Icon>
                <img
                    id="user-group"
                    src={`${process.env.PUBLIC_URL}/images/user-group.svg`}
                    alt="user-group"
                />
                </N.Icon>
            <N.Icon>
                <img
                    id="star"
                    src={`${process.env.PUBLIC_URL}/images/star.svg`}
                    alt="star"
                />
            </N.Icon>
            <N.Icon>
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
