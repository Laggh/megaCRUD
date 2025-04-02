import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import { useState, useEffect} from 'react'

import { pingApi } from "../utils/api.js"


function Ping() {
  const [response, setResponse] = useState("Nada");

  useEffect( () => {
    setResponse(pingApi())
  }, [] );

  return (
    <>
        <h1>Ping</h1>
        <p>resposta: {response}</p>
    </>
  );
} 

export default Ping
