import React from 'react';
import './App.css';
import Button from './component/Button';
import StyleSheet from './type/StyleSheet';

function App() {
  return (
    <div className="App">
      <div style={styles.gridContainer}>
        <Button background="orange">C</Button>
        <Button background="orange">+/-</Button>
        <Button background="orange">%</Button>
        <Button background="blue">/</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button background="blue">X</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button background="blue">+</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button background="blue">-</Button>
        <Button>.</Button>
        <Button>0</Button>
        <Button>=</Button>
      </div>
    </div>
  );
}

const styles: StyleSheet = {
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "50px 50px 50px 50px",
    gridTemplateRows: "50px 50px 50px 50px 50px",
    backgroundColor: "#2196F3",
    padding: "10px",
    gap: "10px",
    width: "max-content",
  },
}

export default App;
