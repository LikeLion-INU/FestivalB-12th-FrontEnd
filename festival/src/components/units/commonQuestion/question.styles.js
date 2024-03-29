import styled from "@emotion/styled";
import { LeftOutlined } from "@ant-design/icons";
export const Icon = styled(LeftOutlined)`
  color: #ff7ca3;
  font-size: 25px;
`;
export const Container = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  text-align: center;
  margin: auto;
  border: 1px solid gainsboro;
`;
export const PrevBtn = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 56px;
  left: 16px;
  background-color: white;
  border: none;
  :hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
  }
`;
export const Title = styled.div`
  margin-top: 120px; /* 146px */
  font-size: 24px;
  font-weight: 600;
`;
export const Margin = styled.div`
  margin-top: 100px; /* 291px-146px = 145px */
`;
export const QuestionWrapper = styled.div`
  display: block;
  width: 90%;
  margin: auto; /* 수평 가운데 정렬 */
`;
export const QuestionBtn = styled.div`
  background: #f0f0f0;
  width: 328px;
  height: 80px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: none;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  padding-left: 40px;
  :hover {
    background: #ffe5ed;
    border: 1px solid #ff7ca3;
  }
`;
export const NextBtn = styled.button`
  margin-top: 30px;
  width: 30%;
  padding: 8px;
  background: #ff7ca3;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 15px;
  :hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5); /* 그림자 효과 추가 */
  }
`;
