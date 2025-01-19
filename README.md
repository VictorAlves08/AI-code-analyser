# 🛡️ Analisador de Código Malicioso com OpenAI

Um projeto desenvolvido em React.js que utiliza a API da OpenAI para analisar trechos de código, identificar intenções maliciosas e fornecer um relatório detalhado em português do Brasil.

## 🌟 Acesse Agora

Este projeto está hospedado e acessível pelo link: [ai-code-analyser-two.vercel.app](https://ai-code-analyser-two.vercel.app/)

---

## 🌟 Objetivo

Este projeto foi criado para fornecer uma ferramenta prática e educativa de análise de código com foco em segurança cibernética. Ele permite que os usuários insiram trechos de código e recebam um relatório técnico sobre vulnerabilidades, intenções maliciosas e sugestões de mitigação.

---

## 🛠️ Funcionalidades

- **Entrada de código:** Interface amigável para inserir trechos de código.
- **Análise de segurança:** Conexão com a API da OpenAI para análise detalhada.
- **Relatório estruturado:** Respostas formatadas em HTML com classes para estilização.
- **Feedback claro:** Identificação de possíveis ameaças, vulnerabilidades e melhorias.

---

## 🗄️ Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 16+ recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Chave de API da OpenAI

---

## 🚀 Tecnologias Utilizadas

- **[React.js](https://reactjs.org/):** Biblioteca para construção da interface.
- **[Vite](https://vitejs.dev/):** Ferramenta de build rápida para desenvolvimento.
- **[styled-components](https://styled-components.com/):** Estilização de componentes no React.
- **[react-icons](https://react-icons.github.io/react-icons/):** Ícones para melhorar a interface.
- **[OpenAI API](https://openai.com/):** Modelo de IA para análise de código.

---

## 📦 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/analisador-codigo-malicioso.git
   cd analisador-codigo-malicioso
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API da OpenAI:
   ```env
   VITE_OPENAI_API_KEY=sua-chave-aqui
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Acesse o projeto no navegador:
   ```
   http://localhost:5173
   ```

---

## 🔧 Como Usar

1. Cole o código que deseja analisar no campo de entrada.
2. Clique em **"Analisar Código"**.
3. Aguarde a análise enquanto o botão exibe um ícone de carregamento.
4. Veja o relatório detalhado gerado abaixo do botão.

---

## 🗋 Estrutura do Projeto

```plaintext
.
├── public/                  # Arquivos públicos
├── src/                     # Código-fonte
│   ├── pages/               # Páginas principais
│   │   ├── Home.jsx         # Página inicial
│   │   ├── styles.js        # Estilos da página inicial
│   ├── services/            # Serviços (API)
│   │   ├── api.js           # Integração com a API da OpenAI
│   ├── styles/              # Estilos globais
│   │   ├── GlobalStyles.js  # Estilos globais
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Ponto de entrada do React
├── .env                     # Variáveis de ambiente (não versionado)
├── .gitignore               # Arquivos e pastas ignorados pelo Git
├── package.json             # Configurações do projeto
```

---

## 🎮 Funcionalidades Adicionais

- **Relatório Estruturado:**
  - O relatório é gerado em HTML com classes específicas para fácil estilização.
  - Tópicos incluem:
    1. Descrição Geral
    2. Detecção de Intenções Maliciosas
    3. Análise de Vulnerabilidades
    4. Recomendações de Mitigação
    5. Conclusão
---

## 🛡️ Segurança

- **Proteção da Chave da API:**
  - Certifique-se de que o arquivo `.env` não seja incluído no Git (`.gitignore`).
- **Validação de Entrada:**
  - O código inserido é enviado diretamente à OpenAI para análise.

---

## 📫 Contato

- **Desenvolvedor:** Victor Oliveira
- **Universidade Federal de Viçosa**
- **GitHub:** [@victoralves08](https://github.com/VictorAlves08)
- **LinkedIn:** [Victor Oliveira](https://www.linkedin.com/in/victor-alves-de-oliveira/)
---

