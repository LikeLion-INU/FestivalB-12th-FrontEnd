import * as S from "./question.styles";
import { questions } from "./question.data";
import AnimalComponent from "../animalUnit/animal.container";
import { Progress } from "antd";
export default function QuestionPresenterPage(props) {
  const selectedOptionStyle = {
    backgroundColor: "#ffe5ed", // 분홍색
    border: "1px solid #ff7ca3",
  };
  const selectedCancel = {
    backgroundColor: "#f0f0f0",
    border: "none",
  };
  return (
    <>
      <S.Wrapper>
        <S.NaviGroup>
          <S.Navi src="/images/left_arrow.png" onClick={props.onClickPrev} />
          <S.Navi src="/images/right_arrow.png" onClick={props.onClickNext} />
        </S.NaviGroup>
        <Progress percent={props.page_number * 10} strokeColor="#FF7CA3" />
        <S.QuestionGroup>
          <S.Question>{questions[props.page_number].questionMain}</S.Question>
          <S.Question>
            <span style={{ color: "#ff7ca3" }}>
              {questions[props.page_number].emphaticWord}
            </span>
            {questions[props.page_number].questionSub}
          </S.Question>
        </S.QuestionGroup>
        <S.Option>
          {questions[props.page_number].multioption ? "(복수선택가능)" : ""}
        </S.Option>
        {props.page_number == 5 ? <AnimalComponent /> : ""}
        <S.QuestionWrapper>
          {questions[props.page_number].options.map((option) => (
            <S.QuestionBtn
              id={option.value}
              key={option.value}
              onClick={
                questions[props.page_number].multioption
                  ? props.onClickMultiOption
                  : props.onClickSingleOption
              }
              style={
                props.isChecked.includes(option.value)
                  ? selectedOptionStyle
                  : selectedCancel
              }
            >
              {option.value}
            </S.QuestionBtn>
          ))}
        </S.QuestionWrapper>
      </S.Wrapper>
    </>
  );
}
