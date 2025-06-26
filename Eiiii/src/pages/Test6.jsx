import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import * as T from "../styles/pages/styledTest6";

const Test6 = () => {
    const nevigate = useNavigate();
        
    const goBack = () => {
         nevigate(`/test/step5`)
    }
    const goNext = () => {
        nevigate(`/test/step7`)
    }
        
    const [selected,setSelected] = useState();
    return(
        <T.Container>
            <T.Progress>
                <T.Progressbar>
                </T.Progressbar>
            </T.Progress>
            <T.Text1>
                식사 후 상대와 음료나 디저트를 함께할 의향이 있나요?
            </T.Text1>
            <T.Option1 selected={selected===1} onClick={()=> setSelected(1)}>
                꼭 함께 하고 싶음
            </T.Option1>
            <T.Option2 selected={selected===2} onClick={()=>setSelected(2)}>
                상황 봐서 가능
            </T.Option2>
            <T.Option3 selected={selected===3} onClick={()=>setSelected(3)}>
                식사만 하고 마무리
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
export default Test6;