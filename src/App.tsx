import React, { useState, useEffect } from "react";
import InstaComponent from "./components/InstaComponent";
import Logo from "./assets/logo.png"
import InstagramProfile from "./components/InstagramProfile";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("Obrigado por se inscrever!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 font-poppins">
      <div className="flex items-center mb-10">
        <img src={Logo} width={100} className="pr-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Turistando Portugal</h1>
      </div>
      <p className="text-gray-600 mb-6 text-center max-w-lg">
        Descubra os melhores destinos de Portugal! Explore praias, montanhas, cidades históricas e muito mais.
      </p>

      <form onSubmit={handleSubscribe} className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-72"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Inscrever-se
        </button>
      </form>
      {message && <p className="text-green-600 mt-4">{message}</p>}
      {/* <InstagramProfile /> */}
      <InstaComponent />
    </div>
  );
}
