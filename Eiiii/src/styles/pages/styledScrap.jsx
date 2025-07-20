import styled from "styled-components";

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
    margin-bottom: 10px;
`

export const Top = styled.div`
    display: flex;
    width: 100%;
    margin-right: 48px;
`

export const Date = styled.p`
    color: #5A5A5A;
    font-family: "Spoqa Han Sans Neo";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 12px */
    width: 79px;
    height: 14px;
    flex-shrink: 0;
    margin-left: 50px;
`

export const Line = styled.div`
width: 440px;
height: 17px;
flex-shrink: 0;
background: #FEE790;
color: #5A5A5A;
font-family: Inter;
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: 100%; /* 10px */
margin: 8px 0 9px;
display: flex;
align-items: center;
box-sizing: border-box;
padding-left: 27px;
`

export const ScrapWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`
export const Line2 = styled.div`
width: 440px;
height: 1px;
background: #EFBE78;
margin: 7.8px 0 15px;
`
export const Post = styled.div`
display: flex;
flex-direction: column;
border-bottom: 1px solid #EFBE78;
padding: 10px 0;
&:last-child {
border-bottom: none;
}
`

export const Header = styled.div`
display: flex;
align-items: center;
padding: 60px 27px 17px;
width: 100%;
`

export const Back = styled.div`
width: 32px;
height: 31px;
flex-shrink: 0;
background: #F8B621;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
border: none;
cursor: pointer;
margin-left: 23px;
`

export const Search = styled.div`
margin-left: 10px;
`
export const Title = styled.div`
display: flex;
justify-content: center;
height: 32px;
flex-shrink: 0;
color: #F8B621;
text-align: center;
font-family: Inter;
font-size: 21px;
font-style: normal;
font-weight: 600;
line-height: normal;
gap: 5px;
align-items: center;
margin-left: 69px;
`