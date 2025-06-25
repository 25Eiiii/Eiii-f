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
`

export const Header = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    align-self: flex-start;
    margin: 60px 0px 17px 19px;
    gap: 10px;
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
`

export const Title = styled.div`
    width: 130px;
    height: 32px;
    flex-shrink: 0;
    color: #F8B621;
    text-align: center;
    font-family: Inter;
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 69.63px;
`

export const Detail = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
`
export const Profile = styled.div`
    display: flex;
    gap: 6.77px;
    align-items: center;
`
export const Pic = styled.div`
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 37px;
    background: #FEE790;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const Info1 = styled.div`
    display: flex;
    align-items: center;
`

export const Name = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 97px;
    height: 16px;
    flex-shrink: 0;
`

export const Time = styled.div`
    color: var(--N-5, #919EB6);
    font-family: "Noto Sans CJK KR";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 10px */
    letter-spacing: -0.1px;
`

export const Info2 = styled.div`
    width: 125px;
    height: 13px;
    flex-shrink: 0;
    color: #000000;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Apply = styled.div`
    display: inline-flex;
    padding: 6px 12px;
    align-items: center;
    border-radius: 999px;
    background: #F99505;
    color: var(--Font-White, #FFFFFF);
    text-align: center;
    font-family: "Spoqa Han Sans Neo";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 12px */
    letter-spacing: -0.12px;
    position: absolute;
    right: 27px;
    cursor: pointer;
`

export const Content = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 40px;
    margin-left: ${(props) => (props.variant === "cmt" ? "41px" : "0px")};
    margin-top: ${(props) => (props.variant === "cmt" ? "-8px" : "0px")};
`

export const Big = styled.div`
    color: var(--N-10, #1D232B);
    font-family: "Spoqa Han Sans Neo";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 16px */
    letter-spacing: -0.16px;
    margin-top: 14px;
`
export const Food = styled.div`
    width: 375px;
    height: 208px;
    flex-shrink: 0;
`

export const Bottom = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    color: var(--N-5, #919EB6);
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 12px */
    margin-left: -8px;
`

export const IconImg = styled.img`
    margin-right: 3px;      
`
export const Like =  styled.div`
    display: flex;
    align-items: center;
`
export const Comment =  styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`
export const Share =  styled.div`
    display: flex;
    align-items: center;
`

export const Line = styled.div`
    width: 437px;
    height: 3px;
    flex-shrink: 0;
    background: #D9D9D9;
    margin-top: 10px;
`

export const Comments = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-left: 13px;
    margin-top: 11px;
`

export const CBtm = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    color: #F8B621;
    font-family: Inter;
    font-size: 8px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const Good = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
`

export const Line2 = styled.div`
    width: 440px;
    height: 1px;
    flex-shrink: 0;
    background: #F8B621;
    position: absolute;
    bottom: 69px;
`
export const C2 = styled.div`
    margin-left: 48px;
`

export const Write = styled.div`
    display: flex;
    margin-left: 30px;
    align-items: center;
    position: absolute;
    bottom: 20px;
    left: -5px;
    right: 30px;
    color: #F8B621;
    justify-content: space-between;
    gap: 10px;
`

export const Here = styled.input`
    flex: 1;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
    outline: none;
    &::placeholder {
        color: #F8B621;
    }
`

export const Btn = styled.div`
    color: #F8B621;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
`

export const BackgroundOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 440px;
    height: 956px;
    background: #888376;
    opacity: 0.7;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
`;

export const BtnGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 11;
    margin-top: -105px;
`;

export const Send = styled.div`
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
`

export const Cancle = styled.div`
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
`