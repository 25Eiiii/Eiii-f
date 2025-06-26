import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import * as T from "../styles/pages/styledTest3";

const Test3 = () => {
    const nevigate = useNavigate();
        
    const goBack = () => {
         nevigate(`/test/step2`)
    }
    const goNext = () => {
        nevigate(`/test/step4`)
    }
        
    const [selected,setSelected] = useState();
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
                상관없음
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