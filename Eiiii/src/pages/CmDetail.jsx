import * as D from "../styles/pages/styledCmDetail"

const Detail = () => {

    return (
        <D.Container>
            <D.Header>
                <D.Back>
                    <img 
                        id="search"
                        src={`${process.env.PUBLIC_URL}/images/back.svg`}
                        alt="search"
                    />
                </D.Back>
                <D.Search>
                    <img 
                        id="search"
                        src={`${process.env.PUBLIC_URL}/images/search.svg`}
                        alt="search"
                    />
                </D.Search>
                <D.Title>선후배 밥약
                    <img 
                        id="meal"
                        src={`${process.env.PUBLIC_URL}/images/meal.svg`}
                    />
                </D.Title>
            </D.Header>
            <D.Detail>
                <D.Profile>
                    <D.Pic>
                        <img 
                        src={`${process.env.PUBLIC_URL}/images/avatar.svg`}
                        />
                    </D.Pic>
                    <D.Infos>
                        <D.Info1>
                            <D.Name>오리고기 먹고싶다</D.Name>
                            <D.Time>10분 전</D.Time>
                        </D.Info1>
                        <D.Info2>
                            정보통계학과 21학번 / 24살
                        </D.Info2>
                    </D.Infos>
                    <D.Apply>대화 신청</D.Apply>
                </D.Profile>
                <D.Content>
                    <D.Big>새로 생긴 훠궈집 같이 가실 분 4분 구해요!</D.Big>
                    <p>4명이서 같이 가면 개업 이벤트로 20퍼 할인 해준대요!! 그 달에 생일인 사람있는 테이블은 추가로 10퍼 할인 더 해준다는데 같이 가요~~~!!! 저 5월 생일이에요!!!! 후배 선배 상관 없이 다 좋습니다 ㅎㅎ 엄청 맛있어보이죠~~!!!</p>
                    <D.Food>
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/food.svg`}
                    />
                    </D.Food>   
                </D.Content>
                <D.Bottom>
                <D.Like>
                    <D.IconImg src={`${process.env.PUBLIC_URL}/images/heart.svg`} />
                    좋아요 5개
                </D.Like>
                <D.Comment>
                    <D.IconImg src={`${process.env.PUBLIC_URL}/images/comment.svg`} />
                    댓글 2개
                </D.Comment>
                <D.Share>
                    <D.IconImg src={`${process.env.PUBLIC_URL}/images/share.svg`} />
                    공유
                </D.Share>
                </D.Bottom>
            </D.Detail>
            <D.Line></D.Line>
            <D.Comments>
                <D.C1>

                </D.C1>
                <D.Line2></D.Line2>
                <D.C2>

                </D.C2>
            </D.Comments>
        </D.Container>

    );
};

export default Detail;