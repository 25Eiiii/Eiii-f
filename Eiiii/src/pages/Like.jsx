import * as L from "../styles/pages/styledLike"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Item = () => {
  return (
    <Box>
        <Icon>
            <img 
                src={`${process.env.PUBLIC_URL}/images/heart2.svg`}
                alt="star"
            />
        </Icon>
        <Content>
            <Title>0993학번 있나요?</Title>
            <Detail>가나다라마바사 아자차카 타파아 글을써보십다 <br></br>두줄까진 허용입니다. 더이상 보고싶으면 더보기를 클릭DSADASD</Detail>
        </Content>
    </Box>
  )
}

export const Box = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
    margin-left: 20px;
`
export const Icon = styled.div`

`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 13px;
    gap: 9px;
`

export const Title = styled.div`
    color: var(--N-10, #1D232B);
    font-family: "Spoqa Han Sans Neo";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 14px */
    letter-spacing: -0.14px;
`

export const Detail = styled.div`
    overflow: hidden;
    color: #A0A0A0;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: "Noto Sans CJK KR";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 12px */
    letter-spacing: -0.12px;
`

const Menu = () => {
  const navigate = useNavigate()
  return (
    <Tab>
        <Btn onClick={() => navigate("/scrap")}>스크랩</Btn>
        <Btn active="true" onClick={() => navigate("/like")}>좋아요</Btn>
        <Btn onClick={() => navigate("/my-comments")}>내댓글</Btn>
    </Tab>
  )
}

export const Tab = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    width: 100%;
    justify-content: flex-end;
    
`

export const Btn = styled.button`
width: 64.4px;
height: 23px;
flex-shrink: 0;
border-radius: 10px;
border: ${(props) => (props.active === "true" ? "2px solid #F28C26" : "1px solid #F8B621")};
background: #FFFFFF;
display: flex;
color: #F28C26;
font-family: Inter;
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: normal;
justify-content: center;
align-items: center;
`

const Like = () => {
  const navigate = useNavigate()

  return (
    <L.Container>
        <Header 
            onClickLeft={() => navigate(-1)}
            titleText="스크랩"
        />
        <L.SearchBar>
            <img
                id="search"
                src={`${process.env.PUBLIC_URL}/images/search.svg`}
                alt="search"
            />
        </L.SearchBar>
        <L.Top>
            <L.Date>날짜</L.Date>
            <Menu></Menu>
        </L.Top>
        <L.Line>어제</L.Line>
        <L.ScrapWrapper>
            <Item></Item>
            <L.Line2></L.Line2>
            <Item></Item>
            <L.Line2></L.Line2>
            <Item></Item>
        </L.ScrapWrapper>
        <L.Line>05/08</L.Line>
        <L.ScrapWrapper>
            <Item></Item>
            <L.Line2></L.Line2>
            <Item></Item>
            <L.Line2></L.Line2>
            <Item></Item>
            <L.Line2></L.Line2>
            <Item></Item>
            <L.Line2></L.Line2>
            <Item></Item>
        </L.ScrapWrapper>
        <NavBar></NavBar>
    </L.Container>
  )
}

export default Like;