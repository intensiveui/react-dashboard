import React, { FC } from "react";

const Button : FC<{onClick: any, children: any}> = ({onClick, children}) => (
    <span onClick={onClick} 
        style={{cursor: "pointer", border: "solid 1px crimson", padding: '2px 5px', borderRadius: 10, fontSize: 13, 
        color: "crimson", margin: "0 6px"}}
    >
        {children}
        </span>
)

export default Button;