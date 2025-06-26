import * as P from "../styles/pages/styledPlan"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import { PageContainer } from "../styles/common/styledConainer"

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
          <Center>약속 보관함</Center>
      </Wrapper>
    )
  }
  
  export const Wrapper = styled.div`
      display: flex;
      align-items: center;
      padding: 60px 27px 17px;
      width: 100%;
      gap: 110px;
  `
  
  export const Back = styled.div`
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
  export const Center = styled.div`
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
  `

// 약속 컴포넌트
const List = () => {
 return (
    <Item>
        <Profile>
            <User>
                <img 
                    src={`${process.env.PUBLIC_URL}/images/avatar.svg`}
                    alt="img"
                />
            </User>
            <Del>
                <img 
                    src={`${process.env.PUBLIC_URL}/images/trash2.svg`}
                    alt="trash"
                />
                
            </Del>
        </Profile>
        <Content>
            <Title>제목</Title><Time>05/09</Time>
            <Place>미나리 샤브샤브 / 2023.05.09-11am</Place>
            <Memo>메모: 열두시반 정문 앞! 잊지 않기</Memo>
        </Content>
    </Item>

)
}

export const Item = styled.div`
  display: flex;
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 18px;
  background: #FEE790;
`
export const Del = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    border-radius: 50%;
    border: none;
    padding: 8px;
    background: #F8B621;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    width: 329px;
    margin-left: 4px;
    height: 97px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #FEE790;
    padding: 8px 12px 0px 12px;
    
`

export const Title = styled.div`
    color: #000000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 14px */
`

export const Time = styled.p`
    color: #BAAEA5;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 10px */
    position: absolute;
    align-self: flex-end;
    justify-self: flex-end;
`

export const Place = styled.p`
    color: #A19891;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
`

export const Memo = styled.p`
    color: #A19891;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    margin-top: 8px;
`
// Plan page
const Plan = () => {
  const navigate = useNavigate()

  return (
    <PageContainer>
        <Header />
        <P.SearchBar>
            <img
                id="search"
                src={`${process.env.PUBLIC_URL}/images/search.svg`}
                alt="search"
            />
        </P.SearchBar>
        <P.PlanWrapper>
            <List></List>
            <List></List>
            <List></List>
            <List></List>
            <List></List>
            <List></List>
        </P.PlanWrapper>
        <NavBar></NavBar>
    </PageContainer>
  );
};

export default Plan;