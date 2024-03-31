import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 375px;
  height: 500px;
`;

export const InputAgeContainer = styled.div`
  width: 312px;
  height: 48px;
  display: flex; /* 수직 가운데 정렬을 위해 flex 사용 */
  align-items: center; /* 수직 가운데 정렬 */
  border: 1px solid #666666;
  padding: 0 15px; /* 상하 padding 삭제 */
  border-radius: 5px;
  margin-top: 40px;
  margin-left: 15px;
`;

export const Input = styled.input`
  font-size: 14px;
  font-weight: 600;
  color: #474747;
  border: none;
  outline: none; /* 포커스 시 테두리 제거 */
  &::placeholder {
    color: #bdbdbd; /* placeholder 색상 */
}
`;

export const AgeText = styled.span`
  font-size: 20px;
  color: #000000;
  margin-left: 90px;
`;

export const Question = styled.div`
  font-family: Noto Sans KR;
  font-weight: 500;
  font-size: 24px;
  margin-top: 130px;
`;

export const InputHeightContainer = styled.div`
  width: 312px;
  height: 45px;
  display: flex; /* 수직 가운데 정렬을 위해 flex 사용 */
  align-items: center; /* 수직 가운데 정렬 */
  border: 1px solid #666666;
  padding: 0 15px; /* 상하 padding 삭제 */
  border-radius: 5px;
  margin-left: 15px;
  margin-top: 30px;
`;

export const HeightText = styled.span`
  font-size: 20px;
  color: #000000;
  margin-left: 90px;
`;

