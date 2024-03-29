import * as S from "./question.styles";
import { questions } from "./question.data";
export default function QuestionPresenterPage(props) {
  return (
    <S.Container>
      <S.PrevBtn onClick={props.onClickPrev}>
        <S.Icon />
      </S.PrevBtn>
      <S.Title>
        <p>{questions[props.page_number].questionMain}</p>
        <p>
          <span>{questions[props.page_number].emphaticWord}</span>
          {questions[props.page_number].questionSub}
        </p>
      </S.Title>
      <S.Margin />
      <S.QuestionWrapper>
        {questions[props.page_number].options.map((option) => (
          <S.QuestionBtn key={option.value}>{option.value}</S.QuestionBtn>
        ))}
      </S.QuestionWrapper>
      <S.NextBtn>
        <p>다음</p>
      </S.NextBtn>
    </S.Container>
  );
}
