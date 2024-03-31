import { useNavigate } from "react-router-dom";
import * as S from "../matchingPage/matching.style.js";

export default function MatchingPage() {
  const navigate = useNavigate();
  const onClickNext = () => {
    navigate("/end");
  };
  return (
    <S.Wrapper>
      <S.Image src="/images/cherry-blossom.png"/>
      <S.Label>매칭 중</S.Label>
      <S.Loading></S.Loading>
      <S.Text>운명의 <S.Highlight>반쪽</S.Highlight>을 찾는 중 입니다</S.Text>
      <S.Frame src="/images/frame-people.png"/>
      <S.Button>매칭 취소</S.Button>
      <div onClick={onClickNext}>다음으로 넘어가세요</div>
    </S.Wrapper>
  );
}
