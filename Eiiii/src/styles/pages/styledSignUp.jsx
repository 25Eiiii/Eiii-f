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
`;

export const Title = styled.div`
margin-top: 97px;
margin-bottom: 27px;
 width: 382px;
height: 34px;
flex-shrink: 0;
color: #383838;
font-family: "Spoqa Han Sans Neo";
font-size: 22px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const Label = styled.div`
color: #606060;
font-family: "Spoqa Han Sans Neo";
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
align-self: flex-start;
margin-left: 23px;
margin-bottom: 9px;
`;

export const Input = styled.input`
width: 387px;
height: 49px;
flex-shrink: 0;
border-radius: 11px;
border: 2px solid ${({error})=> (error ? "#FF8000": "#F8B621")};
padding-left: 10px;
color: #B1B1B1;
font-family: "Spoqa Han Sans Neo";
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
outline: none;
`;

export const SignUpBtn = styled.button`
width: 387px;
height: 49px;
flex-shrink: 0;
border-radius: 11px;
background: #9B9B9B;
color: #FFF;
font-family: "Spoqa Han Sans Neo";
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
border: none;
margin-top: 80px;
&:hover{
    background: #FFB100;
}
`;

export const Error = styled.div`
color: #FF8000;
font-family: "Spoqa Han Sans Neo";
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
align-self: start;
margin-left: 20px;
min-height: 10px;
`;