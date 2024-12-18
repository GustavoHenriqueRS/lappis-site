import React from "react";

export default function Square({
  children,
  extraStyle,
  ref,
}: {
  children?: React.ReactNode;
  extraStyle?: string;
  ref?: React.Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={ref}
      className={`bg-lightgrey flex z-10 rounded-xl w-95 items-center flex-col ${extraStyle}`}
    >
      {children}
    </div>
  );
}
