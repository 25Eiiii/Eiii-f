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
width: 300px;
height: 8px;
flex-shrink: 0;
border-radius: 3px;
background: #F8B621;

`;

export const Text1 = styled.div`
width: 382px;
height: 92px;
flex-shrink: 0;
color: #606060;

font-family: "Spoqa Han Sans Neo";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 37px; /* 185% */
margin-top:43px;
margin-bottom: 43px;
`;

export const Option1 = styled.button`
width: 387px;
height: 57px;
flex-shrink: 0;
border-radius: 11px;
border: 2px solid #FFB100;
color: #797070;
text-align: center;
font-family: "Spoqa Han Sans Neo";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 18px;
background: ${({selected})=>(selected ? "#FFB100" : "#FFF")};
`;

export const Option2 = styled.button`
width: 387px;
height: 57px;
flex-shrink: 0;
border-radius: 11px;
border: 2px solid #FFB100;
color: #797070;
text-align: center;
font-family: "Spoqa Han Sans Neo";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
background: ${({selected})=>(selected ? "#FFB100" : "#FFF")};

`;

export const Btn = styled.div`
display: flex;
justify-content: space-between;
margin-top: 434px;
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