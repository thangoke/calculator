import React from "react";
import StyleSheet from '../type/StyleSheet';

export default function Button({ children }: any) {
    return (
        <button type="button" style={styles.gridItem}>
            {children}
        </button>
    )
}

const styles: StyleSheet = {
  gridItem: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "1px solid rgba(0, 0, 0, 0.8)",
    padding: "20px",
    fontSize: "30px",
    textAlign: "center",
  }
}
