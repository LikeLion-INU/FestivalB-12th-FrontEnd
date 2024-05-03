import React from "react";
import * as S from "./main.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import axios from "axios";
function MainPage(props) {
  //페이지번호로 구분
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  //여기서 이제 memberid 있는지 확인 -> 없으면 isMember=false & 바로 결과페이지로 이동

  //isMember가 false(빈문자열)면 성별 버튼 뜸
  const [isMember, setIsMember] = useState(true);
  const [isId, setIsId] = useState("");
  const [isGender, setIsGender] = useState("");
  let memberId = "";
  // POST 요청 만들기
  const onClickOk = async () => {
    //setIsModalOpen(true);
    try {
      const response = await axios.post(
        "https://likelion-meeting.p-e.kr/api/members/sign-in",
        isId,
        {
          headers: {
            "Content-Type": "text/plain",
          },
        }
      );
      memberId = response?.data?.result?.memberId;
      navigate("/end", { state: { isMember: memberId } });
      console.log(isMember);
      console.log("회원이야!");
    } catch (error) {
      console.log("회원아님");
      setIsMember(false);
      setIsModalOpen(true);
      console.error(error);
    }
  };
  const onChangeId = (event) => {
    setIsId(event.target.value);
  };
  const onChangeGender = (event) => {
    if (event.target.id == "WOMAN") {
      setIsGender("WOMAN");
    } else {
      setIsGender("MAN");
    }
  };
  const requestBody = {
    inStarId: isId,
    gender: isGender,
  };

  console.log(requestBody);
  async function sendRequest() {
    try {
      const response = await fetch(
        "https://likelion-meeting.p-e.kr/api/members/sign-up",
        {
          method: "POST", // POST 요청
          headers: {
            "Content-Type": "application/json", // 요청 바디의 형식을 JSON으로 설정
          },
          body: JSON.stringify(requestBody), // 요청 바디를 JSON 형식으로 직렬화
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // 응답을 JSON 형식으로 변환
      memberId = data?.result?.memberId;
      localStorage.setItem("memberId", memberId);
    } catch (error) {
      setIsGender(false);
      console.log(error);
    }
  }

  //instarId로 조회해서 해당하는 memberId 있으면 바로 매칭 결과 페이지로 넘어감
  console.log(props.data);
  return (
    <S.Wrapper>
      <S.Title>키워드 소개팅</S.Title>
      <S.FormGroup>
        <S.InputArea>
          <S.InputLabel>인스타그램 아이디를 입력하세요</S.InputLabel>
          <S.Input
            type="text"
            name="id"
            id="id"
            placeholder="ex) @ lion1234"
            autoComplete="off"
            required
            onChange={onChangeId}
          />
        </S.InputArea>
        {!isMember ? (
          <S.ButtonArea1>
            <S.ButtonLabel>성별을 선택하세요</S.ButtonLabel>
            <S.Button1
              id="WOMAN"
              type="submit"
              onClick={onChangeGender}
              style={isGender === "WOMAN" ? { backgroundColor: "#ff7ca3" } : {}}
            >
              여성
            </S.Button1>
            <S.Button1
              id="MAN"
              type="submit"
              onClick={onChangeGender}
              style={isGender === "MAN" ? { backgroundColor: "#ff7ca3" } : {}}
            >
              남성
            </S.Button1>
          </S.ButtonArea1>
        ) : (
          ""
        )}
        <S.ButtonArea2>
          <S.Button2
            type="submit"
            onClick={onClickOk}
            style={isId ? { backgroundColor: "#ff7ca3" } : {}}
            disabled={isId ? false : true}
          >
            확인
          </S.Button2>
        </S.ButtonArea2>
        {isModalOpen && isGender ? (
          <Modal
            open={isModalOpen}
            onOk={() => {
              setIsModalOpen(false);
              navigate("/mykeyword/0");
              sendRequest();
            }}
            onCancel={() => {
              setIsModalOpen(false);
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src="/images/warning.png" />
              <span>
                <span style={{ color: "#ff7ca3", fontWeight: "700" }}>
                  개인정보수집
                </span>
                동의
              </span>
              <span>
                이 소개팅에 참여하기 위한 개인정보 수집에 동의하십니까?
              </span>
            </div>
          </Modal>
        ) : (
          ""
        )}
      </S.FormGroup>
    </S.Wrapper>
  );
}

export default MainPage;
