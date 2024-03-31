import React from "react";
import * as S from "./main.style";

function MainPage() {
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
          />
        </S.InputArea>

        <S.ButtonArea1>
          <S.ButtonLabel>성별을 선택하세요</S.ButtonLabel>
          <S.Button1 type="submit">여성</S.Button1>
          <S.Button1 type="submit">남성</S.Button1>
        </S.ButtonArea1>

        <S.ButtonArea2>
          <S.Button2 type="submit">확인</S.Button2>
        </S.ButtonArea2>
      </S.FormGroup>
    </S.Wrapper>
  );
}

export default MainPage;
