import React, { useState } from "react";
import StyleSheet from '../type/StyleSheet';

export default function Button({ children, background, handleButtonPress }: any) {

  let [isHover, setIsHover] = useState(false);
  let [operand, setOperand] = useState("");

  return (
    <button type="button"
      style={{ ...styles.gridItem, background: isHover ? "#1975c5" : background }}
      onMouseEnter={e => setIsHover(true)}
      onMouseLeave={e => setIsHover(false)}
      onClick={e => handleButtonPress((e.target as any).innerText)}>
      {children}
    </button >
  )
}

const styles: StyleSheet = {
  gridItem: {
    border: "0px solid rgba(0, 0, 0, 0.8)",
    borderRadius: "50%",
    padding: "0px",
    fontSize: "30px",
    textAlign: "center",
    color: "white",
  }
}
