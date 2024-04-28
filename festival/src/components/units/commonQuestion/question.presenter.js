import * as S from "./question.styles";
import { questions } from "./question.data";
import AnimalComponent from "../animalUnit/animal.container";
import AgeHeightComponent from "../ageHeightUnit/ageHeight.container";
import { Progress } from "antd";
import { data } from "../../../data";
import { useState, useEffect } from "react";

export default function QuestionPresenterPage(props) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  // 질문이 넘어갈 때마다 답변 데이터를 초기화하는 함수
  const resetAnswers = () => {
    setSelectedOptions([]);
    // 기타 답변 데이터를 초기화하는 작업을 추가할 수 있습니다.
  };

  const toggleOption = (keyValue) => {
    const propKey = questions[props.page_number].key;
    const isMultiOption = questions[props.page_number].multioption;

    if (!isMultiOption) {
      setSelectedOptions([keyValue]);
      updateKeyword(propKey, keyValue);
      return;
    }

    const selectedIndex = selectedOptions.indexOf(keyValue);
    let updatedOptions = [];

    if (selectedIndex === -1) {
      updatedOptions = [...selectedOptions, keyValue];
    } else {
      updatedOptions = selectedOptions.filter((value) => value !== keyValue);
    }

    setSelectedOptions(updatedOptions);
    updateKeyword(propKey, updatedOptions);
  };

  const updateKeyword = (propKey, value) => {
    if (data.myKeyword.hasOwnProperty(propKey)) {
      if (Array.isArray(data.myKeyword[propKey])) {
        data.myKeyword[propKey] = value;
      } else if (typeof data.myKeyword[propKey] === "string") {
        data.myKeyword[propKey] = value.toString();
      } else if (typeof data.myKeyword[propKey] === "boolean") {
        data.myKeyword[propKey] =
          value === questions[props.page_number].options[0].value;
      }
    }
    console.log(data);
  };

  // 질문이 변경될 때 답변 데이터를 초기화합니다.
  useEffect(() => {
    resetAnswers();
  }, [props.page_number]);

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
          {props.page_number === 1 ? "(만 나이 X)" : ""}
        </S.Option>
        {props.page_number === "1" && <AgeHeightComponent />}
        {props.page_number === "5" && <AnimalComponent />}
        <S.QuestionWrapper>
          {questions[props.page_number].options.map((option, index) => (
            <S.QuestionBtn
              id={option.value}
              key={index}
              onClick={(event) => toggleOption(event.currentTarget.id)}
              style={{
                width: "370px",
                boxSizing: "border-box",
                border: "5px solid #ffe5ed",
                backgroundColor: selectedOptions.includes(option.value)
                  ? "#ffe5ed"
                  : "transparent",
              }}
            >
              {option.value}
            </S.QuestionBtn>
          ))}
        </S.QuestionWrapper>
      </S.Wrapper>
    </>
  );
}
