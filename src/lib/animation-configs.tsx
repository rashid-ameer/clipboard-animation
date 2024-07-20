import { AnimationProps } from "framer-motion";

export const clipBoard: AnimationProps = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
  transition: { duration: 0.2 },
};
