import * as S from "../../styles/endStyle";
import { InstagramOutlined, CopyOutlined } from "@ant-design/icons";
import { useState } from "react";
import { message } from "antd";
export default function EndPage() {
  const [instagram, setInstagram] = useState("rnjsehzz");
  //서버에서 받아와서 state 값 설정
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "ID가 복사되었습니다😊",
      duration: 3,
    });
  };
  const handleCopyClick = (textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        success();
      })
      .catch((error) => {
        console.error("복사 실패:", error);
      });
  };
  return (
    <S.Wrapper>
      <S.Group>
        <S.Logo src="/images/Logo.png" />
        <S.Label>결과</S.Label>
      </S.Group>
      <S.CoupleImage src="/images/endimage.png" />
      <S.Text>운명의 짝</S.Text>
      {contextHolder}
      <S.Instagram
        size="large"
        prefix={<InstagramOutlined />}
        suffix={<CopyOutlined />}
        readOnly={true}
        value={instagram}
        onClick={() => handleCopyClick(instagram)}
      ></S.Instagram>
      <S.Text2>당신의 짝에게 연락해보세요!</S.Text2>
    </S.Wrapper>
  );
}
