import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import * as T from "../styles/pages/styledTest5";

const Test5 = () => {
    const navigate = useNavigate();
    const savedData = JSON.parse(sessionStorage.getItem("profileData")) || {};

    const goBack = () => {
         navigate(`/test/step4`)
    }
    const goNext = () => {
        let meal_purpose = "";

        if(selected===1) meal_purpose="친목/친구 사귀기"
        else if(selected===2) meal_purpose="선배 조언 듣기"
        else if(selected===3) meal_purpose="그냥 식사 메이트"
        else if(selected===4) meal_purpose="상관 없음"

        const newData = {};
        for(const key in savedData){
            newData[key] = savedData[key];
        }
        newData.meal_purpose = meal_purpose;
        sessionStorage.setItem("profileData",JSON.stringify(newData));
        navigate(`/test/step6`)
    }
        
    const [selected,setSelected] = useState(
        savedData.meal_purpose==="친목/친구 사귀기" ? 1:
        savedData.meal_purpose==="선배 조언 듣기" ? 2:
        savedData.meal_purpose==="그냥 식사 메이트" ? 3:
        savedData.meal_purpose==="상관 없음" ? 4: null
    );
    return(
        <T.Container>
            <T.Progress>
                <T.Progressbar>
                </T.Progressbar>
            </T.Progress>
            <T.Text1>
                어떤 목적의 식사 자리를 기대하고 있나요?
            </T.Text1>
            <T.Option1 selected={selected===1} onClick={()=> setSelected(1)}>
                친목/친구 사귀기
            </T.Option1>
            <T.Option2 selected={selected===2} onClick={()=>setSelected(2)}>
                선배 조언 듣기
            </T.Option2>
            <T.Option3 selected={selected===3} onClick={()=>setSelected(3)}>
                그냥 식사 메이트
            </T.Option3>
            <T.Option4 selected={selected===4} onClick={()=>setSelected(4)}>
                상관없음
            </T.Option4>
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
export default Test5;