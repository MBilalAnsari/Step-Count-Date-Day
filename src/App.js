import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [stpCount, setStpCount] = useState(0);
  const [count, setCount] = useState(0);

  function addStep() {
    setStpCount(stpCount + 1);
  }
  
  function revStep() {
    if (stpCount > 0) {
      setStpCount(stpCount - 1);
    }
  }
  
  function addCount() {
    setCount(count + stpCount);
  }
  
  function revCount() {
    if (count > 0) {
      setCount(count - stpCount);
    }
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#333' }}>Step and Count Tracker</h1>
      <Ui ui="Step" increStp={addStep} inctValue={stpCount} decreStp={revStep} />
      <Ui ui="Count" increStp={addCount} inctValue={count} decreStp={revCount} />
      <Paraui inctValue={count} />
    </div>
  );
}

const Ui = ({ ui, increStp, inctValue, decreStp }) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginTop: "30px",
      padding: "15px",
      border: "2px solid #4CAF50",
      borderRadius: "10px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s",
    }}>
      <button onClick={decreStp} style={{
        padding: "10px 15px",
        fontSize: "24px",
        backgroundColor: "#f44336",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s"
      }}>-</button>

      <strong style={{ padding: "10px", fontSize: "30px", color: "#333" }}>{ui} {inctValue}</strong>

      <button onClick={increStp} style={{
        padding: "10px 15px",
        fontSize: "24px",
        backgroundColor: "#4CAF50",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s"
      }}>+</button>
    </div>
  );
}

const Paraui = ({ inctValue }) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const now = new Date();
  const newdate = new Date(now);
  newdate.setDate(now.getDate() + inctValue);
  const daysOfweek = days[newdate.getDay()];
  const daysOfmonth = newdate.getDate();
  const month = months[newdate.getMonth()];
  const year = newdate.getFullYear();

  return (
    <div style={{ marginTop: "40px", padding: "20px", fontSize: "28px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <strong style={{ color: "#333" }}>Aj se {inctValue} din baad hai {daysOfweek} {daysOfmonth} {month} {year}</strong>
    </div>
  );
}

export default App;
