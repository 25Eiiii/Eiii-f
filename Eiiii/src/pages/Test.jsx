import React from "react";
import {useNavigate} from "react-router-dom";
import * as T from "../styles/pages/styledTest";

const Test = () => {
    const navigate = useNavigate();
    const goTest1 = () => {
        navigate(`/test/step1`)
    }
    return(
        <T.Container onClick={goTest1}>
            <T.Logo>
                <img
                    src={`${process.env.PUBLIC_URL}/images/biglogoyellow.svg`}
                    alt="logo"
                    width="148px"
                />
            </T.Logo>
            <T.Text1>
                밥짝에 오신것을 환영합니다.
            </T.Text1>
            <T.Text2>
                밥짝에서 새로운 인연을 만나고 더 많은 사람들과
            </T.Text2>
            <T.Text3>
                의미있는 식사 시간을 만들어 가세요.
            </T.Text3>
        </T.Container>
    );

};
export default Test;