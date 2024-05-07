import * as S from "./ageHeight.style";
import { questions } from "../commonQuestion/question.data";
import { data } from "../../../data";
export default function AgeHeightPresenter(props) {
  return (
    <S.Wrapper>
      <S.InputAgeContainer>
        <S.Input
          type="text"
          name="age"
          id="age"
          placeholder="ex) 22"
          autoComplete="off"
          required
          onChange={(event) => {
            data.myKeyword.myAge = event.target.value;
            props.setMyAge(event.target.value);
          }}
        />
        <S.AgeText>세</S.AgeText>
      </S.InputAgeContainer>

      <S.Question>
        <span style={{ color: "#ff7ca3" }}>{questions[1].emphaticWord2}</span>
        {questions[1].questionSub}
      </S.Question>

      <S.InputHeightContainer>
        <S.Input
          type="text"
          name="height"
          id="height"
          placeholder="ex) 164"
          autoComplete="off"
          required
          onChange={(event) => {
            data.myKeyword.myHeight = event.target.value;
            props.setMyHeight(event.target.value);
          }}
        />
        <S.HeightText>cm</S.HeightText>
      </S.InputHeightContainer>
    </S.Wrapper>
  );
}
