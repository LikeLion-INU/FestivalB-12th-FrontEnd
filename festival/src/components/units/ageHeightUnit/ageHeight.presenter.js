import * as S from "./ageHeight.style";
import { questions } from "../commonQuestion/question.data";
export default function AgeHeightPresenter() {
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
        />
        <S.AgeText>세</S.AgeText>
      </S.InputAgeContainer>
     
      <S.Question>
        <span style={{ color: "#ff7ca3" }}>
            {questions[1].emphaticWord2}
        </span>
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
        />
        <S.HeightText>cm</S.HeightText>
      </S.InputHeightContainer>

    </S.Wrapper>
  );
}
