import styled from "@emotion/styled";
import { LeftOutlined } from "@ant-design/icons";
export const Icon = styled(LeftOutlined)`
  color: #ff7ca3;
  font-size: 25px;
`;
export const Wrapper = styled.div`
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;
`;
export const QuestionGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
`;

export const Question = styled.div`
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 24px;
`;

export const NaviGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const Navi = styled.img`
  margin-top: 50px;
`;

export const Option = styled.div`
  font-family: Noto Sans KR;
  font-size: 24px;
  font-weight: 500;
  color: #ababab;
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
export const Point = styled.div`
  color: #ff7ca3;
`;
export const Margin = styled.div`
  margin-top: 100px; /* 291px-146px = 145px */
`;
export const QuestionWrapper = styled.div`
  display: block;
  width: 90%;
  margin-top: 70px; /* 수평 가운데 정렬 */
`;
export const QuestionBtn = styled.div`
  background-color: ${(props) => (props.isChecked ? "#ffe5ed" : "#F0F0F0")};
  width: 328px;
  height: 80px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: ${(props) => (props.isChecked ? "1px solid #ff7ca3" : "none")};
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  line-height: 80px;
  padding-left: 50px;
  &:hover {
    background-color: #ffe5ed;
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
