import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import * as L from "../styles/pages/styledLogin";

const Main = () =>{
    const navigate = useNavigate(); 
    const [showLogin,setShowLogin] = useState(false);

    const [id,setId] = useState("");
    const [password,setPassword] = useState("");

    const goLogin = () => {
        navigate(`/test`)
    }
    const goSignup =() => {
        navigate(`/signup`)
    }

    if(!showLogin){
        return(
            <L.Container onClick={()=>setShowLogin(true)}>
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

    return(
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
                onChange = {(e) =>setId(e.target.value)}
                placeholder="아이디"
            />
            <L.Password
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
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