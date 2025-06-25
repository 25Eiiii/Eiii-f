import * as D from "../styles/pages/styledCmDetail"

const Detail = () => {

    return (
        <D.Container>
            <D.Header>
                <D.Back>
                    <img 
                        id="back"
                        src={`${process.env.PUBLIC_URL}/images/back.svg`}
                        alt="back"
                    />
                </D.Back>
                    <img 
                        id="search"
                        src={`${process.env.PUBLIC_URL}/images/search.svg`}
                        alt="search"
                    />
                <D.Title>선후배 밥약
                    <img 
                        id="meal"
                        src={`${process.env.PUBLIC_URL}/images/meal.svg`}
                        alt="meal"
                    />
                </D.Title>
            </D.Header>
            <D.Detail>
                <D.Profile>
                    <D.Pic>
                        <img 
                        src={`${process.env.PUBLIC_URL}/images/avatar.svg`}
                        alt="img"
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
                <D.Big>새로 생긴 훠궈집 같이 가실 분 4분 구해요!</D.Big>
                <D.Content>
                    <p>4명이서 같이 가면 개업 이벤트로 20퍼 할인 해준대요!! 그 달에 생일인 사람있는 테이블은 추가로 10퍼 할인 더 해준다는데 같이 가요~~~!!! 저 5월 생일이에요!!!! 후배 선배 상관 없이 다 좋습니다 ㅎㅎ 엄청 맛있어보이죠~~!!!</p>
                    <D.Food>
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/food.svg`}
                        alt="food"
                    />
                    </D.Food>   
                </D.Content>
                <D.Bottom>
                <D.Like>
                    <D.IconImg src={`${process.env.PUBLIC_URL}/images/heart.svg`} alt="heart"/>
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
                <D.Profile>
                    <D.Pic>
                        <img 
                        src={`${process.env.PUBLIC_URL}/images/avatar.svg`}
                        alt="img"
                        />
                    </D.Pic>
                    <D.Infos>
                        <D.Info1 variant="cmt">
                            <D.Name>김치삼겹살</D.Name>
                            <D.Time>5분 전</D.Time>
                        </D.Info1>
                        <D.Info2>
                            성악과26
                        </D.Info2>
                    </D.Infos>
                    <D.Apply>대화 신청</D.Apply>
                </D.Profile>
                <D.Content variant="cmt">
                    <p>
                    헐 저요!!! 저 가보고 싶었는데 ㅎㅎㅎㅎㅎㅎㅎ <br />
                    거기 후기가 엄청 좋던데요??? <br />
                    새내기인데 괜찮으시면 같이 가요 선배님
                    </p>
                    <D.CBtm>
                    <D.Good>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/good.svg`}
                            alt="good"
                        />
                        좋아요 1개
                    </D.Good>
                    <D.Comment>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/comment.svg`}
                            alt="comment"
                        />
                        답글 달기
                    </D.Comment>
                </D.CBtm>
                </D.Content>
                <D.C2>
                <D.Profile>
                    <D.Pic>
                        <img 
                        src={`${process.env.PUBLIC_URL}/images/avatar.svg`}
                        alt="img"
                        />
                    </D.Pic>
                    <D.Infos>
                        <D.Info1 variant="cmt">
                            <D.Name>오리고기 먹고싶다</D.Name>
                            <D.Time>방금</D.Time>
                        </D.Info1>
                        <D.Info2>
                            정보통계학과21
                        </D.Info2>
                    </D.Infos>
                    <D.Apply>대화 신청</D.Apply>
                </D.Profile>
                <D.Content variant="cmt">
                    <p>오 대박! 너무 좋죠 !!!!!!!! 대화 신청 걸게요!!!</p>
                <D.CBtm>
                    <D.Good>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/good.svg`}
                            alt="good"
                        />
                        좋아요
                    </D.Good>
                </D.CBtm>
                </D.Content>
                </D.C2>
            </D.Comments>
            <D.Line2></D.Line2>
            <D.Write>
                <img 
                    src={`${process.env.PUBLIC_URL}/images/cam.svg`}
                    alt="cam"
                />
                <D.Here placeholder="댓글을 입력해 주세요."></D.Here>
                <D.Btn>등록</D.Btn>
            </D.Write>
        </D.Container>

    );
};

export default Detail;