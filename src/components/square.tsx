import React from "react";

export default function Square({
  children,
  extraStyle,
}: {
  children?: React.ReactNode;
  extraStyle?: string;
}) {
  return (
    <div
      className={`bg-lightgrey flex z-10 rounded-xl w-95 items-center flex-col ${extraStyle}`}
    >
      {children}
    </div>
  );
}
