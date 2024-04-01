import React from "react";
import * as S from "./main.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";

function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const onClickOk = () => {
    setIsModalOpen(true);
  };
  const [isId, setIsId] = useState(false);
  const [isGender, setIsGender] = useState("");
  const onChangeId = (event) => {
    if (event.keyCode == 13) {
      setIsId(event.target.id);
    }
  };
  const onChangeGender = (event) => {
    if (event.target.id == "Female") {
      setIsGender("Female");
    } else {
      setIsGender("Male");
    }
  };
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
              id="Female"
              type="submit"
              onClick={onChangeGender}
              style={
                isGender === "Female" ? { backgroundColor: "#ff7ca3" } : {}
              }
            >
              여성
            </S.Button1>
            <S.Button1
              id="Male"
              type="submit"
              onClick={onChangeGender}
              style={isGender === "Male" ? { backgroundColor: "#ff7ca3" } : {}}
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
