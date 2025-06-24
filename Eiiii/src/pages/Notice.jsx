import * as N from "../styles/pages/styledNotice"

const data = Array(7).fill({
    content: "밥먹는 하마님이 점심 약속을 제안했어요. 확인해보세요."
})


const Notice = () => {

    return (
        <N.Container>
            <N.Header>
                <N.Back>
                    <img 
                        id="back"
                        src={`${process.env.PUBLIC_URL}/images/back.svg`}
                        alt="back"
                    />
                </N.Back>
                <N.Title>알림
                    <img 
                        id="meal"
                        src={`${process.env.PUBLIC_URL}/images/meal.svg`}
                    />
                </N.Title>
            </N.Header>
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