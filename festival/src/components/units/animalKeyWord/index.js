import AnimalKeyWord from "./animal.container";
import * as S from "../commonQuestion/question.styles";
export default function MyKeyWordPage() {
  return (
    <>
      <S.Wrapper>
        <div>
          <S.Navi src="/images/arrow.png" />
        </div>
        <S.QuestionGroup>
          <S.Question>질문 7</S.Question>
          <S.Question>
            <span style={{ color: "#ff7ca3" }}>닮은 동물</span>을 선택해주세요
          </S.Question>
          <S.Option>(복수선택가능)</S.Option>
        </S.QuestionGroup>
        <AnimalKeyWord />
      </S.Wrapper>
    </>
  );
}
