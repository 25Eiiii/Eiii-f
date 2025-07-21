import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import * as T from "../styles/pages/styledTest2";

const Test2=()=>{
    const navigate = useNavigate();
    
    const savedData = JSON.parse(sessionStorage.getItem("profileData")) || {};
    const goBack = () => {
        navigate(`/test/step1`)
    }
    const goNext = () => {
        let preferred_gender = "";

        if(selected===1) preferred_gender = "같은 성별만";
        else if(selected===2) preferred_gender = "상관 없음";

        const newData = {};
        for(const key in savedData){
            newData[key] = savedData[key];
        }
        newData.preferred_gender = preferred_gender;

        sessionStorage.setItem("profileData",JSON.stringify(newData));
        navigate(`/test/step3`)
    }
    
    const [selected,setSelected] = useState(
        savedData.preferred_gender==="같은 성별만" ? 1 :
        savedData.preferred_gender==="상관 없음" ? 2 : null
    );
    return(
        <T.Container>
            <T.Progress>
                <T.Progressbar>
                </T.Progressbar>
            </T.Progress>
            <T.Text1>
                상대방의 성별에 대한 선호가 있으신가요?
            </T.Text1>
            <T.Option1 selected={selected===1} onClick={()=> setSelected(1)}>
                같은 성별만
            </T.Option1>
            <T.Option2 selected={selected===2} onClick={()=>setSelected(2)}>
                상관 없음
            </T.Option2>
            <T.Btn>
                <T.BackBtn onClick={goBack}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/squareback.svg`}
                        alt="back"
                        width="32px"
                    />
                    <T.Backtext>
                        뒤로
                    </T.Backtext>
                </T.BackBtn>
                <T.NextBtn onClick={goNext}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/next.svg`}
                        alt="next"
                        width="32px"
                    />
                    <T.Nexttext>
                        다음
                    </T.Nexttext>
                </T.NextBtn>
            </T.Btn>
        </T.Container>
    );
};
export default Test2;