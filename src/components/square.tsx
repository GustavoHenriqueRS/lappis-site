import React from "react";

export default function Square({
  children,
  className,
  ref,
}: {
  children?: React.ReactNode;
  className?: React.ComponentProps<"div">["className"];
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={ref}
      className={`bg-lightgrey flex rounded-xl w-95 items-center flex-col ${className}`}
    >
      {children}
    </div>
  );
}
