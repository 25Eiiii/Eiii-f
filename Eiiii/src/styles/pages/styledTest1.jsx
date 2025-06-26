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

export const Progress = styled.div`
width: 387px;
height: 8px;
flex-shrink: 0;
border-radius: 3px;
background: #FEE790;
margin-top: 101px;
`;

export const Progressbar = styled.div`
width: 334px;
height: 8px;
flex-shrink: 0;
border-radius: 3px;
background: #F8B621;

`;

export const Text1 = styled.div`
width: 382px;
color: #606060;
font-family: "Spoqa Han Sans Neo";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 37px; /* 185% */
margin-top: 44px;
`;

export const Text2 = styled.div`
width: 382px;
color: #606060;
font-family: "Spoqa Han Sans Neo";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 37px; /* 185% */
margin-bottom: 40px
`;

export const Major = styled.div`
color: #606060;
font-family: "Spoqa Han Sans Neo";
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
align-self: flex-start;
margin-left: 25px;
margin-bottom: 5px;
`;

export const Input = styled.input`
width: 387px;
height: 57px;
flex-shrink: 0;
border-radius: 11px;
border: 2px solid #FFB100;
color: #606060;
&::placeholder{
color: #A0A0A0;
font-family: "Spoqa Han Sans Neo";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
outline: none;
}
margin-bottom: 29px;
text-align: center;
outline: none;
`;

export const IdNum = styled.div`
display: flex;
color: #606060;
font-family: "Spoqa Han Sans Neo";
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
align-self: flex-start;
margin-left: 25px;
margin-bottom: 5px;
`;

export const Ex = styled.div`
color: #A6A6A6;
font-family: "Spoqa Han Sans Neo";
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const Btn = styled.div`
display: flex;
justify-content: space-between;
margin-top: 350px;
gap: 317px;
`;
export const BackBtn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const NextBtn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Backtext = styled.div`
color: #FFDF66;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-align: center;
padding-top: 0px;
`;

export const Nexttext = styled.div`
color: #FFDF66;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-align: center;
padding-top: 0px;
`;