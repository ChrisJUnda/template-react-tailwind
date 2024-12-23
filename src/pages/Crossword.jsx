

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Importa useNavigate


const Crossword = () => {
  const grid = [
    ["B", "A", "R", "C", "E", "L", "L", "O", "N", "A"],
    [null, null, "R", "O", "M", "E", "O", null, null, null],
    [null, null, "R", "I", "M", "I", "N", "I", null, null],
    [null, null, "C", "A", "N", "A", "R", "I", "O", null],
  ];

  const solution = [
    ["B", "A", "R", "C", "E", "L", "L", "O", "N", "A"],
    [null, null, "R", "O", "M", "E", "O", null, null, null],
    [null, null, "R", "I", "M", "I", "N", "I", null, null],
    [null, null, "C", "A", "N", "A", "R", "I", "O", null],
  ];

  // Stato della griglia
  const [userGrid, setUserGrid] = useState(
    grid.map((row, rowIndex) =>
      row.map((cell, colIndex) =>
        cell === null ||
        (rowIndex === 0 && (colIndex === 0 || colIndex === 9)) ||
        (rowIndex === 1 && (colIndex === 2 || colIndex === 6)) ||
        (rowIndex === 2 && (colIndex === 2 || colIndex === 7)) ||
        (rowIndex === 3 && (colIndex === 2 || colIndex === 8))
          ? cell
          : ""
      )
    )
  );

  // Crea una funzione di navigazione
  const navigate = useNavigate();

  // Gestione del cambio input
  const handleInputChange = (e, row, col) => {
    const value = e.target.value.toUpperCase().slice(0, 1); // Solo una lettera maiuscola
    const updatedGrid = [...userGrid];
    updatedGrid[row][col] = value;
    setUserGrid(updatedGrid);
  };

  // Controlla se la soluzione è corretta
  const checkSolution = () => {
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (
          solution[row][col] &&
          userGrid[row][col] !== solution[row][col]
        ) {
          alert("Le risposte non sono corrette!");
          return;
        }
      }
    }
    alert("Congratulazioni! Hai completato il cruciverba!");
    // Naviga alla seconda pagina
    navigate("/second-crossword");
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
              {cell ? (
                <input
                  type="text"
                  maxLength="1"
                  value={userGrid[rowIndex][colIndex]}
                  onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                  className={`w-10 h-10 text-center text-lg border border-gray-700 uppercase ${
                    (rowIndex === 0 && (colIndex === 0 || colIndex === 9)) ||
                    (rowIndex === 1 && (colIndex === 2 || colIndex === 6)) ||
                    (rowIndex === 2 && (colIndex === 2 || colIndex === 7)) ||
                    (rowIndex === 3 && (colIndex === 2 || colIndex === 8))
                      ? "bg-gray-200 font-bold cursor-default"
                      : "bg-white"
                  }`}
                  disabled={
                    (rowIndex === 0 && (colIndex === 0 || colIndex === 9)) ||
                    (rowIndex === 1 && (colIndex === 2 || colIndex === 6)) ||
                    (rowIndex === 2 && (colIndex === 2 || colIndex === 7)) ||
                    (rowIndex === 3 && (colIndex === 2 || colIndex === 8))
                  }
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
           <li>Sangria</li>
           <li>King</li>
           <li>Alcool, estate, mare</li>
           <li>
             Uccellino, flauto
                      </li>
        </ol>
      </div>
    </div>
  );
};

export default Crossword;

