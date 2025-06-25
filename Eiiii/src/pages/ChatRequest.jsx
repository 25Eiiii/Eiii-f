import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as R from "../styles/pages/styledChatRequest"
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import DetailCard from "../components/DetailCard";

const requests = Array(9).fill({
    nickname: "김치찌개 원숭이",
    major: "컴퓨터 공학과",
    grade: "21",
    img: `${process.env.PUBLIC_URL}/images/avatar.svg`,
    userId: "ajyslsbx",
    gender: "같은 성별만",
    mealType: "가벼운 수다",
    type: "천천히 먹는 편",
    goal: "친목/친구 사귀기",
    fav: "한식",
    msg: "꼭 함께 하고 싶음",
    type2: "채식/비건"
  });

const Request = () => {
    const [selectedUser, setSelectedUser] = useState(null); 

    const handleCardClick = (user) => {
        setSelectedUser(user);
    }

    const handleCloseDetail = () => {
        setSelectedUser(null)
    }

    const navigate = useNavigate();

    return (
        <R.Container>
            <Header 
                titleText="쪽지 요청"
                leftIcon="back"
                rightIcon="ring"
                onClickLeft={() => navigate(-1)}
                onClickRight={() => navigate('/notice')}
            />
            <R.SearchBar>
                <img
                    id="search"
                    src={`${process.env.PUBLIC_URL}/images/search.svg`}
                    alt="search"
                />
            </R.SearchBar>
            <R.Tabs>
                <R.TabWrapper>
                    <R.Tab active="false" onClick={() => navigate('/chat-list')}>
                        보관함 <R.Badge>15</R.Badge>
                    </R.Tab>
                </R.TabWrapper>
                <R.TabWrapper>
                    <R.Tab active="true">
                        요청 <R.Badge>3</R.Badge>
                    </R.Tab>
                </R.TabWrapper>
            </R.Tabs>
            <R.ReqWrapper>
            {requests.map((req, index) => (
                <R.Item key={index}
                        {...req}
                        onClick={() => handleCardClick(req)}>
                    <R.Profile>
                        <img 
                            src={req.img}
                            alt="pic"
                        />
                    </R.Profile>
                    <R.Content>
                        <R.Info>{req.nickname} /{req.major} {req.grade}</R.Info>
                        <R.Del>
                            <img 
                            id="del"
                            src={`${process.env.PUBLIC_URL}/images/trash.svg`}
                            alt="delete"
                            />
                        </R.Del>
                    </R.Content>
                </R.Item>
            ))}
            </R.ReqWrapper>
            <NavBar></NavBar>

        {selectedUser && <R.BackgroundOverlay />}
        {selectedUser && ( 
            <DetailCard user={selectedUser}/>
        )}
        {selectedUser && (
        <R.ButtonGroup>
            <R.Ok>수락</R.Ok>
            <R.Rej>거절</R.Rej>
        </R.ButtonGroup>
        )
        }
        </R.Container>
    );
};

export default Request