import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { questions } from "./question.data";
import { useState } from "react";
import QuestionPresenterPage from "./question.presenter";
export default function QuestionContainerPage() {
  const params = useParams();
  const page_number = params.id;
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState([]);
  const onClickPrev = () => {
    if (page_number > 0) {
      navigate(`/mykeyWord/${Number(page_number) - 1}`);
    }
  };
  const onClickNext = () => {
    if (page_number < questions.length - 1) {
      navigate(`/mykeyWord/${Number(page_number) + 1}`);
    } else if (page_number == questions.length - 1) {
      navigate("/idealKeyWord/0");
    }
  };
  //복수 선택 기능
  const onClickMultiOption = (event) => {
    const clickedOptionId = event.target.id;
    const isOptionSelected = isChecked.includes(clickedOptionId);
    if (isOptionSelected) {
      // 이미 선택된 옵션인 경우 제거
      setIsChecked(isChecked.filter((option) => option !== clickedOptionId));
    } else {
      // 선택되지 않은 옵션인 경우 추가
      setIsChecked([...isChecked, clickedOptionId]);
    }
    console.log(clickedOptionId);
    console.log(...isChecked);
  };

  //단일 선택 기능
  const onClickSingleOption = (event) => {
    setIsChecked(event.target.id);
  };

  return (
    <QuestionPresenterPage
      page_number={page_number}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      onClickMultiOption={onClickMultiOption}
      onClickSingleOption={onClickSingleOption}
      isChecked={isChecked}
    />
  );
}
