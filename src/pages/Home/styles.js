import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const Header = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 20px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 1.2rem;
  color: #fff;
  background: ${(props) => (props.disabled ? "#cccccc" : "#007bff")};
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:hover {
    background: ${(props) => (props.disabled ? "#cccccc" : "#0056b3")};
  }

  .spinner {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const StyledHTML = styled.div`
  .section-title {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .section-content {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .section-list {
    margin-left: 20px;
    margin-bottom: 15px;
  }

  .list-item {
    font-size: 1rem;
    margin-bottom: 5px;
    line-height: 1.4;
  }

  .code-block {
    background: #f7f9fc;
    border-left: 4px solid #007bff;
    padding: 10px;
    font-family: "Courier New", Courier, monospace;
    font-size: 0.9rem;
    overflow-x: auto;
    border-radius: 5px;
    margin: 10px 0;
    color: #333;
    white-space: pre-wrap;
  }
`;
