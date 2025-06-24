import { styled } from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    bottom: 15px;
    position: fixed;
    background: #FFFFFF;
`

export const Line = styled.div`
    background: #EFBE78;
    width: 418px;
    height: 1px;
`

export const Group = styled.div`
    display: flex;
    flex-direction: row;
    gap: 31px;
`

export const Icon = styled.div`
    width: 52px;
    height: 52px;
    flex-shirink: 0;
    border-radius: 7px;
    background: #FEE790;
    display: flex;
    align-items: center;
    justify-content: center;
`