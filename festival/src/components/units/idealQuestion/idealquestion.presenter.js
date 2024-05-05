import * as S from "./idealquestion.styles";
import { questions } from "./idealquestion.data";
import AnimalComponent from "../animalUnit/animal.container";
import { Progress } from "antd";
import { Modal } from "antd";
import { useState, useEffect } from "react";
import { data } from "../../../data";

export default function IdealPresenterPage(props) {
  const [isModalOpen, setIsModalOpen] = useState(true);
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
    if (data.idealKeyword.hasOwnProperty(propKey)) {
      if (Array.isArray(data.idealKeyword[propKey])) {
        data.idealKeyword[propKey] = value;
      } else if (typeof data.idealKeyword[propKey] === "string") {
        data.idealKeyword[propKey] = value.toString();
      } else if (typeof data.idealKeyword[propKey] === "boolean") {
        data.idealKeyword[propKey] =
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
      {props.page_number === 0 && (
        <Modal
          open={isModalOpen}
          onOk={() => {
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
            <img src="/images/couple.png" />
            <span>
              <span style={{ color: "#ff7ca3", fontWeight: "700" }}>
                이상형의 키워드
              </span>
              를 고르세요
            </span>
            <span>나의 키워드를 설정하고</span>
            <span>이상형 키워드를 고를 수 있어요</span>
          </div>
        </Modal>
      )}
      <S.Wrapper>
        <S.NaviGroup>
          <S.Navi src="/images/left_arrow.png" onClick={props.onClickPrev} />
          <S.Navi
            src="/images/right_arrow.png"
            onClick={selectedOptions.length > 0 ? props.onClickNext : null}
          />
        </S.NaviGroup>
        <Progress percent={props.page_number * 9.5} strokeColor="#FF7CA3" />
        <S.QuestionGroup>
          <S.Question>{questions[props.page_number].questionMain}</S.Question>
          <S.Question>
            <span style={{ color: "#ff7ca3" }}>
              {questions[props.page_number].emphaticWord}
            </span>
            을 선택해주세요
          </S.Question>
        </S.QuestionGroup>
        <S.Option>
          {questions[props.page_number].multioption ? "(복수선택가능)" : ""}
        </S.Option>
        {props.page_number === "6" && <AnimalComponent />}
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
