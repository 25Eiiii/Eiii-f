import * as N from "../styles/pages/styledNotice"
import { useNavigate } from "react-router-dom"
import { PageContainer } from "../styles/common/styledConainer"
import styled from "styled-components"

const data = Array(7).fill({
    content: "밥먹는 하마님이 점심 약속을 제안했어요. 확인해보세요."
})

// Header Component
const Header = () => {
  const navigate = useNavigate()

  return (
    <Wrapper>
        <Back onClick={() => navigate(-1)}>
            <img
                src={`${process.env.PUBLIC_URL}/images/back.svg`}
                alt="back"
            />
        </Back>
        <Title>알림
                <img
                src={`${process.env.PUBLIC_URL}/images/meal.svg`}
                alt="meal"
            />
        </Title>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 60px 27px 17px;
    width: 100%;
    gap: 135px;
`

export const Back = styled.button`
    width: 32px;
    height: 31px;
    flex-shrink: 0;
    background: #F8B621;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-left: 23px;
`

export const Title = styled.div`
    display: flex;
    justify-content: center;
    height: 32px;
    flex-shrink: 0;
    color: #F8B621;
    text-align: center;
    font-family: Inter;
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    gap: 5px;
    align-items: center;
`;

// 알림 컴포넌트
const New = ({text, color}) => {
  return (
    <Item $color={color}>
    <Icon>
        <img 
            src={`${process.env.PUBLIC_URL}/images/ring.svg`}
            alt="ring"
        />
    </Icon>
    <Content>{text}</Content>
    </Item>
  )
}

export const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #EFBE78;
    gap: 0px;
    width: 440px;
    background: ${(props) => props.$color || "#FFFFFF"};
    height: 71px;
`

export const Icon = styled.div`
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    background: #F8B621;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 21px;
`

export const Content = styled.div`
    color: #4B4B4B;
    font-family: "Spoqa Han Sans Neo";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 350px;
    margin-left: 40px;
`

//Notice Page 
const Notice = () => {
    const navigate = useNavigate()

    return (
        <PageContainer>
            <Header></Header>
            <N.Text>새소식</N.Text>
            <N.NoticeWrapper>
                <New text="밥먹는 하마님이 점심 약속을 제안했어요. 확인해보세요."></New>
                <New text="요온님이 밥약을 수락했어요. 지금 바로 확인해보세요."></New>
                <New text="물 마시는 하마님이 방금 점심 약속을 제안했어요."></New>
                <New text="붕어빵 좋아하는 병아리 님, 이번 주 밥약 총 3번 성사 됐어요! 오늘도 즐거운 식사 시간 되세요." color="#FEE790"></New>
                <New text="항상 밥짝이 함께해요! 오늘 선후배 밥약 어때요?"></New>
                <New text="기린님이 수요일 점심 약속을 수락했어요. 지금 바로 확인 해보세요!" color="#FEE790"></New>
                <New text="항상 밥짝이 함께해요! 오늘 선후배 밥약 어때요?"></New>
            </N.NoticeWrapper>
        </PageContainer>
    )
}

export default Notice