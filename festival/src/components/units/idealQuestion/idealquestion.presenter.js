import * as S from "./idealquestion.styles";
import { questions } from "./idealquestion.data";
import AnimalComponent from "../animalUnit/animal.container";
import { Progress } from "antd";
import { Modal } from "antd";
import { useState } from "react";
export default function IdealPresenterPage(props) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      {props.page_number == 0 ? (
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
      ) : (
        ""
      )}
      <S.Wrapper>
        <S.NaviGroup>
          <S.Navi src="/images/left_arrow.png" onClick={props.onClickPrev} />
          <S.Navi src="/images/right_arrow.png" onClick={props.onClickNext} />
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
        {props.page_number == 6 ? <AnimalComponent /> : ""}
        <S.QuestionWrapper>
          {questions[props.page_number].options.map((option) => (
            <S.QuestionBtn key={option.value}>{option.value}</S.QuestionBtn>
          ))}
        </S.QuestionWrapper>
      </S.Wrapper>
    </>
  );
}
