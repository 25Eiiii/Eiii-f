import React, { useState } from "react";
import { replace, useNavigate } from "react-router-dom";
import * as P from "../styles/pages/styledProfileEdit"
import { useEffect } from "react";
import axios from "axios";

const ProfileEdit = () => {
    const navigate = useNavigate();
    const[profile,setProfile] = useState(null);
    const goBack = () => {
        navigate(`/Profile`,{replace:true});
    }
    useEffect(()=>{
        const loadProfile = async() => {
            try{
                const accessToken = localStorage.getItem("accessToken");
                const response = await axios.get(
                    "/api/accounts/profile/me/",
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            "Content-Type": "application/json"
                        }
                    }
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
    const updateProfile = async()=>{
        try{
            const accessToken = localStorage.getItem("accessToken");
            const response = await axios.put(
                "/api/accounts/profile/me/",
                {
                    username: profile.username,
                    nickname: profile.nickname,
                    major: profile.major,
                    year: profile.year,
                    preferred_gender: profile.preferred_gender,
                    dining_style: profile.dining_style,
                    eating_speed:profile.eating_speed,
                    meal_purpose: profile.meal_purpose,
                    dessert: profile.dessert,
                    preferred_menu: profile.preferred_menu,
                    dietary_restrictions: profile.dietary_restrictions
                },
                {
                    headers:{
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json"
                    }
                }
            );
            alert("저장되었습니다");
        }catch(error){
            console.error("프로필 저장 실패", error);
            alert("저장에 실패했습니다. 다시 시도해주세요.");
        }
    };
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
                <P.NicknameInput
                    value={profile.nickname}
                    placeholder={profile.nickname}
                    onChange={(e)=>setProfile({...profile,nickname:e.target.value})}
                />  
            </P.Nickname>
            <P.Label>
                아이디
            </P.Label>
            <P.FirstDiv>
                <P.Id> {profile.username} </P.Id>
                   
        
                <P.Preview onClick={updateProfile}>
                    저장하기
                </P.Preview>
            </P.FirstDiv>
            <P.Label>
                내 정보
            </P.Label>
            <P.SecDiv>
                <P.Info>
                    학과
                    <P.Input
                        value={profile.major}
                        placeholder={profile.major}
                        onChange={(e)=>setProfile({...profile,major: e.target.value})}
                    />
                </P.Info>
                 <P.Info>
                    학번
                    <P.Input
                        value={profile.year}
                        placeholder={profile.year}
                        onChange={(e)=>setProfile({...profile,year:e.target.value})}
                    />
                </P.Info>
                 <P.Info>
                    매칭 타입
                    <P.Input
                        value={profile.preferred_gender}
                        placeholder={profile.preferred_gender}
                        onChange={(e)=>setProfile({...profile,preferred_gender:e.target.value})}
                    />
                </P.Info>
                 <P.Info>
                    식사 스타일
                    <P.Input
                        value={profile.dining_style}
                        placeholder={profile.dining_style}
                        onChange={(e)=>setProfile({...profile,dining_style:e.target.value})}
                    />
                </P.Info>
                 <P.Info>
                    식사 속도
                    <P.Input
                        value={profile.eating_speed}
                        placeholder={profile.eating_speed}
                        onChange={(e)=>setProfile({...profile,eating_speed:e.target.value})}
                    />
                </P.Info>
                 <P.Info>
                    밥약 목적
                    <P.Input
                        value={profile.meal_purpose}
                        placeholder={profile.meal_purpose}
                        onChange={(e)=>setProfile({...profile,meal_purpose:e.target.value})}
                    />
                </P.Info>
                 <P.Info>
                    선호 메뉴
                    <P.Input
                        value={profile.preferred_menu}
                        placeholder={profile.preferred_menu}
                        onChange={(e)=>setProfile({...profile,preferred_menu:e.target.value})}
                    />
                </P.Info>
                 <P.Info>
                    디저트 여부
                    <P.Input
                        value={profile.dessert}
                        placeholder={profile.dessert}
                        onChange={(e)=>setProfile({...profile,dessert:e.target.value})}
                    />
                </P.Info>
                 <P.Info>
                    특이사항
                    <P.Input
                        value={profile.dietary_restrictions}
                        placeholder={profile.dietary_restrictions}
                        onChange={(e)=>setProfile({...profile,dietary_restrictions:e.target.value.split(",")})}
                    />
                </P.Info>

            </P.SecDiv>
        </P.Container>

    );
};

export default ProfileEdit;