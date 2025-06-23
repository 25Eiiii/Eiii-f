import { styled } from "styled-components"

export const Container = styled.div`
    width: 440px;
    height: 956px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 30px;
    border: 1px solid #6A5656;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    overflow: hidden;
`

export const Card = styled.div`
width: 326.743px;
height: 584.859px;
flex-shrink: 0;
border-radius: 18px;
border: 4px solid #FFFFFF;
background: linear-gradient(180deg, #FFE8AA 0%, #FCBD14 100%);
display: flex;
flex-direction: column;
`

export const Text = styled.div`
width: 147px;
height: 31px;
flex-shrink: 0;
color: #645D5B;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 20px;
`

export const ProfileImg = styled.img`
background-image: url(${`${process.env.PUBLIC_URL}/images/circle.svg`});
width: 188.766px;
height: 188.766px;
flex-shrink: 0;
border-radius: 50%;
`;
export const Profile1 = styled.div`
    width: 66.89px;
    height: 31.09px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-top: -20px;
`
export const Nickname = styled.div`
width: 108.573px;
height: 25.607px;
flex-shrink: 0;
border-radius: 21px;
border: 2px solid #FFBC24;
background: #FFF;
color: #5D5A50;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 600;
line-height: normal;
    display:flex;
    justify-content: center;
    align-items: center;
`;

export const UserId = styled.div`
width: 125.985px;
height: 25.607px;
flex-shrink: 0;
border-radius: 21px;
border: 2px solid #FFBC24;
background: #FFF;
color: #5D5A50;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 600;
line-height: normal;
    display:flex;
    justify-content: center;
    align-items: center;
    
`;

export const Profile2 = styled.div`
 margin-top: 50px;
 display: flex;
 flex-direction: column;
 gap: 9.26px;

`
export const Detail = styled.div`
width: 232.33px;
height: 21.289px;
flex-shrink: 0;
border-radius: 11.5px;
background: #FFF;
color: #8E8B80;
text-align: center;
font-family: Inter;
font-size: 11px;
font-style: normal;
font-weight: 600;
line-height: normal;

`
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

// 상세 카드 전체 박스
export const DetailCardWrapper = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
width: 326.743px;
height: 584.859px;
flex-shrink: 0;
border-radius: 18px;
border: 4px solid #FFF;
background: linear-gradient(180deg, #FFE8AA 0%, #FCBD14 100%);
  padding: 20px;
  z-index: 11;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

