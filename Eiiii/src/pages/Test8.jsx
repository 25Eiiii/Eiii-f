import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import * as T from "../styles/pages/styledTest8";

const Test8 = () => {
    const nevigate = useNavigate();
        
    const goBack = () => {
         nevigate(`/test/step7`)
    }
    const goNext = () => {
        nevigate(`/test/complete`)
    }
        
    const [selected,setSelected] = useState([]);
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
                밥약 시 주의해야 할 사항이나 선호하는 식습관이 있다면 선택해주세요. (복수 선택 가능)
            </T.Text1>
            <T.Option1 selected={selected.includes(1)} onClick={()=> selectOption(1)}>
                채식 / 비건
            </T.Option1>
            <T.Option2 selected={selected.includes(2)} onClick={()=> selectOption(2)}>
                알러지 있음 ex 견과류, 해산물
            </T.Option2>
            <T.Option3 selected={selected.includes(3)} onClick={()=> selectOption(3)}>
                매운 음식 기피
            </T.Option3>
            <T.Option4 selected={selected.includes(4)} onClick={()=> selectOption(4)}>
                종교, 건강상 이유로 제한
            </T.Option4>
            <T.Option5 selected={selected.includes(5)} onClick={()=> selectOption(5)}>
                기타
            </T.Option5>
            <T.Option6 selected={selected.includes(6)} onClick={()=> selectOption(6)}>
                없음
            </T.Option6>
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
export default Test8;