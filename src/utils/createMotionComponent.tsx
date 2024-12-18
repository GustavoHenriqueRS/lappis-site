import React from "react";
import { motion } from "framer-motion";

export function createMotionComponent(
  Component: React.ComponentType<any>,
  displayName: string
) {
  const ForwardedComponent = React.forwardRef<any, any>((props, ref) => (
    <Component ref={ref} {...props} />
  ));
  ForwardedComponent.displayName = displayName;
  return motion.create(ForwardedComponent);
}
