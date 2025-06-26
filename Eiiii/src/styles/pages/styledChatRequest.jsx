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

export const SearchBar = styled.div`
    width: 402px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FEE790;

    #search {
        margin-left: 10px;
        margin-top: 6px;
    }
`

export const Tabs = styled.div`
    display: flex;
    align-self: flex-end;
    margin-right: 24.15px;
    gap: 8.05px;
    margin-top: 10px;
`
export const TabWrapper = styled.div`
    position: relative;
`

export const Tab = styled.div`
    border: ${(props) => (props.active === "true" ? "2px solid #F28C26" : "1px solid #F8B621")};
    box-sizing: border-box;
    width: 64.4px;
    height: 23px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFFFFF;
    color: #F28C26;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    justify-content: center;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const Badge = styled.div`
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    background: #FF3E3E;
    border-radius: 50%;
    position: absolute;
    top: -6px;
    right: -3px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ReqWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 29px;
    margin-top: 28px;

`

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    gap: 14px;
`

export const ProfileImg = styled.div`
    width: 54px;
    height: 49px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #FFD667;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    display: flex;
    width: 311.545px;
    height: 45.035px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #FFD667;
    align-items: center;
    justify-content: space-between;
    padding: 0 17px;
`

export const Info = styled.div`
    color: #666666;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
`

export const Del = styled.div`
    width: 29.233px;
    height: 28px;
    flex-shrink: 0;
    background: #FFFFFF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BackgroundOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #888376;
    opacity: 0.7;
    z-index: 10;
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 11;
    margin-top: -105px;
`;

export const Ok = styled.button`
    width: 305px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 11px;
    background: #F8B621;
    color: #ffffff;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
    border: none;
    &:active {
        background: #F99505;
    };

`

export const Rej = styled.button`
    width: 305px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 11px;
    background: #F8B621;
    color: #ffffff;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
    border: none;
    &:active {
        background: #F99505;
    };

`

export const PreviewBox = styled.div`
margin-left: 40px;
margin-top: 130px;
display: flex;
flex-direction: column;
align-items: center;
width: 353px;
height: 631.859px;
flex-shrink: 0;
border-radius: 18px;
border: 4px solid #FFF;
background: linear-gradient(180deg, #FFE8AA 0%, #FCBD14 100%);
`;

export const Text = styled.div`
color: #F8B621;
text-align: center;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
width: 98px;
height: 32px;
flex-shrink: 0;

`;

export const Name = styled.div`
width: 117.298px;
height: 27.665px;
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
text-align: center;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
bottom: 540px;
`;

export const PreviewId = styled.div`
width: 136.11px;
height: 27.665px;
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
text-align: center;
display: flex;
justify-content: center;
align-items: center;
margin-top: 8px;
margin-bottom: 26px;
`;

export const PreviewInfo = styled.div`
width: 251px;
height: 23px;
flex-shrink: 0;
border-radius: 11.5px;
background: #FFF;
color: #8E8B80;
text-align: center;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom: 11px;
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