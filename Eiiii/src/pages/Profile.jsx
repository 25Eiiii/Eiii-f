import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styles/pages/styledProfile"
import { useEffect } from "react";
import axios from "axios";

const Profile = () => {
    const navigate = useNavigate();
    const [profile,setProfile] = useState(null);
    const goEdit = () => {
        navigate(`/ProfileEdit`,{replace:true});
    }
    const goBack = () => {
        navigate(-1)
    }
    const [isClick,setClick] = useState(false);

    useEffect(()=>{
        const loadProfile = async()=> {
            try{
                const accessToken = localStorage.getItem("accessToken");
                const response = await axios.get(
                    "/api/accounts/profile/me/",
                    {
                        headers:{
                            Authorization: `Bearer ${accessToken}`,
                            "Content-Type": "application/json"
                        }
                    },
                );
                setProfile(response.data);
            }catch(error){
                console.error("프로필 조회 실패:",error);
            }
        }
        loadProfile();
    },[]);
    if (!profile) {
        return <div>불러오는 중...</div>;
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

                <P.Edit onClick={goEdit}>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/edit.svg`}
                        alt="logo"
                        width="25px"
                    />
                </P.Edit>
            </P.PhotoFrame>
            
            <P.Nickname>
                {profile.nickname}               
            </P.Nickname>
            <P.Label>
                아이디
            </P.Label>
            <P.FirstDiv>
                <P.Id>
                    {profile.username}
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
                        {profile.nickname}
                    </P.Name>
                    <P.PreviewId>
                        {profile.username}
                    </P.PreviewId>
                    <P.PreviewInfo>
                        {profile.major} / {profile.year}
                    </P.PreviewInfo>
                    <P.PreviewInfo>
                        {profile.preferred_gender}
                    </P.PreviewInfo>
                    <P.PreviewInfo>
                        {profile.dining_style}
                    </P.PreviewInfo>
                    <P.PreviewInfo>
                        {profile.eating_speed}
                    </P.PreviewInfo>
                    <P.PreviewInfo>
                        {profile.meal_purpose}
                    </P.PreviewInfo>
                    <P.PreviewInfo>
                        {profile.preferred_menu}
                    </P.PreviewInfo>
                    <P.PreviewInfo>
                        {profile.dessert}
                    </P.PreviewInfo>
                    <P.PreviewInfo>
                        {profile.dietary_restrictions}
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
                        {profile.major}
                    </P.Input>
                </P.Info>
                 <P.Info>
                    학번
                    <P.Input>
                        {profile.year}
                    </P.Input>
                </P.Info>
                 <P.Info>
                    매칭 타입
                    <P.Input>
                        {profile.preferred_gender}
                    </P.Input>
                </P.Info>
                 <P.Info>
                    식사 스타일
                    <P.Input>
                        {profile.dining_style}
                    </P.Input>
                </P.Info>
                 <P.Info>
                    식사 속도
                    <P.Input>
                        {profile.eating_speed}
                    </P.Input>
                </P.Info>
                 <P.Info>
                    밥약 목적
                    <P.Input>
                        {profile.meal_purpose}
                    </P.Input>
                </P.Info>
                 <P.Info>
                    선호 메뉴
                    <P.Input>
                        {profile.preferred_menu}
                    </P.Input>
                </P.Info>
                 <P.Info>
                    디저트 여부
                    <P.Input>
                        {profile.dessert}
                    </P.Input>
                </P.Info>
                 <P.Info>
                    특이사항
                    <P.Input>
                        {profile.dietary_restrictions}
                    </P.Input>
                </P.Info>

            </P.SecDiv>
        </P.Container>

    );
};

export default Profile; 