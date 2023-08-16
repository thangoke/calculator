import React, { useContext, useState } from "react";
import StyleSheet from '../type/StyleSheet';
import { ThemeContext } from "../context/ThemeContext";

export default function Button({ children, background, handleButtonPress }: any) {

  let [isHover, setIsHover] = useState(false);
  const theme = useContext(ThemeContext);

  let themeStyles = theme === "light" ? { ...styles.gridItemLight } : { ...styles.gridItemDark };

  return (
    <button type="button"
      style={{ ...themeStyles, background: isHover ? "#1975c5" : background }}
      onMouseEnter={e => setIsHover(true)}
      onMouseLeave={e => setIsHover(false)}
      onClick={e => handleButtonPress((e.target as any).innerText)}>
      {children}
    </button >
  )
}

const styles: StyleSheet = {
  gridItemLight: {
    border: "0px solid rgba(0, 0, 0, 0.8)",
    borderRadius: "50%",
    padding: "0px",
    fontSize: "30px",
    textAlign: "center",
    color: "white",
  },
  gridItemDark: {
    border: "0px solid rgba(0, 0, 0, 0.8)",
    borderRadius: "15%",
    padding: "0px",
    fontSize: "30px",
    textAlign: "center",
    color: "black",
  }
}
