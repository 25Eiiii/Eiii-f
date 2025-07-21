import React, { useEffect, useState } from "react"
import * as S from "../styles/pages/styledScrap"
import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { PageContainer } from "../styles/common/styledConainer"
import axios from "axios"

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
      <Center>스크랩</Center>
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

// Item Component (스크랩 상태 토글 가능)
const Item = ({ post }) => {
  const [scrapped, setScrapped] = useState(true); // 스크랩 목록이므로 기본 true
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  const handleToggleScrap = async () => {
    try {
      await axios.post(`/api/communities/post/${post.id}/scrap/`, {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setScrapped((prev) => !prev); // 상태 업데이트 (UI 토글)

    } catch (err) {
      console.error("스크랩 해제 실패", err);
    }
  };

  return (
    <Box>
      <Icon onClick={handleToggleScrap}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${scrapped ? "star2.svg" : "star-gray.svg"}`}
          alt={scrapped ? "스크랩됨" : "스크랩 안됨"}
        />
      </Icon>
      <Content>
        <Title>{post.title}</Title>
        <Detail>{post.content}</Detail>
      </Content>
    </Box>
  );
};


export const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  margin-left: 20px;
  margin-bottom: 10px;

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
  line-height: 1.5;
  letter-spacing: -0.12px;
`

// Menu Component
const Menu = () => {
  const navigate = useNavigate()
  return (
    <Tab>
      <Btn active="true">스크랩</Btn>
      <Btn onClick={() => navigate("/like")}>좋아요</Btn>
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

// Scrap Page
const Scrap = () => {
  const [scrapList, setScrapList] = useState([]);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchScraps = async () => {
      try {
        const res = await axios.get("/api/communities/post/scrapped/", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setScrapList(res.data);
      } catch (err) {
        console.error("스크랩 목록 조회 실패", err);
      }
    };
    fetchScraps();
  }, []);

  // 날짜 추출
  const formatDate = (isoString) => isoString.slice(0,10);

  return (
    <PageContainer>
      <Header />
      <S.SearchBar>
        <img
          id="search"
          src={`${process.env.PUBLIC_URL}/images/search.svg`}
          alt="search"
        />
      </S.SearchBar>
      <S.Top>
        <S.Date>날짜</S.Date>
        <Menu />
      </S.Top>
      <S.ScrapWrapper>
      {scrapList.map((post, idx) => {
        const currentDate = formatDate(post.created_at);
        const prevDate = idx > 0 ? formatDate(scrapList[idx - 1].created_at) : null;

        const showDate = currentDate !== prevDate;

        return (
          <S.Post key={post.id}>
            {showDate && <S.Line>{currentDate}</S.Line>}
            <Item post={post} />
          </S.Post>
        );
      })}
    </S.ScrapWrapper>
      <NavBar />
    </PageContainer>
  )
}

export default Scrap
