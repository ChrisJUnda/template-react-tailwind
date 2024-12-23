import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Card = () => {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (word1.toLowerCase() === "roma" && word2.toLowerCase() === "amore") {
      navigate("/SuccessPage");
    } else {
      alert("Le parole non sono corrette!");
    }
  };


    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-lg space-y-4"
      >
        <h1 className="text-xl font-bold text-center">Completa il test</h1>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Inserisci la prima parola"
            value={word1}
            onChange={(e) => setWord1(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Inserisci la seconda parola"
            value={word2}
            onChange={(e) => setWord2(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Invia
        </button>
      </form>
    </div>
  );

}

export default Card;