import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SecondCrossword = () => {
  const grid = [
    [null, null, null, "H", "E", "E", "L", "S", null, null],
    ["M", "U", "J", "E", "R", "E", "S", null, null, null],
    ["P", "A", "C", "O", "N", "E", null, null, null, null],
    ["M", "A", "M", "B", "O", null, null, null, null, null],
    [null, "A", "W", "L", "A", "B", null, null, null, null],
  ];

  const solution = [
    [null, null, null, "H", "E", "E", "L", "S", null, null],
    ["M", "U", "J", "E", "R", "E", "S", null, null, null],
    ["P", "A", "C", "O", "N", "E", null, null, null, null],
    ["M", "A", "M", "B", "O", null, null, null, null, null],
    [null, "A", "W", "L", "A", "B", null, null, null, null],
  ];

  const isFirstOrLastLetter = (row, col) => {
    const currentRow = grid[row];
    const firstLetterIndex = currentRow.findIndex(cell => cell !== null);
    const lastLetterIndex = currentRow.findLastIndex(cell => cell !== null);
    return col === firstLetterIndex || col === lastLetterIndex;
  };

  const [userGrid, setUserGrid] = useState(
    grid.map((row) => row.map((cell, colIndex) => {
      if (cell === null) return null;
      // Show first letter of the row
      if (colIndex === row.findIndex(c => c !== null)) return cell;
      // Show last letter of the row
      if (colIndex === row.findLastIndex(c => c !== null)) return cell;
      return "";
    }))
  );

  const navigate = useNavigate();

  const handleInputChange = (e, row, col) => {
    const value = e.target.value.toUpperCase().slice(0, 1);
    const updatedGrid = [...userGrid];
    updatedGrid[row][col] = value;
    setUserGrid(updatedGrid);
  };

  const checkSolution = () => {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (solution[row][col] && userGrid[row][col] !== solution[row][col]) {
          alert("Le risposte non sono corrette!");
          return;
        }
      }
    }
    alert("Congratulazioni! Hai completato il cruciverba!");
    navigate("/menu");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Cruciverba</h1>
      <div
        className="grid gap-1 bg-gray-300 p-2"
        style={{ gridTemplateColumns: "repeat(10, 2.5rem)" }}
      >
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div key={`${rowIndex}-${colIndex}`} className="relative">
              {cell !== null ? (
                <input
                  type="text"
                  maxLength="1"
                  value={userGrid[rowIndex][colIndex]}
                  onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                  className={`w-10 h-10 text-center text-lg border border-gray-700 uppercase ${
                    isFirstOrLastLetter(rowIndex, colIndex)
                      ? "bg-gray-200 font-bold cursor-default"
                      : "bg-white"
                  }`}
                  disabled={isFirstOrLastLetter(rowIndex, colIndex)}
                />
              ) : (
                <div className="w-10 h-10 bg-gray-400" />
              )}
            </div>
          ))
        )}
      </div>
      <button
        onClick={checkSolution}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Verifica Soluzione
      </button>
      <div className="mt-4 text-left">
        <h2 className="font-bold">Indizi:</h2>
        <ol className="list-decimal list-inside">
          <li>LATIN BATTONA</li>
          <li>MARZO</li>
          <li>CAGNOLONE</li>
          <li>DUE</li>
          <li>CIABATTE</li>
        </ol>
      </div>
    </div>
  );
};

export default SecondCrossword;
