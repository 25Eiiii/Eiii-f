// src/styles/CommonStyles.js
import styled from "styled-components";

export const PageContainer = styled.div`
position: relative;
  margin: 0 auto;
  width: 440px;
  height: 956px;
  background: #FFFFFF;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  border: 1px solid #6A5656;
  margin-top:10vh;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;