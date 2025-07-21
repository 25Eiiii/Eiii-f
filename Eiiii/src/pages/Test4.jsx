import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import * as T from "../styles/pages/styledTest4";

const Test4 = () => {
    const navigate = useNavigate();
    const savedData = JSON.parse(sessionStorage.getItem("profileData")) || {};

    const goBack = () => {
         navigate(`/test/step3`)
    }
    const goNext = () => {
        let eating_speed = "";

        if(selected===1) eating_speed="천천히 먹는 편"
        else if(selected===2) eating_speed="빠르게 먹는 편"
        else if(selected===3) eating_speed="상관 없음"

        const newData={};
        for(const key in savedData){
            newData[key] = savedData[key];
        }
        newData.eating_speed = eating_speed;

        sessionStorage.setItem("profileData",JSON.stringify(newData));
        navigate(`/test/step5`)
    }
        
    const [selected,setSelected] = useState(
        savedData.eating_speed==="천천히 먹는 편" ? 1: 
        savedData.eating_speed==="빠르게 먹는 편" ? 2:
        savedData.eating_speed==="상관 없음" ? 3: null
    );
    return(
        <T.Container>
            <T.Progress>
                <T.Progressbar>
                </T.Progressbar>
            </T.Progress>
            <T.Text1>
                상대와 식사 속도를 어떻게 맞추고 싶나요?
            </T.Text1>
            <T.Option1 selected={selected===1} onClick={()=> setSelected(1)}>
                천천히 먹는 편
            </T.Option1>
            <T.Option2 selected={selected===2} onClick={()=>setSelected(2)}>
                빠르게 먹는 편
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
export default Test4;