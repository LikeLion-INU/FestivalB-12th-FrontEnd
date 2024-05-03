import * as S from "./endStyle";
import { InstagramOutlined, CopyOutlined } from "@ant-design/icons";
import { useState } from "react";
import { message } from "antd";
import axios from "axios";
import { useLocation } from "react-router-dom";
export default function EndPage() {
  const [instagram, setInstagram] = useState("매칭 중");
  const location = useLocation();
  const isMember = location.state && location.state.isMember;
  console.log(isMember);
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
  const getId = async () => {
    try {
      const response = await axios.get(
        `https://likelion-meeting.p-e.kr/api/members/${isMember}/result`
      );
      console.log(response);
      if (response?.data?.result === undefined) {
        setInstagram("아직 상대방이 매칭되지 않았어요");
      } else {
        setInstagram(response?.data?.result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(isMember);
  getId();
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
