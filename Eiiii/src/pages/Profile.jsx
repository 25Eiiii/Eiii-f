import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styles/pages/styledProfile"

const Profile = () => {
    const navigate = useNavigate();
    const goEdit = () => {
        navigate(`/ProfileEdit`)
    }
    const goBack = () => {
        navigate(-1)
    }
    const [isClick,setClick] = useState(false);
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

                <P.Edit onClick={goEdit}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/edit.svg`}
                        alt="logo"
                        width="25px"
                    />
                </P.Edit>
            </P.PhotoFrame>
            
            <P.Nickname>
                붕어빵 좋아하는 병아리                
            </P.Nickname>
            <P.Label>
                아이디
            </P.Label>
            <P.FirstDiv>
                <P.Id>
                    @uoyhmn
                </P.Id>
                <P.Preview onClick={()=>setClick(true)}>
                    미리보기
                </P.Preview>
            </P.FirstDiv>
            <P.Box style={{display: isClick? "block":"none"}}
            onClick={()=>setClick(false)}>
                <P.PreviewBox>
                    <P.Text>
                        미리 보기
                    </P.Text>
                    <P.PhotoFrame>
                        <P.Photo>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/chick.svg`}
                                alt="logo"
                                width="109px"
                            />
                        </P.Photo>
                    </P.PhotoFrame>
                    <P.Name>
                        밥먹는 하마
                    </P.Name>
                    <P.PreviewId>
                        @uoyhmn
                    </P.PreviewId>
                    <P.PreviewInfo>
                        디지털 공예과 / 22
                    </P.PreviewInfo>
                    <P.PreviewInfo>
                        같은 성별만
                    </P.PreviewInfo>
                    <P.PreviewInfo>
                        가벼운 수다
                    </P.PreviewInfo>
                    <P.PreviewInfo>
                        천천히 먹는 편
                    </P.PreviewInfo>
                    <P.PreviewInfo>
                        친목 / 친구 사귀기
                    </P.PreviewInfo>
                    <P.PreviewInfo>
                        한식
                    </P.PreviewInfo>
                    <P.PreviewInfo>
                        꼭 함께 하고 싶음
                    </P.PreviewInfo>
                    <P.PreviewInfo>
                        채식/ 비건
                    </P.PreviewInfo>
                </P.PreviewBox>
            </P.Box>
            <P.Label>
                내 정보
            </P.Label>
            <P.SecDiv>
                <P.Info>
                    학과
                    <P.Input>
                        디지털 공예과
                    </P.Input>
                </P.Info>
                 <P.Info>
                    학번
                    <P.Input>
                        22
                    </P.Input>
                </P.Info>
                 <P.Info>
                    매칭 타입
                    <P.Input>
                        같은 성별만
                    </P.Input>
                </P.Info>
                 <P.Info>
                    식사 스타일
                    <P.Input>
                        가벼운 수다
                    </P.Input>
                </P.Info>
                 <P.Info>
                    식사 속도
                    <P.Input>
                        천천히 먹는 편
                    </P.Input>
                </P.Info>
                 <P.Info>
                    밥약 목적
                    <P.Input>
                        친목 / 친구 사귀기
                    </P.Input>
                </P.Info>
                 <P.Info>
                    선호 메뉴
                    <P.Input>
                        한식
                    </P.Input>
                </P.Info>
                 <P.Info>
                    디저트 여부
                    <P.Input>
                        꼭 함께 하고 싶음
                    </P.Input>
                </P.Info>
                 <P.Info>
                    특이사항
                    <P.Input>
                        채식 / 비건
                    </P.Input>
                </P.Info>

            </P.SecDiv>
        </P.Container>

    );
};

export default Profile; 