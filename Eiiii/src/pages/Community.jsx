import * as M from "../styles/pages/styledCommunity"
import NavBar from "../components/NavBar"

const Community = () => {

    return (
        <M.Container>
        <M.Header>
            <M.Back>
                <img 
                    id="search"
                    src={`${process.env.PUBLIC_URL}/images/search.svg`}
                    alt="search"
                />
            </M.Back>
            <M.Search>
                <img 
                    id="search"
                    src={`${process.env.PUBLIC_URL}/images/search.svg`}
                    alt="search"
                />
            </M.Search>
            <M.Title>선후배 밥약
                <img 
                    id="meal"
                    src={`${process.env.PUBLIC_URL}/images/meal.svg`}
                />
            </M.Title>
        </M.Header>
        <M.Wrapper>
            <M.Profile>
                <M.Pic></M.Pic>
                <M.Info>
                    <M.Name>밥먹는 하마</M.Name>
                    <M.Time>방금</M.Time>
                </M.Info>
                <M.Info2>
                성악과 22학번
                <img 
                src={`${process.env.PUBLIC_URL}/images/dote.svg`}
                />
                23살
                </M.Info2>
                
            </M.Profile>
            <M.Content>
                가나다라마바사 아자차카 타파아 글을써보십다
                두줄까진 허용입니다. 더이상 보고싶으면 더보기를 클릭DSADASD
                <M.Etc>더보기</M.Etc>
            </M.Content>
            <M.Bottom>
                <M.Like>
                    <img 
                    src={`${process.env.PUBLIC_URL}/images/heart.svg`}
                    />
                    5
                </M.Like>
                <M.Comment>
                    <img 
                    src={`${process.env.PUBLIC_URL}/images/comment.svg`}
                    />
                    5
                </M.Comment>
                <M.Scrap>
                    <img 
                    src={`${process.env.PUBLIC_URL}/images/scrap.svg`}
                    />
                    5   
                </M.Scrap>
                <M.More>
                    <img 
                    src={`${process.env.PUBLIC_URL}/images/more.svg`}
                    />
                </M.More>
            </M.Bottom>
        </M.Wrapper>
        <M.Btn>글쓰기</M.Btn>
        <NavBar></NavBar>
        </M.Container>
    )
}

export default Community