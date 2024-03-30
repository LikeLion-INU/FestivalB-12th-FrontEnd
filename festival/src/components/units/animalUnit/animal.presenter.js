import * as S from "./animal.style";
export default function AnimalPresenter() {
  return (
    <S.Wrapper>
      <S.RowGroup>
        <S.Group>
          <S.Character>
            <S.Icon src="/images/animal/dog.png" />
          </S.Character>
          <S.Name>강아지</S.Name>
        </S.Group>
        <S.Group>
          <S.Character>
            <S.Icon src="/images/animal/cat.png" />
          </S.Character>
          <S.Name>고양이</S.Name>
        </S.Group>
        <S.Group>
          <S.Character>
            <S.Icon src="/images/animal/dinosaur.png" />
          </S.Character>
          <S.Name>공룡</S.Name>
        </S.Group>
      </S.RowGroup>
      <S.RowGroup>
        <S.Group>
          <S.Character>
            <S.Icon src="/images/animal/wolf.png" />
          </S.Character>
          <S.Name>늑대</S.Name>
        </S.Group>
        <S.Group>
          <S.Character>
            <S.Icon src="/images/animal/fox.png" />
          </S.Character>
          <S.Name>여우</S.Name>
        </S.Group>
        <S.Group>
          <S.Character>
            <S.Icon src="/images/animal/bear.png" />
          </S.Character>
          <S.Name>곰</S.Name>
        </S.Group>
      </S.RowGroup>
      <S.RowGroup>
        <S.Group>
          <S.Character>
            <S.Icon src="/images/animal/turtle.png" />
          </S.Character>
          <S.Name>꼬북이</S.Name>
        </S.Group>
        <S.Group>
          <S.Character>
            <S.Icon src="/images/animal/rabbit.png" />
          </S.Character>
          <S.Name>토끼</S.Name>
        </S.Group>
        <S.Group>
          <S.Character>
            <S.Icon src="/images/animal/hamster.png" />
          </S.Character>
          <S.Name>햄스터</S.Name>
        </S.Group>
      </S.RowGroup>
    </S.Wrapper>
  );
}
