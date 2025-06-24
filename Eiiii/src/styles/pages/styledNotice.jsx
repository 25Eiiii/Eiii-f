import {styled} from "styled-components"

export const Container = styled.div`
    width: 440px;
    height: 956px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
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
    margin: 60px 27px 18px 27px;
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
`

export const Title = styled.p`
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

export const Text = styled.div`
    color: #4B4B4B;
    font-family: "Spoqa Han Sans Neo";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 27px;
`

export const NoticeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 13px;
    gap: 13px;
`

export const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #EFBE78;
    gap: 8px;
    padding: 12px 21px;
`

export const Icon = styled.div`
width: 34px;
height: 34px;
flex-shrink: 0;
background: #F8B621;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
`

export const Content = styled.div`
    color: #4B4B4B;
    font-family: "Spoqa Han Sans Neo";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`