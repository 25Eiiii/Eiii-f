import React from "react";
import styled from "styled-components";

const Header = ({ titleText, titleImg, rightIcon, rightText, onClickLeft, onClickRight }) => {
  return (
    <Wrapper>
      <LeftGroup>
        <Btn onClick={onClickLeft}>
          <img src={`${process.env.PUBLIC_URL}/images/back.svg`} alt="back" />
        </Btn>
      </LeftGroup>
      <Title>
        {titleText}
        {titleImg && (
          <img src={`${process.env.PUBLIC_URL}/images/${titleImg}.svg`} alt="title-icon" />
        )}
      </Title>
      <RightGroup onClick={onClickRight}>
      {rightIcon && (
        <Btn>
          <img src={`${process.env.PUBLIC_URL}/images/${rightIcon}.svg`} alt="right" />
        </Btn>
      )}
      {rightText && <Text>{rightText}</Text>}
    </RightGroup>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px 27px 17px 27px;
    gap: 110px;
`;

const LeftGroup = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
`;

const RightGroup = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`;

const Btn = styled.button`
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
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
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
`;

const Text = styled.div`
    flex-shrink: 0;
    color: #F8B621;
    text-align: center;
    font-family: Inter;
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`