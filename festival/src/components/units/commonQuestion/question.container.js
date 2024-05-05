import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { questions } from "./question.data";
import { useState } from "react";
import QuestionPresenterPage from "./question.presenter";
export default function QuestionContainerPage() {
  const params = useParams();
  const page_number = params.id;
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
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

  return (
    <QuestionPresenterPage
      page_number={page_number}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      isChecked={isChecked}
    />
  );
}
