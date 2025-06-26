import {styled} from "styled-components";

export const Container = styled.div`
position: relative;
  margin: 0 auto;
  width: 440px;
  height: 956px;
  background: #FFFFFF;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  border: 1px solid #6A5656;
  margin-top:10vh;
background: linear-gradient(180deg, #FEE790 0%, #FFA500 100%);
`;

export const Logo = styled.div`
margin-top: 253px;
`;

export const Id = styled.input`
width: 276px;
height: 55px;
flex-shrink: 0;
border-radius: 32px;
background: #FFF;
border: none;
margin-top: 36px;
margin-bottom: 12px;

font-family: "Spoqa Han Sans Neo";
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-align: center;
outline: none;
color:#868686;
&::placeholder{
    color: #F99505;
}
`;

export const Password = styled.input`
width: 276px;
height: 55px;
flex-shrink: 0;
border-radius: 32px;
background: #FFF;
border: none;
margin-bottom: 12px;
color:#868686;
font-family: "Spoqa Han Sans Neo";
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-align: center;
outline:none;
&::placeholder{
    color: #F99505;
}
`;

export const LoginBtn = styled.button`
width: 276px;
height: 55px;
flex-shrink: 0;
border-radius: 32px;
background: #F99505;
color: #F6F6F6;
font-family: "Spoqa Han Sans Neo";
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
border: none;
margin-bottom: 12px;
`;

export const SignUp = styled.div`
width: 62px;
height: 17px;
flex-shrink: 0;
color: #FFF;

font-family: "Spoqa Han Sans Neo";
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;
cursor: default;
`;