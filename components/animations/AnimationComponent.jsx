import { animations } from "./animationList";

export function AnimationComponent(props) {
  const { children, zIndex, bottom, left, iAnimation } = props;  
  const SelectedAnimationComponent = animations[iAnimation];

  return (
    <SelectedAnimationComponent zIndex={zIndex} bottom={bottom} left={left}>
      {children}
    </SelectedAnimationComponent>
  );
}
