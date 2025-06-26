import * as M from "../styles/pages/styledCommunity"
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
          <Search>
              <img
                  src={`${process.env.PUBLIC_URL}/images/search.svg`}
                  alt="search"
              />
          </Search>
          <Title>선후배 밥약
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
  
  export const Search = styled.div`
      margin-left: 10px;
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
      margin-left: 69px;
  `

const Community = () => {
    const navigate = useNavigate()

    return (
        <PageContainer>
        <Header />
        <M.Wrapper>
            <M.Item>
                <M.Profile>
                    <M.Pic>
                        <img 
                        src={`${process.env.PUBLIC_URL}/images/avatar.svg`}
                        />
                    </M.Pic>
                    <M.Infos>
                        <M.Info1>
                            <M.Name>밥먹는 하마</M.Name>
                            <M.Time>방금</M.Time>
                        </M.Info1>
                        <M.Info2>
                            성악과 22학번
                            <img 
                            src={`${process.env.PUBLIC_URL}/images/dote.svg`}
                            />
                            23살
                    </M.Info2>
                    </M.Infos>
                </M.Profile>
                <M.Content onClick={() => navigate("/community-detail")}>
                    <M.Big>0993학번 있나요?</M.Big>
                    가나다라마바사 아자차카 타파아 글을써보십다 <br></br>
                    두줄까진 허용입니다. 더이상 보고싶으면 더보기를 클릭 ···
                    <M.Etc>더보기</M.Etc>
                </M.Content>
                <M.Bottom>
                <M.Like>
                    <M.IconImg src={`${process.env.PUBLIC_URL}/images/heart.svg`} />
                    5
                </M.Like>
                <M.Comment>
                    <M.IconImg src={`${process.env.PUBLIC_URL}/images/comment.svg`} />
                    5
                </M.Comment>
                <M.Scrap>
                    <M.IconImg src={`${process.env.PUBLIC_URL}/images/scrap.svg`} />
                    5
                </M.Scrap>
                <M.More>
                    <M.IconImg src={`${process.env.PUBLIC_URL}/images/more.svg`} />
                    
                </M.More>
                </M.Bottom>
            </M.Item>
            <M.Line></M.Line>
            <M.Item>
                <M.Profile>
                    <M.Pic>
                        <img 
                        src={`${process.env.PUBLIC_URL}/images/avatar.svg`}
                        />
                    </M.Pic>
                    <M.Infos>
                        <M.Info1>
                            <M.Name>밥먹는 하마</M.Name>
                            <M.Time>방금</M.Time>
                        </M.Info1>
                        <M.Info2>
                            성악과 22학번
                            <img 
                            src={`${process.env.PUBLIC_URL}/images/dote.svg`}
                            />
                            23살
                    </M.Info2>
                    </M.Infos>
                </M.Profile>
                <M.Content onClick={() => navigate("/community-detail")}>
                    <M.Big>0993학번 있나요?</M.Big>
                    가나다라마바사 아자차카 타파아 글을써보십다 <br></br>
                    두줄까진 허용입니다. 더이상 보고싶으면 더보기를 클릭 ···
                    <M.Etc>더보기</M.Etc>
                </M.Content >
                <M.Bottom>
                <M.Like>
                    <M.IconImg src={`${process.env.PUBLIC_URL}/images/heart.svg`} />
                    5
                </M.Like>
                <M.Comment>
                    <M.IconImg src={`${process.env.PUBLIC_URL}/images/comment.svg`} />
                    5
                </M.Comment>
                <M.Scrap>
                    <M.IconImg src={`${process.env.PUBLIC_URL}/images/scrap.svg`} />
                    5
                </M.Scrap>
                <M.More>
                    <M.IconImg src={`${process.env.PUBLIC_URL}/images/more.svg`} />
                </M.More>
                </M.Bottom>
            </M.Item>
            <M.Line></M.Line>
            <M.Item>
                <M.Profile>
                    <M.Pic>
                        <img 
                        src={`${process.env.PUBLIC_URL}/images/avatar.svg`}
                        />
                    </M.Pic>
                    <M.Infos>
                        <M.Info1>
                            <M.Name>밥먹는 하마</M.Name>
                            <M.Time>방금</M.Time>
                        </M.Info1>
                        <M.Info2>
                            성악과 22학번
                            <img 
                            src={`${process.env.PUBLIC_URL}/images/dote.svg`}
                            />
                            23살
                    </M.Info2>
                    </M.Infos>
                </M.Profile>
                <M.Content onClick={() => navigate("/community-detail")}>
                    <M.Big>새로 생긴 훠궈집 같이 가실 분 4분 구해요!</M.Big>
                    4명이서 같이 가면 개업 이벤트로 20퍼 할인 해준대요!! <br></br>그 달에 생일인 사람있는 테이블은 추가로 10퍼 할인 더 ···
                    <M.Etc>더보기</M.Etc>
                </M.Content>
                <M.Bottom>
                <M.Like>
                    <M.IconImg src={`${process.env.PUBLIC_URL}/images/heart.svg`} />
                    5
                </M.Like>
                <M.Comment>
                    <M.IconImg src={`${process.env.PUBLIC_URL}/images/comment.svg`} />
                    5
                </M.Comment>
                <M.Scrap>
                    <M.IconImg src={`${process.env.PUBLIC_URL}/images/scrap.svg`} />
                    5
                </M.Scrap>
                <M.More>
                    <M.IconImg src={`${process.env.PUBLIC_URL}/images/more.svg`} />
                    
                </M.More>
                </M.Bottom>
            </M.Item>
           <M.Line></M.Line>
        </M.Wrapper>
        <M.WriteBtn onClick={() => navigate("/community-write")}>글쓰기</M.WriteBtn>
        <NavBar></NavBar>
        </PageContainer>
    )
}

export default Community