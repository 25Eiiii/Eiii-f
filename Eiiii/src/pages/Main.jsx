import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/pages/styledLogin";
import axios from "axios";

const Main = () => {
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const goLogin = async () => {
        try {
            const response = await axios.post(
                "/api/accounts/login/",
                {
                    "username": id,
                    "password": password
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            localStorage.setItem("accessToken", response.data.access);
            localStorage.setItem("refreshToken", response.data.refresh);
            localStorage.setItem("userId", response.data.user_id);

            const hasProfile = await axios.get(
                "/api/accounts/profile/me/",
                {
                    headers: {
                        Authorization: `Bearer ${response.data.access}`,
                        "Content-Type": "application/json"
                    }
                },
            );

            if (hasProfile.status === 200) {
                navigate(`/home`);
            }

        } catch (error) {
            if (error.response.status === 401)
                alert("아이디 또는 비밀번호가 올바르지 않습니다.");
            else if (error.response.status === 500)
                navigate(`/test`);
        }

    }
    const goSignup = () => {
        navigate(`/signup`)
    }

    if (!showLogin) {
        return (
            <L.Container onClick={() => setShowLogin(true)}>
                <L.Logo>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/biglogo.svg`}
                        alt="logo"
                        width="148px"
                    />
                </L.Logo>
            </L.Container>
        );
    }

    return (
        <L.Container>
            <L.Logo1>
                <img
                    src={`${process.env.PUBLIC_URL}/images/logotext.svg`}
                    alt="logo"
                    width="135px"
                />
            </L.Logo1>
            <L.Id
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="아이디"
            />
            <L.Password
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
            />
            <L.LoginBtn onClick={goLogin}>
                밥짝 로그인
            </L.LoginBtn>
            <L.SignUp onClick={goSignup}>
                회원가입
            </L.SignUp>
        </L.Container>

    );
};
export default Main;