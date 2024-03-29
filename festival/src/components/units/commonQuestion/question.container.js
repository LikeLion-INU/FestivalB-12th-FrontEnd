import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import QuestionPresenterPage from "./question.presenter";
export default function QuestionContainerPage() {
  const params = useParams();
  const page_number = params.id;
  const navigate = useNavigate();
  const onClickPrev = () => {
    if (page_number > 0) {
      navigate(`/mykeyWord/${page_number - 1}`);
    }
  };
  return (
    <QuestionPresenterPage
      page_number={page_number}
      onClickPrev={onClickPrev}
    />
  );
}
