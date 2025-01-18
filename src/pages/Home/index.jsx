import { useState } from "react";
import { analyzeCodeFromOpenAI } from "../../services/api";

import * as Styled from "./styles";

const Home = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const handleAnalyzeCode = async () => {
    setResult("Analisando...");
    try {
      const result = await analyzeCodeFromOpenAI(code);
      setResult(result);
    } catch (error) {
      console.error("Erro ao analisar o código:", error);
      setResult("Erro ao analisar o código.");
    }
  };

  return (
    <Styled.Container>
      <Styled.Header>Analisador de Código Malicioso</Styled.Header>
      <Styled.TextArea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Cole aqui o código a ser analisado..."
      />
      <Styled.Button onClick={handleAnalyzeCode}>Analisar Código</Styled.Button>
      {result && <Styled.Result>{result}</Styled.Result>}
    </Styled.Container>
  );
};

export default Home;
