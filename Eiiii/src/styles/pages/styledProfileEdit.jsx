import {styled} from "styled-components";

export const Container = styled.div`
 position: relative;
  margin: 0 auto;
  width: 440px;
  height: 956px;
 background: linear-gradient(180deg, #FFF 0%, #FFDA79 100%);
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  border: 1px solid #6A5656;
  margin-top:10vh;
  overflow-y: scroll;
  scrollbar-width: none;
`;

export const Header= styled.div`
display: flex;
justify-content: space-between;
width: 440px;
flex-shrink: 0;
border-top-left-radius: 30px;
border-top-right-radius: 30px;
gap: 110px;
`;

export const BackBtn = styled.button`
display: flex;
justify-content: center;
align-itmes: center;
width: 32px;
height: 31px;
flex-shrink: 0;
border: none;
background: #F8B621;
border-radius: 5px;
margin-top: 63px;
margin-left: 32px;
`;

export const Center = styled.div`
display: flex;
width: 94px;
height: 30px;
flex-shrink: 0;
color: #F8B621;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 50px;
`;

export const BellBtn = styled.button`
display: flex;
justify-content: center;
align-itmes: center;
width: 32px;
height: 31px;
flex-shrink: 0;
border: none;
background: #F8B621;
border-radius: 5px;
margin-top: 63px;
margin-right: 35px;
`;

export const PhotoFrame = styled.div`
width: 217px;
height: 217px;
flex-shrink: 0;
background: linear-gradient(180deg, #FFCBCB 0%, #F99505 100%);
border-radius: 100%;
display:flex;
justify-content: center;
align-items: center;
margin-top: 28px;
position: relative;
`;

export const Photo = styled.div`
width: 196px;
height: 196px;
flex-shrink: 0;
background: #FFDA79;
border: 3px solid #FFF;
border-radius: 100%;
display:flex;
justify-content: center;
align-items: center;
`;

export const Nickname = styled.div`
width: 159px;
height: 32px;
flex-shrink: 0;
border-radius: 21px;
background: #F9970E;
margin-top: 13px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 2px;
`;
export const NicknameInput = styled.input`
width: 138px;
height: 18px;
flex-shrink: 0;
border:none;
outline:none;
background: #F9970E;
text-align: center;
color: #FFF;
&::placeholder{
color: #FFF;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`;
export const FirstDiv = styled.div`
display: flex;
`;

export const Id = styled.div`

width: 165px;
height: 51px;
flex-shrink: 0;
border-radius: 11px;
background: #F8B621;
color: #5D5A50;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
border: none;
outline: none;
margin-right: 16px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
padding: 0;
border: 2px solid #FFF;
cursor: default;
&::placeholder{
color: #5D5A50;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`;

export const Preview = styled.button`
width: 169px;
height: 55px;
flex-shrink: 0;
border-radius: 11px;
background: #FFD138;
color: #5D5A50;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
border: none;
outline: none;
border: 2px solid #FFF;
padding: 0;
cursor: pointer;
`;

export const Label = styled.div`
align-self: flex-start;
color: #5D5A50;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-left: 35px;
margin-top: 5px;
margin-bottom: 5px;
`;

export const SecDiv = styled.div`

`;

export const Info = styled.div`
width: 345px;
height: 51px;
flex-shrink: 0;
border-radius: 11px;
background: #F8B621;
display: flex;
justify-content: space-between;
align-items: center;
color: #5D5A50;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom: 7px;
padding-left: 10px;
border: 2px solid #FFF;

`;

export const Input = styled.input`
width: 224px;
height: 22px;
flex-shrink: 0;
border-radius: 10px;
background: #FFF;
border: none;
outline: none;
text-align: center;
margin-right: 19px;
box-sizing: border-box;
font-family: Inter;
font-size: 13px;
font-weight: 600;
line-height: normal;
padding: 0 0 2px 0;

&::placeholder{
color: #8E8E8E;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-align: center;
}
`;

