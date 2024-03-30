import { useNavigate } from "react-router-dom";
export default function MatchingPage() {
  const navigate = useNavigate();
  const onClickNext = () => {
    navigate("/end");
  };
  return (
    <>
      <div>매칭페이지</div>
      <div onClick={onClickNext}>다음으로 넘어가세요</div>
    </>
  );
}
