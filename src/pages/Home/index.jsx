import { useState } from "react";
import { analyzeCodeFromOpenAI } from "../../services/api";
import { FaSpinner } from "react-icons/fa";

import * as Styled from "./styles";

const Home = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyzeCode = async () => {
    if (!code?.trim()) {
      setResult("Por favor, insira um código para análise.");
      return;
    }

    setLoading(true);

    try {
      let analysis = await analyzeCodeFromOpenAI(code);
      analysis = analysis.replace(/```html/g, "").replace(/```/g, "").trim();
      setResult(analysis);
    } catch (error) {
      console.error("Erro ao analisar o código:", error);
      setResult("Erro ao analisar o código. Tente novamente.");
    } finally {
      setLoading(false);
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
      <Styled.Button onClick={handleAnalyzeCode} disabled={loading || !code?.trim()}>
        {loading ? (
          <>
            <FaSpinner className="spinner" /> Analisando...
          </>
        ) : (
          "Analisar Código"
        )}
      </Styled.Button>
      {result && (
        <Styled.StyledHTML>
          <div dangerouslySetInnerHTML={{ __html: result }} />
        </Styled.StyledHTML>
      )}
    </Styled.Container>
  );
};

export default Home;
