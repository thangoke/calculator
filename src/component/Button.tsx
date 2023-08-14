import React from "react";
import StyleSheet from '../type/StyleSheet';

export default function Button({ children, background }: any) {
  const customizer: React.CSSProperties = {}

  if (background) {
    customizer.background = background;
  }

  return (
    <button type="button" style={{ ...styles.gridItem, ...customizer }}>
      {children}
    </button >
  )
}

const styles: StyleSheet = {
  gridItem: {
    backgroundColor: "gray",
    border: "0px solid rgba(0, 0, 0, 0.8)",
    borderRadius: "50%",
    padding: "0px",
    fontSize: "30px",
    textAlign: "center",
    color: "white"
  }
}
