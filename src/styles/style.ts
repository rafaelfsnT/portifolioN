import styled, { keyframes } from 'styled-components';

// Container principal
export const Container = styled.div`
   background-color: #1e1e1e;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative; /* Permite que o círculo seja posicionado relativamente a esse container */
`;
// Seção Home
export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  h1 {
    color: #7F00FF;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 2.4rem;
  }

  h2 {
    margin: 2rem;
    font-size: 1.8rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: aliceblue;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid;
    animation: blink-caret 0.75s step-end infinite;
    display: inline-block;
    height: 2rem;
    line-height: 2rem;
  }
    p {
    color: aliceblue;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.2rem;  /* Ajustei para tamanho mais adequado */
    line-height: 1.8rem;  /* Maior espaçamento entre linhas para melhor legibilidade */
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0 20px;  /* Espaçamento lateral para evitar que o texto encoste nas bordas em telas pequenas */
    max-width: 800px;  /* Limita a largura para uma melhor leitura */
    text-align: justify;  /* Melhora a justificação do texto */
    letter-spacing: 0.5px;  /* Leve espaçamento nas letras para clareza */
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.1rem;  /* Ajuste para telas menores */
      padding: 0 10px;  /* Menos espaçamento nas laterais em telas pequenas */
    }
  } 
`;

// Wrapper para dividir a Home em duas colunas
export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// Estilização da Coluna de Texto
export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  /* Centraliza o texto */
  text-align: center;
  flex: 1;

  @media (max-width: 768px) {
    align-items: center;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 15ch; /* Tamanho do texto que será digitado */
    }
  }

  @keyframes blink-caret {
    50% {
      border-color: transparent;
    }
  }
`;

// Estilização da Coluna de Imagem (Move para a direita)
export const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;  /* Move a imagem para a direita */
  align-items: center;
  margin-left: auto; /* Empurra a imagem ainda mais para a direita */

  @media (max-width: 768px) {
    justify-content: center; /* Centraliza a imagem em telas menores */
    margin-left: 0;
  }
`;

// Ícones
export const Icons = styled.div`
  text-align: center;
  padding: 40px;

  a {
    color: #7F00FF;
    transition: opacity 0.5s;
  
    font-size: 1.5rem;
    margin-right: 100px;
    
    &:hover {
      opacity: 0.2 ;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

// Container do Navbar para manter alinhado
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const tapAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
`;

// Animação de hover (zoom suave)
const hoverAnimation = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
`;

// Estilização dos links de navegação
export const NavbarLink = styled.a`
  color: #f0f0f0;
  font-size: 20px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0 15px;
  padding: 10px 15px;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: 25px;
  transition: all 0.3s ease-in-out;
  position: relative;
  cursor: pointer;

  &:hover {
    background: #7F00FF;
    color: #fff;
    border-color: #7F00FF;
    animation: ${hoverAnimation} 0.2s ease-in-out forwards;
  }

  &:active {
    animation: ${tapAnimation} 0.2s ease-in-out;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 10px;
    padding: 8px 12px;
  }
`;