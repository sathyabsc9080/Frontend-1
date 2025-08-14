import React, { useState } from "react";

function PalindromeChecker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function checkPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return "It is not a palindrome";
      }
    }
    return "It is a palindrome";
  }

  const handleCheck = () => {
    const res = checkPalindrome(input);
    setResult(res);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", fontSize:"30px",backgroundColor:"darkgreen"}}>
      <h2 style={{  fontFamily: "times new roman", fontSize:"30px", color:"darkblue"}}>Palindrome Checker</h2>
      <input 
        type="text"
        placeholder="Enter a string"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCheck} style={{ marginLeft: "10px" , fontSize:"30px"}}>
        Check
      </button>
      {result && (
        <p style={{ marginTop: "20px", fontWeight: "bold" , fontSize:"30px"}}>{result}</p>
      )}
    </div>
  );
}

export default PalindromeChecker;
