import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as H from "../styles/pages/styledHome";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/pages/custom.css';
import moment from "moment";
import NavBar from "../components/NavBar";

const Home = () => {
    const navigate = useNavigate();
    const [date,setDate] = useState();
    const [isClick,setClick] = useState(false);
    const openSchedule = (date) => {
        setDate(date);
        setClick(true);
    }
    const formateDate = (date) =>{
        if (!date) return "";
        const month = date.getMonth()+1;
        const day = date.getDate();
        const days =["일","월","화","수","목","금","토"];
        const dayName = days[date.getDay()];

        return `${month}/${day}(${dayName})`
    }
    const goProfile = () => {
        navigate(`/Profile`)
    }
    return(
        <H.Container>
            <H.Header>
                <H.BackBtn>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/yellowback2.svg`}
                        alt="logo"
                        width="11px"
    
                    />
                </H.BackBtn>
                <H.Center>
                    Home
                    <img
                        src={`${process.env.PUBLIC_URL}/images/smallicon.svg`}
                        alt="logo"
                        width="22px"
                    />
                </H.Center>
                <H.BellBtn>
                     <img
                        src={`${process.env.PUBLIC_URL}/images/bell.svg`}
                        alt="logo"
                        width="28px"
                    />
                </H.BellBtn>
                <H.Search>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/yellowsearch.svg`}
                        alt="logo"
                        width="28px"
                        style={{marginTop:"7px",marginLeft:"10px"}}
                    />
                </H.Search>
            </H.Header>
            <H.Label>
                게시판
            </H.Label>
            <H.Icons>
                <H.IconDiv1>
                    <H.Icon1>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/whiteicon.svg`}
                            alt="logo"
                            width="38px"
                        />
                    </H.Icon1>
                    <H.Text>
                        즉석 밥약
                    </H.Text>
                </H.IconDiv1>
                <H.IconDiv2>
                    <H.Icon2>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/icon2.svg`}
                            alt="logo"
                            width="48px"
                           
                        />
                    </H.Icon2>
                    <H.Text>
                        선후배 밥약
                    </H.Text>
                </H.IconDiv2>
                <H.IconDiv3>
                    <H.Icon3>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/icon3.svg`}
                            alt="logo"
                            width="54px"
                           
                        />
                    </H.Icon3>
                    <H.Text>
                        정기 밥약
                    </H.Text>
                </H.IconDiv3>
                <H.IconDiv4>
                    <H.Icon4>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/icon4.svg`}
                            alt="logo"
                            width="44px"
                           
                        />
                    </H.Icon4>
                    <H.Text>
                        같은 수업 밥약
                    </H.Text>
                </H.IconDiv4>
            </H.Icons>
            <H.Line></H.Line>
            <H.Label>
                약속 캘린더
            </H.Label>
            <H.Calendar>
                <Calendar
                    calendarType="gregory"
                    formatDay={(locale, date) => moment(date).format("DD")}
                    onClickDay={openSchedule}
                />
            </H.Calendar>
            <H.S_Container style={{display: isClick? "block": "none"}}>
                <H.Box>
                    <H.Date>
                        {formateDate(date)}
                    </H.Date>
                    <H.S_Label>
                        제목
                    </H.S_Label>
                    <H.Input
                        placeholder="제목을 입력해주세요."
                    />
                    <H.S_Label>
                        장소
                    </H.S_Label>
                    <H.Input
                        placeholder="장소를 입력해주세요."
                    />
                    <H.S_Label>
                        시간
                    </H.S_Label>
                    <H.Input
                    
                    />
                    <H.S_Label>
                        메모
                    </H.S_Label>
                    <H.InputBig
                    
                    
                    />
                </H.Box>
                <H.Close onClick={()=>setClick(false)}>
                    확인
                </H.Close>
            </H.S_Container>
            <H.Label>
                이벤트
            </H.Label>
            <H.Photo>
                <img
                    src={`${process.env.PUBLIC_URL}/images/image.svg`}
                    alt="logo"
                    width="44px"
                />
            </H.Photo>
            <NavBar></NavBar>
        </H.Container>
    );
};
export default Home;