import { randNum } from "../../utils/randNum";
import { AnimateRotate } from "./AnimateRotate";
import { AnimateMoveFromX } from "./AnimateMoveFromX";
export function AnimationComponent(props) {
  const { children, height, width, zIndex } = props;
  const animations = [AnimateMoveFromX, AnimateRotate];
  const rand = randNum(0, animations.length - 1);

  const SelectedAnimation = animations[0];
  return (
    <SelectedAnimation height={height} width={width} zIndex={zIndex}>
      {children}
    </SelectedAnimation>
  );
}
