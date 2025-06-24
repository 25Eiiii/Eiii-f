import React from "react";
import styled from "styled-components";

const Header = ({ titleText, titleImg, leftIcon, rightIcon }) => {
  return (
    <Wrapper>
      <Btn>
        <img src={`${process.env.PUBLIC_URL}/images/${leftIcon}.svg`} alt="left" />
      </Btn>
      <Title>
        {titleText}
        {titleImg && (
          <img src={`${process.env.PUBLIC_URL}/images/${titleImg}.svg`} alt="title-icon" />
        )}
      </Title>
      <Btn>
        <img src={`${process.env.PUBLIC_URL}/images/${rightIcon}.svg`} alt="right" />
      </Btn>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
    flex-shrink: 0;
    gap: 105px;
    display: flex;
    justify-content: center;
    margin: 60px 27px 17px 27px;
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
`;

const Title = styled.div`
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
