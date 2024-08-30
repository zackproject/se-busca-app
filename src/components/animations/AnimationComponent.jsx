import { animations } from "./animationList";

export function AnimationComponent(props) {
  // iAnimation is the index of the array
  const { children, zIndex, bottom, left, iAnimation } = props;  
  // array of components animations
  const SelectedAnimationComponent = animations[iAnimation];
  // return a component of this array whith props
  return (
    <SelectedAnimationComponent zIndex={zIndex} bottom={bottom} left={left}>
      {children}
    </SelectedAnimationComponent>
  );
}
