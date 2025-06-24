import React, { useState } from "react";
import * as R from "../styles/pages/styledChatRequest"
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import DetailCard from "../components/DetailCard";

const requests = Array(9).fill({
    nickname: "병아리",
    major: "컴퓨터공학과",
    grade: "21",
    avatar: `${process.env.PUBLIC_URL}/images/avatar.svg`
  });

const Request = () => {
    const [selectedUser, setSelectedUser] = useState(null); 

    const handleCardClick = (user) => {
        setSelectedUser(user);
    }

    const handleCloseDetail = () => {
        setSelectedUser(null)
    }

    return (
        <R.Container>
            <Header 
                titleText="쪽지 요청"
                leftIcon="back"
                rightIcon="ring"
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
                    <R.Tab active>
                        보관함 <R.Badge>15</R.Badge>
                    </R.Tab>
                </R.TabWrapper>
                <R.TabWrapper>
                    <R.Tab>
                        요청 <R.Badge>3</R.Badge>
                    </R.Tab>
                </R.TabWrapper>
            </R.Tabs>
            <R.ReqWrapper>
            {requests.map((req, index) => (
                <R.Item key={index}
                        {...req}
                        onClick={() => handleCardClick(req)}>

                    <R.Profile src={req.avatar} alt="avatar" />
                    <R.Content>
                        <R.Info>{req.nickname}/{req.major} {req.grade}</R.Info>
                        <R.Del>
                            <img 
                            id="del"
                            src={`${process.env.PUBLIC_URL}/images/trash`}
                            alt="delete"
                            />
                        </R.Del>
                    </R.Content>
                </R.Item>
            ))}
            </R.ReqWrapper>
            <NavBar></NavBar>

        {selectedUser && <R.BackgroundOverlay onClick={handleCloseDetail} />}
        {selectedUser && ( 
            <DetailCard user={selectedUser} onClose={handleCloseDetail} />
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