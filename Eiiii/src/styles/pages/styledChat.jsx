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

export const Header = styled.div`
    flex-shrink: 0;
    gap: 105px;
    display: flex;
    align-items: center;
    margin: 60px 27px 17px 27px;
`

export const Btn = styled.div`
    width: 32px;
    height: 31px;
    flex-shrink: 0;
    background: #F8B621;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`

export const Title = styled.div`
    width: 113px;
    height: 32px;
    flex-shrink: 0;
    color: #F8B621;
    text-align: center;
    font-family: Inter;
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const SearchBar = styled.div`
    width: 402px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FEE790;
    margin-top: 9px;

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
    background: ${(props) => (props.active ? "#ffffff" : "transparent")};
    border: ${(props) => (props.active ? "1px solid #d59b00" : "none")};
    width: 64.4px;
    height: 23px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 2px solid #F28C26;
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

export const List = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #EFBE78;
    margin-top: 15px;
`

export const Item = styled.div`
    display: flex;
    padding: 12px 16px;
    border-bottom: 1px solid #EFBE78;
`

export const Profile = styled.img`
    width: 54px;
    height: 49px;
    flex-shrink: 0;
    border-radius: 18px;
    background: #FFD667;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Text = styled.div`
    margin-left: 13px;
`

export const Line1 = styled.div`
    display: flex;
    gap: 5px;
    align-items: flex-end;
    margin-bottom: 7px;
`

export const Name = styled.div`
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    `

export const Info = styled.div`
    color: #706963;
    font-family: "Spoqa Han Sans Neo";
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 11px */
`

export const Line2 = styled.div`
`

export const Msg = styled.div`
    color: #BAAEA5;
    font-family: "Spoqa Han Sans Neo";
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 13px */
`

export const Time = styled.div`
    display: flex;
    color: #BAAEA5;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 10px */
    `