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
    margin-bottom: 43px;
`

export const PlanWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`