import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import * as S from "../styles/pages/styledSignUp";
import axios from "axios";

const SignUp = () => {
    const navigate = useNavigate();

    const [id,setId] = useState("");
    const [nickname,setNickname] = useState("");
    const [password,setPassword] = useState("");
    const [passwordCheck,setPasswordCheck] = useState("");
    const [email,setEmail] = useState("");
    const [phoneNum,setPhoneNum] = useState("");
    
    const [errors,setErrors] = useState({});

    const goSignUp = async() =>{
        const newErrors={};

        if(!id) newErrors.id = "필수 입력 사항입니다.";
        if(!nickname) newErrors.nickname = "필수 입력 사항입니다.";
        if(!password) newErrors.password = "필수 입력 사항입니다.";
        if(!passwordCheck) newErrors.passwordCheck = "필수 입력 사항입니다.";
        if(!email) newErrors.email = "필수 입력 사항입니다.";
        if(!phoneNum) newErrors.phoneNum = "필수 입력 사항입니다.";

        setErrors(newErrors);
        

        if(Object.keys(newErrors).length>0) return;

        try{
            const response = await axios.post(
                "/api/accounts/signup/",
                {
                    "username": id,
                    "nickname": nickname,
                    "password":password,
                    "password2": passwordCheck,
                    "email": email,
                    "phone": phoneNum
                },
                {
                    headers:{
                        "Content-Type":"application/json"
                    }
                }
            
            );

            alert(response.data.message);
            navigate(`/`);

        }catch(error){
            if(error.response && error.response.data){
                const serverErrors = error.response.data;
                const newErrors = {};

                if(serverErrors.username){
                    const usernameMsg = serverErrors.username;

                    if(usernameMsg.includes("custom user with this username already exists.")){
                        newErrors.id = "이 사용자 아이디는 이미 존재합니다."
                    }
                } 
                if(serverErrors.password) newErrors.password = serverErrors.password;
                if(serverErrors.password2) newErrors.passwordCheck = serverErrors.password2[0];
                if(serverErrors.email) {
                    const emailMsg = serverErrors.email;

                    if(emailMsg.includes("custom user with this email already exists.")){
                        newErrors.email = "이미 가입된 이메일입니다.";
                    }else{
                        newErrors.email = "이메일 형식이 올바르지 않습니다."
                    }
                }
   

                setErrors(newErrors);
            }
        }
        
    }
 return(
    <S.Container>
        <S.Title>회원 정보를 입력해주세요.</S.Title>
        <S.Label>아이디</S.Label>
        <S.Input
            value={id}
            onChange={(e)=>setId(e.target.value)}
            placeholder="사용하실 아이디를 입력해주세요."
            error={errors.id}
        />
        <S.Error>{errors.id}</S.Error>
        <S.Label>닉네임</S.Label>
        <S.Input
            value={nickname}
            onChange={(e)=>setNickname(e.target.value)}
            placeholder="사용하실 닉네임을 입력해주세요."
            error={errors.nickname}
        />
        <S.Error>{errors.nickname}</S.Error>
        <S.Label>비밀번호</S.Label>
        <S.Input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="영어,숫자를 포함한 8~20자리를 입력해주세요."
            error={errors.password}
            type="password"
        />
        <S.Error>{errors.password}</S.Error>
        <S.Input
            value={passwordCheck}
            onChange={(e)=>setPasswordCheck(e.target.value)}
            placeholder="비밀번호를 다시 입력해주세요."
            error={errors.passwordCheck}
            type="password"
        />
        <S.Error>{errors.passwordCheck}</S.Error>
        <S.Label>이메일</S.Label>
        <S.Input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="이메일을 입력해 주세요."
            error={errors.email}
        />
        <S.Error>{errors.email}</S.Error>
        <S.Label>전화번호</S.Label>
        <S.Input
            value={phoneNum}
            onChange={(e)=>setPhoneNum(e.target.value)}
            placeholder="전화번호를 입력해주세요."
            error={errors.phoneNum}
        />
        <S.Error>{errors.phoneNum}</S.Error>
        <S.SignUpBtn onClick={goSignUp}>
            가입하기
        </S.SignUpBtn>
    </S.Container>

 );
};
export default SignUp;