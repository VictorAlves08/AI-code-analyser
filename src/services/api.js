import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const analyzeCodeFromOpenAI = async (code) => {
  const prompt = `
    You are a cybersecurity expert with extensive experience in analyzing malicious code and performing security audits. 
    Your task is to analyze a given code snippet, identify potential malicious intentions, vulnerabilities, and suspicious patterns. 
    Provide a detailed response in Brazilian Portuguese, and return the result as an HTML document with the following structure:
    
    1. Use semantic HTML tags (<h3>, <p>, <pre>).
    2. Add CSS classes to each section for styling:
      - Section titles ("Descrição Geral") must be wrapped in <h3> tags with the class "section-title".
      - Paragraphs of text must be wrapped in <p> tags with the class "section-content".
      - Lists must be in <ul> or <ol> tags with the class "section-list", and items must have the class "list-item".
      - Code snippets must be wrapped in <pre> tags with the class "code-block".
    
    The response must always follow this exact format:
    
    <h3 class="section-title">1. Descrição Geral</h3>
    <p class="section-content">[Provide a general description of the code, its purpose, and its behavior.]</p>
    
    <h3 class="section-title">2. Detecção de Intenções Maliciosas</h3>
    <p class="section-content">[Identify any suspicious or potentially malicious intentions in the code.]</p>
    
    <h3 class="section-title">3. Análise de Vulnerabilidades</h3>
    <ul class="section-list">
      <li class="list-item">[List specific vulnerabilities found in the code, if any.]</li>
    </ul>
    
    <h3 class="section-title">4. Recomendações de Mitigação</h3>
    <p class="section-content">[Provide detailed recommendations to mitigate identified vulnerabilities.]</p>
    
    <h3 class="section-title">5. Conclusão</h3>
    <p class="section-content">[Summarize the findings and indicate if the code is malicious or safe based on the analysis.]</p>
    
    ### Código para Análise:
    \`\`\`
    ${code}
    \`\`\`
    
    Make sure your response is clear, technical, and includes relevant references or explanations of technical terms, if necessary.
  `;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "developer",
          content: [
            {
              type: "text",
              text: "You are a cybersecurity expert with extensive experience in analyzing malicious code and performing security audits.",
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt,
            },
          ],
        },
      ],
    });
    console.log("completion", completion);
    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error("Erro na análise de código:", error);
    throw new Error("Erro ao processar a solicitação com a API OpenAI.");
  }
};
