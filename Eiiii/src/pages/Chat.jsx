import NavBar from "../components/NavBar";
import * as C from "../styles/pages/styledChat"

const messages = Array(9).fill({
    nickname: "밥먹는 고라파덕",
    major: "컴퓨터공학과",
    grade: "23",
    time: "어제 09:05pm",
    message: "훠궈 4인팟 구하고 있는데 혹시 생각 있으시...",
    avatar: `${process.env.PUBLIC_URL}/images/avatar.svg`,
  });

const Chat = () => {
    return(
        <C.Container>
            <C.Header>
                <C.Btn>
                    <img
                        id="back"
                        src={`${process.env.PUBLIC_URL}/images/back.svg`}
                        alt="back"
                    />
                </C.Btn>
                <C.Title>쪽지 목록</C.Title>
                <C.Btn>
                    <img
                        id="ring"
                        src={`${process.env.PUBLIC_URL}/images/ring.svg`}
                        alt="ring"
                    />
                </C.Btn>
            </C.Header>
            <C.SearchBar>
                <img
                    id="search"
                    src={`${process.env.PUBLIC_URL}/images/search.svg`}
                    alt="search"
                />
            </C.SearchBar>
            <C.Tabs>
                <C.TabWrapper>
                    <C.Tab active>
                        보관함 <C.Badge>15</C.Badge>
                    </C.Tab>
                </C.TabWrapper>
            <C.TabWrapper>
                    <C.Tab>
                        요청 <C.Badge>3</C.Badge>
                    </C.Tab>
            </C.TabWrapper>
            </C.Tabs>

            <C.List>
                {messages.map((msg, index) => (
                    <C.Item key={index}>
                        <C.Profile src={msg.avater} alt="avatar" />
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
        </C.Container>
    )
}

export default Chat