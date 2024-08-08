import { randNum } from "../../utils/randNum";
import { AnimateRotate } from "./AnimateRotate";
import { AnimateMoveFromX } from "./AnimateMoveFromX";
import { AnimateRotateDiagonal } from "./AnimateRotateDiagonal";

export function AnimationComponent(props) {
  const { myCharacter } = props;
  const animations = [AnimateMoveFromX, AnimateRotate, AnimateRotateDiagonal];
  const rand = randNum(0, animations.length - 1);

  const SelectedAnimation = animations[rand];
  return <SelectedAnimation myCharacter={myCharacter} />;
}
