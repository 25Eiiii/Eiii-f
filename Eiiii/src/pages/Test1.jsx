import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import * as T from "../styles/pages/styledTest1";

const Test1 = () => {
    const nevigate = useNavigate();

    const savedData = JSON.parse(sessionStorage.getItem("profileData")) || {};
    const [major,setMajor] = useState(savedData.major||"");
    const [year, setYear] = useState(savedData.year||"");

    const goBack = () => {
        nevigate(`/test`)
    }
    const goNext = () => {
        const newData = {};
        for(const key in savedData){
            newData[key] = savedData[key];
        }
        newData.major=major;
        newData.year=year;
        sessionStorage.setItem("profileData",JSON.stringify(newData));
        nevigate(`/test/step2`)
    }
    return(
        <T.Container>
            <T.Progress>
                <T.Progressbar>
                </T.Progressbar>
            </T.Progress>
            <T.Text1>
                학과와 학년 정보를 입력해주세요.
            </T.Text1>
            <T.Text2>
                내 프로필 카드에 표시될 정보입니다.
            </T.Text2>
            <T.Major>
                학과를 입력해주세요.
            </T.Major>
            <T.Input
                value={major}
                onChange={(e)=>setMajor(e.target.value)}
                placeholder="내용을 입력해주세요"
            />
            <T.IdNum>
                학번을 입력해주세요.
                <T.Ex>
                    (예: 22)
                </T.Ex>
            </T.IdNum>
            <T.Input
                value={year}
                onChange={(e)=>setYear(e.target.value)}
                placeholder="내용을 입력해주세요"
            />
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
export default Test1;