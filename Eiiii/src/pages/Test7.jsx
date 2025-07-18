import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import * as T from "../styles/pages/styledTest7";

const Test7 = () => {
    const navigate = useNavigate();
    const savedData = JSON.parse(sessionStorage.getItem("profileData")) || {};
    const foodMap = {
        1:"한식",
        2:"중식",
        3: "일식",
        4: "양식",
        5: "분식",
        6: "디저트/ 카페",
        7: "상관 없음"
    }
    const reverseFoodMap = {};
    for(const key in foodMap){
        const value = foodMap[key];
        reverseFoodMap[value] = parseInt(key);
    }
    const goBack = () => {
         navigate(`/test/step6`)
    }
    const goNext = () => {
        const preferred_menu = [];

        for(let i=0; i<selected.length;i++){
            const text = foodMap[selected[i]];
            preferred_menu.push(text);
        }

        const newData = {};
        for(const key in savedData){
            newData[key] = savedData[key];
        }
        newData.preferred_menu = preferred_menu;
        sessionStorage.setItem("profileData",JSON.stringify(newData));
        navigate(`/test/step8`)
    }
        
    const [selected,setSelected] = useState(() =>{
        if(savedData.preferred_menu){
            return savedData.preferred_menu.map(item=>reverseFoodMap[item]);
        }
        return [];
    }
       
    );
    const selectOption = (num) => {
        if(selected.includes(num)){
            const newSelected = [];
            for(let i = 0; i<selected.length; i++){
                if(selected[i]!==num){
                    newSelected.push(selected[i]);
                }
            }
            setSelected(newSelected);
        }else{
            setSelected(selected.concat(num));
        }
    }
    return(
        <T.Container>
            <T.Progress>
                <T.Progressbar>
                </T.Progressbar>
            </T.Progress>
            <T.Text1>
                상대와 어떤 음식을 함께 먹고 싶나요? 선호하는 메뉴를 선택해보세요! (복수 선택 가능)
            </T.Text1>
            <T.Option1 selected={selected.includes(1)} onClick={()=> selectOption(1)}>
                한식
            </T.Option1>
            <T.Option2 selected={selected.includes(2)} onClick={()=> selectOption(2)}>
                중식
            </T.Option2>
            <T.Option3 selected={selected.includes(3)} onClick={()=> selectOption(3)}>
                일식
            </T.Option3>
            <T.Option4 selected={selected.includes(4)} onClick={()=> selectOption(4)}>
                양식
            </T.Option4>
            <T.Option5 selected={selected.includes(5)} onClick={()=> selectOption(5)}>
                분식
            </T.Option5>
            <T.Option6 selected={selected.includes(6)} onClick={()=> selectOption(6)}>
                디저트/ 카페
            </T.Option6>
            <T.Option7 selected={selected.includes(7)} onClick={()=> selectOption(7)}>
                상관 없음
            </T.Option7>
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
export default Test7;