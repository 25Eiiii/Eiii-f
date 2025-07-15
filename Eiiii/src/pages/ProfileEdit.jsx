import React from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styles/pages/styledProfileEdit"

const ProfileEdit = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(`/Profile`,{replace:true});
    }
    return (
        <P.Container>
            <P.Header>
                <P.BackBtn onClick={goBack}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/back.svg`}
                        alt="logo"
                        width="11px"
                    
                    />
                </P.BackBtn>
                <P.Center>
                    profile
                    <img
                        src={`${process.env.PUBLIC_URL}/images/meal.svg`}
                        alt="logo"
                        width="22px"
                    />
                </P.Center>
                <P.BellBtn>
                     <img
                        src={`${process.env.PUBLIC_URL}/images/ring.svg`}
                        alt="logo"
                        width="28px"
                    />
                </P.BellBtn>
            </P.Header>
            <P.PhotoFrame>
                <P.Photo>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/chick.svg`}
                        alt="logo"
                        width="109px"
                    />
                </P.Photo>
            </P.PhotoFrame>
            
            <P.Nickname>
                붕어빵 좋아하는 병아리                
            </P.Nickname>
            <P.Label>
                아이디
            </P.Label>
            <P.FirstDiv>
                <P.Id
                    placeholder="@uoyhmn"
                />
                <P.Preview>
                    미리보기
                </P.Preview>
            </P.FirstDiv>
            <P.Label>
                내 정보
            </P.Label>
            <P.SecDiv>
                <P.Info>
                    학과
                    <P.Input
                        placeholder="디지털 공예과"
                    />
                </P.Info>
                 <P.Info>
                    학번
                    <P.Input
                        placeholder="22"
                    />
                </P.Info>
                 <P.Info>
                    매칭 타입
                    <P.Input
                        placeholder="같은 성별만"
                    />
                </P.Info>
                 <P.Info>
                    식사 스타일
                    <P.Input
                        placeholder="가벼운 수다"
                    />
                </P.Info>
                 <P.Info>
                    식사 속도
                    <P.Input
                        placeholder="천천히 먹는 편"
                    />
                </P.Info>
                 <P.Info>
                    밥약 목적
                    <P.Input
                        placeholder="친목 / 친구 사귀기"
                    />
                </P.Info>
                 <P.Info>
                    선호 메뉴
                    <P.Input
                        placeholder="한식"
                    />
                </P.Info>
                 <P.Info>
                    디저트 여부
                    <P.Input
                        placeholder="꼭 함께 하고 싶음"
                    />
                </P.Info>
                 <P.Info>
                    특이사항
                    <P.Input
                        placeholder="채식 / 비건"
                    />
                </P.Info>

            </P.SecDiv>
        </P.Container>

    );
};

export default ProfileEdit;