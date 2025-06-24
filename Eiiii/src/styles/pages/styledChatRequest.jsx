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

export const ReqWrapper = styled.div`

`

export const Item = styled.div`

`

export const Profile = styled.div`

`

export const Content = styled.div`

`

export const Info = styled.div`

`

export const Del = styled.div`

`