import NavBar from "../components/NavBar";
import * as C from "../styles/pages/styledChatList"
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { PageContainer } from "../styles/common/styledConainer";

const messages = Array(9).fill({
    nickname: "밥먹는 고라파덕",
    major: "컴퓨터공학과",
    grade: "23",
    time: "어제 09:05pm",
    message: "훠궈 4인팟 구하고 있는데 혹시 생각 있으시..",
    img: `${process.env.PUBLIC_URL}/images/avatar.svg`,
  });

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
                        보관함 <C.Badge></C.Badge>
                    </C.Tab>
                </C.TabWrapper>
            <C.TabWrapper>
                    <C.Tab active="false" onClick={() => navigate('/chat-request')}>
                        요청 <C.Badge></C.Badge>
                    </C.Tab>
            </C.TabWrapper>
            </C.Tabs>

            <C.List>
                {messages.map((msg, index) => (
                    
                    <C.Item key={index}>
                        <C.Profile>
                            <img 
                                src={msg.img}
                                alt="pic"
                            />
                        </C.Profile>
                        <C.Text>
                            <C.Line1>
                            <C.Name>{msg.nickname}</C.Name>
                                <C.Info>
                                    {msg.major} {msg.grade}
                                </C.Info>
                            </C.Line1>
                            <C.Msg>{msg.message}</C.Msg>
                        </C.Text>
                        <C.Time>{msg.time}</C.Time>
                    </C.Item>
                ))}
            </C.List>
            <NavBar></NavBar>
        </PageContainer>
    )
}

export default ChatList