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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px 27px 17px 27px;
    gap: 102px;
` 

export const Cancle = styled.div`
    width: 32px;
    height: 31px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`
export const Name = styled.div`
    width: 102px;
    height: 30px;
    flex-shrink: 0;
    color: #F8B621;
    text-align: center;
    font-family: Inter;
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
export const Regist = styled.button`
    color: #949494;
    font-family: Inter;
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
    background: none;
    width: 100%;
    cursor: pointer;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
`

export const Category = styled.div`
    display: flex;
    margin-left: 30px;
    color: #949494;
    font-family: "Spoqa Han Sans Neo";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    gap: 147px;
`

export const Title = styled.input`
color: #949494;
font-family: "Spoqa Han Sans Neo";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left: 30px;
border: none;
padding: 16px 0px;
outline: none;
`

export const Line = styled.div`
width: 440px;
height: 1px;
background: #EFBE78;
`

export const Content = styled.textarea`
    margin-left: 30px;
    margin-right: 40px;
    margin-top: 21px;
    height: 600px;
    color: #B3B3B3;
    font-family: "Spoqa Han Sans Neo";
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
    outline: none;
    resize: none;

`

export const Cam = styled.div`
    position: absolute;
    left: 30px;
    bottom: 10px;
`
