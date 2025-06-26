import React from "react";
import {useNavigate} from "react-router-dom";
import * as T from "../styles/pages/styledTestComplete";

const TestComplete = () => {
    const navigate = useNavigate();
    const goTest1 = () => {
        navigate(`/home`)
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
                내 프로필 카드가 생성되었어요.
            </T.Text1>
            <T.Text2>
                지금 바로 마이페이지에서 확인해 보세요!
            </T.Text2>
        </T.Container>
    );

};
export default TestComplete;