import React, { useState } from "react";
import StyleSheet from '../type/StyleSheet';

export default function Button({ children, background }: any) {

  let [isHover, setIsHover] = useState(false);

  return (
    <button type="button"
      style={{ ...styles.gridItem, background: isHover ? "#1975c5" : background }}
      onMouseEnter={e => setIsHover(true)}
      onMouseLeave={e => setIsHover(false)}>
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
