import NavBar from "../components/NavBar";
import * as C from "../styles/pages/styledChatList"
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../styles/common/styledConainer";
import styled from "styled-components";

const messages = Array(9).fill({
    nickname: "밥먹는 고라파덕",
    major: "컴퓨터공학과",
    grade: "23",
    time: "어제 09:05pm",
    message: "훠궈 4인팟 구하고 있는데 혹시 생각 있으시..",
    img: `${process.env.PUBLIC_URL}/images/avatar.svg`,
  });

// Item Component
const Item = () => {
  return (
    <Item>
        <Profile>
            <img 
                src={`${process.env.PUBLIC_URL}/images/avatar.svg`}
                alt="pic"
            />
        </Profile>
        <Text>
            <Line1>
            <Name>밥먹는 고라파덕</Name>
                <C.Info>
                컴퓨터공학과 23
                </C.Info>
            </Line1>
            <Msg>훠궈 4인팟 구하고 있는데 혹시 생각 있으시..</Msg>
        </Text>
        <Time>어제 09:05pm</Time>
    </Item>
  )
}

export const Profile = styled.div`
    width: 54px;
    height: 49px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #FFD667;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Text = styled.div`
margin-right: 10px;
padding: 7px 0;
`

export const Line1 = styled.div`
    display: flex;
    gap: 5px;
    align-items: flex-end;
    margin-bottom: 7px;
`

export const Name = styled.div`
    color: #000000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    `

export const Info = styled.div`
    color: #706963;
    font-family: "Spoqa Han Sans Neo";
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 11px */
`

export const Msg = styled.div`
    color: #BAAEA5;
    font-family: "Spoqa Han Sans Neo";
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 13px */
`

export const Time = styled.div`
    display: flex;
    color: #BAAEA5;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 10px */
    `

const ChatList = () => {
    const navigate = useNavigate()

    return(
        <PageContainer>
            <Header 
                titleText="쪽지 목록" 
                leftIcon="back"
                rightIcon="ring"
                onClickLeft={() => navigate(-1)}
                onClickRight={() => navigate('/notice')}
            />
            <C.SearchBar>
                <img
                    id="search"
                    src={`${process.env.PUBLIC_URL}/images/search.svg`}
                    alt="search"
                />
            </C.SearchBar>
            <C.Tabs>
                <C.TabWrapper>
                    <C.Tab active="true">
                        보관함 <C.Badge>15</C.Badge>
                    </C.Tab>
                </C.TabWrapper>
            <C.TabWrapper>
                    <C.Tab active="false" onClick={() => navigate('/chat-request')}>
                        요청 <C.Badge>3</C.Badge>
                    </C.Tab>
            </C.TabWrapper>
            </C.Tabs>

            <C.List>
                <Item></Item>
            </C.List>
            <NavBar></NavBar>
        </PageContainer>
    )
}

export default ChatList