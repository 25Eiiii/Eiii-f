import styled from "styled-components";

export const SystemMessage = styled.div`
  text-align: center;
  margin: 12px 0;
color: #C18600;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

export const ChatDateRow = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  
`;

export const ChatDate = styled.span`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: #f0e68c;
    padding: 4px 10px;
    font-size: 0.75rem;
    border-radius: 17px;
    background: #FEE790;
    width: 92px;
    height: 18px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #C18600;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const AppointmentButton = styled.span`
    margin-left: 350px;
    color: white;
    padding: 4px 8px;
    width: 64px;
    height: 25px;
    flex-shrink: 0;
    border-radius: 17px;
    background: #4CCA9E;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 12px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const MessageRow = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.from === "me" ? "flex-end" : "flex-start"};
  margin-bottom: 8px;
  gap: 10px;
`;

export const MessageBubble = styled.div`
  padding: 10px 14px;
  border-radius: 20px;
  background: #FEE790;
  max-width: 70%;
  font-size: 0.875rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #F8B621;
`;

export const MessageTime = styled.div`
color: #FFC94E;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 600;
line-height: normal;
  margin-top: 54px;
  margin-left: 5px;
`;

export const ChatInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-top: 1px solid #F8B621;
  padding-top: 10px;
`;

export const CameraButton = styled.button`
  background: none;
width: 44.106px;
height: 43px;
flex-shrink: 0;
border-radius: 11px;
border: 2px solid #F8B621;
background: #FFF;
display: flex;
align-items: center;
justify-content: center;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 0px 12px;
  font-size: 0.875rem;
  width: 300.877px;
height: 43px;
flex-shrink: 0;
border-radius: 11px;
border: 2px solid #F8B621;
background: #FFF
`;

export const SendButton = styled.button`
width: 30px;
height: 29px;
flex-shrink: 0;
background: #FFDE67;
border-radius: 50%;
border: none;
display: flex;
align-items: center;
justify-content: center;
padding-left: 12px;
`;

export const Profile = styled.div`
margin-top: 54px;
`

