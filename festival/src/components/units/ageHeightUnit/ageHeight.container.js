import AgeHeightPresenter from "./ageHeight.presenter";
export default function AgeHeightComponent(props) {
  return (
    <AgeHeightPresenter
      setMyAge={props.setMyAge}
      setMyHeight={props.setMyHeight}
    />
  );
}
