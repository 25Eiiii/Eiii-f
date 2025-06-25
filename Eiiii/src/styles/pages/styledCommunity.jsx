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

export const Search = styled.div`

`

export const Title = styled.input`
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
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 15px;
`
export const Item  = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 18px;
    cursor: pointer;
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
    gap: 8px;
`

export const Name = styled.div`
    color: var(--N-10, #1D232B);
    font-family: "Spoqa Han Sans Neo";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 14px */
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
    display: flex;
    color: var(--N-5, #919EB6);
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 12px */
    gap: 4px;
`

export const Content = styled.div`
    margin-top: 20.44px;
    display: flex;
    flex-direction: column;
    width: 328.533px;
    flex-shrink: 0;
    gap: 18.77px;
    font-family: "Spoqa Han Sans Neo";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.14px;
    overflow: hidden;
    color: var(--N-9, #313B49);
    text-overflow: ellipsis;

`

export const Big = styled.div`
    color: var(--N-10, #1D232B);
    font-family: "Spoqa Han Sans Neo";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 16px */
    letter-spacing: -0.16px;
`
export const Etc = styled.div`
    align-self: flex-end;
    position: relative;
    bottom: 34px;
    width: 38.72px;
    height: 14.08px;
    flex-shrink: 0;
    color: var(--N-4, #AFB9CA);
    font-family: "Noto Sans CJK KR";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 12px */
    letter-spacing: -0.12px;
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
`

export const IconImg = styled.img`
    margin-right: 3px;
`

export const WriteBtn =  styled.div`
    width: 64.4px;
    height: 23px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #F8B621;
    background: #FEE790;
    color: #F8B621;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 18.6px;
    bottom: 100px;
    cursor: pointer;
`

export const Like =  styled.div`
    display: flex;
    align-items: center;
`
export const Comment =  styled.div`
    display: flex;
    align-items: center;
`
export const Scrap =  styled.div`
    display: flex;
    align-items: center;
`

export const More = styled.div`
    display: flex;
    align-items: center;
`

export const Line = styled.div`
    width: 442px;
    height: 1px;
    background: #EFBE78;
`