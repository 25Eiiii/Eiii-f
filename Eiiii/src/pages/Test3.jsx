import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import * as T from "../styles/pages/styledTest3";

const Test3 = () => {
    const navigate = useNavigate();
        
    const savedData = JSON.parse(sessionStorage.getItem("profileData")) || {};
    const goBack = () => {
         navigate(`/test/step2`)
    }
    const goNext = () => {
        let dining_style = "";
        if(selected===1) dining_style="조용히 식사만";
        else if(selected===2) dining_style="가벼운 수다";
        else if(selected===3) dining_style="상관 없음";

        const newData = {};
        for(const key in savedData){
            newData[key] = savedData[key];
        }
        newData.dining_style = dining_style;

        sessionStorage.setItem("profileData",JSON.stringify(newData));
        navigate(`/test/step4`)
    }
        
    const [selected,setSelected] = useState(
        savedData.dining_style==="조용히 식사만" ? 1 :
        savedData.dining_style==="가벼운 수다" ? 2 :
        savedData.dining_style==="상관 없음" ? 3 : null
    );
    return(
        <T.Container>
            <T.Progress>
                <T.Progressbar>
                </T.Progressbar>
            </T.Progress>
            <T.Text1>
                밥짝에서 만나게 될 상대와 식사 자리에서 어떤 대화 분위기를 선호하나요?
            </T.Text1>
            <T.Option1 selected={selected===1} onClick={()=> setSelected(1)}>
                조용히 식사만
            </T.Option1>
            <T.Option2 selected={selected===2} onClick={()=>setSelected(2)}>
                가벼운 수다
            </T.Option2>
            <T.Option3 selected={selected===3} onClick={()=>setSelected(3)}>
                상관 없음
            </T.Option3>
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
export default Test3;