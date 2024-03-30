import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { questions } from "./idealquestion.data";
import IdealQuestionPresenter from "./idealquestion.presenter";
export default function IdealContainerPage() {
  const params = useParams();
  const page_number = params.id;
  const navigate = useNavigate();
  const onClickPrev = () => {
    if (page_number > 0) {
      navigate(`/idealKeyWord/${Number(page_number) - 1}`);
    } else if (page_number - 1 < 0) {
      navigate(`/mykeyWord/10`);
    }
  };
  const onClickNext = () => {
    if (page_number < questions.length - 1) {
      navigate(`/idealKeyWord/${Number(page_number) + 1}`);
    } else if (page_number == questions.length - 1) {
      navigate("/matching");
    }
  };
  return (
    <IdealQuestionPresenter
      page_number={page_number}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
    />
  );
}
