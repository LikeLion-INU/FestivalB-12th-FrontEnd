import React from "react";
import * as S from "./main.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
function MainPage(props) {
  //페이지번호로 구분

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const onClickOk = () => {
    setIsModalOpen(true);
  };
  const [isId, setIsId] = useState(false);
  const [isGender, setIsGender] = useState("");
  const membersId = "";
  const onChangeId = (event) => {
    if (event.keyCode == 13) {
      setIsId(event.target.value);
    }
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
      console.log(data.result.memberId); // 응답 데이터 출력
    } catch (error) {
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
            onKeyDown={onChangeId}
          />
        </S.InputArea>
        {isId ? (
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
            style={isGender ? { backgroundColor: "#ff7ca3" } : {}}
            disabled={isGender ? false : true}
          >
            확인
          </S.Button2>
        </S.ButtonArea2>
        {isModalOpen ? (
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
