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

export const Box = styled.div`
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

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); // 두 열
    gap: 15px;
    height: 750px;
        overflow-y: auto;
    &::-webkit-scrollbar {
    display: none;
`
export const Card = styled.div`
    width: 180.686px;
    height: 239.233px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #976900;
    background: #FEE790;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ProfileImg = styled.div`
    width: 125px;
    height: 125px;
    background: #FFFFFF;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const Profile1 = styled.div`
    width: 66.89px;
    height: 31.09px;
    flex-shrink: 0;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    margin-top: -20px;
`

export const Nickname = styled.div`
    width: 46.163px;
    height: 13.19px;
    border-radius: 9px;
    background: #F8B621;
    font-size: 7px;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const UserId = styled.div`
    width: 66.89px;
    height: 14px;
    flex-shrink: 0;
    font-family: Inter;
    font-size: 7px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background: #F8B621;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Profile2 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); // 두 열
    overflow-y: auto;
    margin-top: 13.19px;
    gap: 8px;
`

export const Detail = styled.div`
    width: 72.5426px;
    height: 20.7265px;
    font-size: 7px;
    background: #F8B621;
    border-radius: 9px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 11;
    position: absolute;
    bottom: 100px;
`;

export const ApplyBtn = styled.button`
    width: 305px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 11px;
    background: #F8B621;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
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

export const ExtBtn = styled.button`
    width: 305px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 11px;
    background: #F8B621;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
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

export const LoadingText = styled.div`
`