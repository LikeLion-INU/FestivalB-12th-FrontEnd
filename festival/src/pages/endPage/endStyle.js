import styled from "@emotion/styled";
import { Input } from "antd";
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Logo = styled.img`
  width: 241px;
  height: 48px;
`;

export const Label = styled.span`
  font-size: 32px;
  color: #ff7ca3;
  font-weight: bolder;
  font-family: Noto Sans KR;
`;

export const CoupleImage = styled.img`
  width: 90%;
  height: 179px;
  padding: 70px 0px;
`;

export const Text = styled.div`
  font-size: 24px;
  font-weight: 700;
  font-family: Noto Sans KR;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 30px;
`;

export const Instagram = styled(Input)`
  width: 70%;
  height: 40px;
  font-weight: bold;
  :hover {
    background-color: #ffe5ed;
  }
`;
export const Text2 = styled.div`
  font-size: 15px;
  font-weight: 400;
  font-family: Noto Sans KR;
  color: rgba(0, 0, 0, 0.7);
  margin-top: 20px;
`;
