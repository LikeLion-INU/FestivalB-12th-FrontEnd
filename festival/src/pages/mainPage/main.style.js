import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 375px;
  height: 812px;
  border: 1px solid #bdbdbd;
`;

export const Title = styled.div`
  padding-top: 155px;
  color: #ff7ca3;
  font-size: 32px;
  font-weight: 600;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  margin-left: 25px; /* 왼쪽 여백 추가 */
`;

export const InputArea = styled.div``;

export const InputLabel = styled.p`
  margin-top: 80px;
  font-size: 14px;
  font-weight: 400px;
  margin-left: -95px;
`;

export const Input = styled.input`
  width: 270px;
  border: 1px solid #666666;
  padding: 15px 15px;
  border-radius: 8px;
  font-size: 14px;
  color: #474747;
  &::placeholder {
    color: #bdbdbd; /* placeholder 색상 */
  }
`;

export const ButtonArea1 = styled.p`
  margin-top: 20px;
`;

export const ButtonLabel = styled.p`
  font-size: 14px;
  font-weight: 400px;
  margin-left: -95px;
`;

export const Button1 = styled.button`
  width: 100px;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin: 0 5px;
  &:hover {
    border: 1px solid #ff7ca3;
    background-color: #ffe5ed;
  }
`;

export const ButtonArea2 = styled.div`
  margin-top: 40px;
`;

export const Button2 = styled.button`
  width: 312px;
  height: 50px;
  font-size: 20px;
  font-weight: 500;
  border: none;
  border-radius: 12px;
  background: #f1f1f1;
  color: #222222;
  &:hover {
    background-color: #ff7ca3;
    color: #fff;
    box-shadow: 0px 1px 10.899999618530273px 0px #00000040;
  }
`;
