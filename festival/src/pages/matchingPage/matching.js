import * as S from "../matchingPage/matching.style.js";
import { data } from "../../data";
import axios from "axios";
export default function MatchingPage(props) {
  console.log(data);
  // memberId를 localStorage에서 꺼내기
  const storedMemberId = localStorage.getItem("memberId");
  axios
    .post(
      `https://likelion-meeting.p-e.kr/api/members/${storedMemberId}/choice`,
      data
    )
    .then((response) => {
      console.log("Response:", response);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  console.log(props.data);
  return (
    <S.Wrapper style={{ position: "relative" }}>
      <S.Image src="/images/cherry-blossom.png" />
      <S.Label
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      >
        신청 완료
      </S.Label>
      <S.Group>
        <S.Question>매칭 결과는 언제 알 수 있나요?</S.Question>
        <S.Answer>매칭이 완료되면 인스타로 알려드릴 예정이에요.</S.Answer>
      </S.Group>
      <S.Group>
        <S.Question>매칭 결과는 어떻게 알 수 있나요?</S.Question>
        <S.Answer>
          신청 시에 가입한 인스타 아이디로 로그인하시면 상대방 인스타 아이디를
          알 수 있어요.
        </S.Answer>
      </S.Group>
      <S.Image2 src="/images/frame-people.png" />
      <S.Info>자세한 정보는 인스타 'likelion_inu'를 확인해주세요.</S.Info>
    </S.Wrapper>
  );
}
