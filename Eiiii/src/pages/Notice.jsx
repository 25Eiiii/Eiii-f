import * as N from "../styles/pages/styledNotice"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"

const data = Array(7).fill({
    content: "밥먹는 하마님이 점심 약속을 제안했어요. 확인해보세요."
})


const Notice = () => {
    const navigate = useNavigate()

    return (
        <N.Container>
            <Header
                leftIcon="back"
                titleText="알림"
                titleImg="meal"
                onClickLeft={() => navigate(-1)}
            ></Header>
            <N.Text>새소식</N.Text>
            <N.NoticeWrapper>
            {data.map((data, idx) => (
                <N.Item>
                <N.Icon>
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/ring.svg`}
                        alt="ring"
                    />
                </N.Icon>
                <N.Content>
                    {data.content}
                </N.Content>
                </N.Item>
            ))}
                
            </N.NoticeWrapper>
        </N.Container>
    )
}

export default Notice