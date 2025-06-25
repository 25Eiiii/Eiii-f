import * as M from "../styles/pages/styledCommunity"
import NavBar from "../components/NavBar"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"

const Community = () => {
    const navigate = useNavigate()

    return (
        <M.Container>
        <Header
            onClickLeft={() => navigate(-1)}
            titleText="선후배 밥약"
            titleImg="meal"
            rightIcon="search"
        />
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
        </M.Container>
    )
}

export default Community