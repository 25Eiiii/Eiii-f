import React, { useState } from "react"
import * as C from "../styles/pages/styledScrap"
import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
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
      <Center>댓글 기록</Center>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 60px 27px 17px;
  width: 100%;
  gap: 125px;
`

export const Back = styled.div`
  width: 32px;
  height: 31px;
  flex-shrink: 0;
  background: #f8b621;
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
  color: #f8b621;
  text-align: center;
  font-family: Inter;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  gap: 5px;
  align-items: center;
`

// Item Component (comment toggle)
const Item = ({ initialCommented = true }) => {
  const [commented, setCommented] = useState(initialCommented)

  const handleToggleComment = () => {
    setCommented((prev) => !prev)
  }

  return (
    <Box>
      <Icon onClick={handleToggleComment}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${commented ? "mcomment.svg" : "comment-gray.svg"}`}
          alt={commented ? "댓글 있음" : "댓글 없음"}
        />
      </Icon>
      <Content>
        <Title>0993학번 있나요?</Title>
        <Detail>
          가나다라마바사 아자차카 타파아 글을써보십다 <br />
          두줄까진 허용입니다. 더이상 보고싶으면 더보기를 클릭DSADASD
        </Detail>
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

export const Icon = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13px;
  gap: 9px;
`

export const Title = styled.div`
  color: var(--N-10, #1d232b);
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.14px;
`

export const Detail = styled.div`
  overflow: hidden;
  color: #a0a0a0;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Noto Sans CJK KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.12px;
`

// Menu Component
const Menu = () => {
  const navigate = useNavigate()
  return (
    <Tab>
      <Btn onClick={() => navigate("/scrap")}>스크랩</Btn>
      <Btn onClick={() => navigate("/like")}>좋아요</Btn>
      <Btn active="true" onClick={() => navigate("/my-comments")}>내댓글</Btn>
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
  background: #ffffff;
  display: flex;
  color: #f28c26;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: center;
  align-items: center;
`

// My Comments Page
const MComments = () => {
  return (
    <PageContainer>
      <Header />
      <C.SearchBar>
        <img
          id="search"
          src={`${process.env.PUBLIC_URL}/images/search.svg`}
          alt="search"
        />
      </C.SearchBar>
      <C.Top>
        <C.Date>날짜</C.Date>
        <Menu />
      </C.Top>
      <C.Line>어제</C.Line>
      <C.ScrapWrapper>
        <Item initialCommented={false} />
        <C.Line2 />
        <Item initialCommented={true} />
        <C.Line2 />
        <Item initialCommented={true} />
      </C.ScrapWrapper>
      <C.Line>05/08</C.Line>
      <C.ScrapWrapper>
        <Item initialCommented={true} />
        <C.Line2 />
        <Item initialCommented={false} />
        <C.Line2 />
        <Item initialCommented={true} />
        <C.Line2 />
        <Item initialCommented={true} />
        <C.Line2 />
        <Item initialCommented={false} />
      </C.ScrapWrapper>
      <NavBar />
    </PageContainer>
  )
}

export default MComments
