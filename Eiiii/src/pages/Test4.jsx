import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import * as T from "../styles/pages/styledTest4";

const Test4 = () => {
    const nevigate = useNavigate();
        
    const goBack = () => {
         nevigate(`/test/step3`)
    }
    const goNext = () => {
        nevigate(`/test/step5`)
    }
        
    const [selected,setSelected] = useState();
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
export default Test4;