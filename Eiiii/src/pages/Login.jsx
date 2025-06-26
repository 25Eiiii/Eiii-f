import React from "react";
import {useNavigate} from "react-router-dom";
import * as L from "../styles/pages/styledLogin";

const Login = () =>{
    const navigate = useNavigate();
    const goLogin = () =>{
        navigate(`/login1`);
    }
    return(
        <L.Container onClick={goLogin}>
            <L.Logo>
                <img
                    src={`${process.env.PUBLIC_URL}/images/biglogo.svg`}
                    alt="logo"
                    width="148px"
                />
            </L.Logo>
        </L.Container>
    );
};
export default Login;