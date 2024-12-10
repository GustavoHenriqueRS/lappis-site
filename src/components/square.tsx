import React from "react";

export default function Square({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-lightgrey flex z-0 rounded-xl w-95 items-center flex-col pb-9">
      {children}
    </div>
  );
}
