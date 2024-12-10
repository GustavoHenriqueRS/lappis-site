import React from "react";

export default function Square({children}:{children: React.ReactNode}){
    return(
    <div className="w-full h-square bg-lightgrey flex z-0 rounded-xl ">
        {children}
    </div>
)
}