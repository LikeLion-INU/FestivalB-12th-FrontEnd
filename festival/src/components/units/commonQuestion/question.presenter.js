import * as S from "./question.styles";
import { questions } from "./question.data";
import AnimalPage from "../animalKeyWord/index";
import { Progress } from "antd";
export default function QuestionPresenterPage(props) {
  return (
    <>
      {props.page_number === 6 ? (
        <AnimalPage />
      ) : (
        <S.Wrapper>
          <S.NaviGroup>
            <S.Navi src="/images/left_arrow.png" onClick={props.onClickPrev} />
            <S.Navi src="/images/right_arrow.png" onClick={props.onClickNext} />
          </S.NaviGroup>
          <Progress percent={props.page_number * 8} />
          <S.QuestionGroup>
            <S.Question>{questions[props.page_number].questionMain}</S.Question>
            <S.Question>
              <span style={{ color: "#ff7ca3" }}>
                {questions[props.page_number].emphaticWord}
              </span>
              을 선택해주세요
            </S.Question>
            <S.Option>
              {questions[props.page_number].multioption ? "(복수선택가능)" : ""}
            </S.Option>
            <S.QuestionWrapper>
              {questions[props.page_number].options.map((option) => (
                <S.QuestionBtn key={option.value}>{option.value}</S.QuestionBtn>
              ))}
            </S.QuestionWrapper>
          </S.QuestionGroup>
        </S.Wrapper>
      )}
    </>
  );
}
