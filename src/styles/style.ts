import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

// Container principal
export const Container = styled.div`
   background-color: #f4f4f4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 10px 20px;     
  background-color: #f4f4f4;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Logo estilizado
export const NavbarLogo = styled.img`
  height: 50px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    height: 40px;
  }
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
export const NavbarLink = styled.a`
  color: #7F00FF;
  font-size: 16px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0 15px;
  margin-left: 30px;
  padding: 10px 15px;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: 25px;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;
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

const commonTextStyle = `
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: #7F00FF;
`;

// Estilizações Sections
export const HomeSection = styled.section`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  min-height: 100vh;

  h1 {
    ${commonTextStyle}
    color: #7F00FF;
    font-size: 2.5rem;
    padding-bottom: 2.5%;
  }

  h2 {
    ${commonTextStyle}
    color: #7F00FF;
    font-size: 1.8rem;
    margin: 2rem;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid;
    animation: blink-caret 0.75s step-end infinite;
    display: inline-block;
    height: 2rem;
    line-height: 2rem;
  }

  p {
    color: #9B4DFF;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.2rem;  
    line-height: 1.8rem; 
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0 20px; 
    max-width: 800px; 
    text-align: justify; 
    letter-spacing: 0.5px;  
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.1rem;
      padding: 0 10px;
    }
  } 
`;

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
  align-items: center; 
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
      width: 15ch;
    }
  }

  @keyframes blink-caret {
    50% {
      border-color: transparent;
    }
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

// Serivços
export const ServiceContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const ServiceCard = styled.div`
  width: 30%;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1) ;
  transition: background-color 0.3s ease;

  a {
    color: aliceblue;
    background-color: #7F00FF;
    padding: 10px;
    border-radius: 50px;
    text-decoration: none;
    font-size: 1.2rem;
    display: inline-block;
    transition: background-color 0.3s ease, transform 0.3s ease;
    margin-top: auto; 
    
    &:hover {
      animation: ${hoverAnimation} 0.3s ease-in-out forwards;
      background-color: #6a00cc; 
    }
  }
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const ServiceTitle = styled.h3`
color: #7F00FF;
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
`;

// Page Contact

export const Section = styled.section`
  padding: 80px 20px;
  background: linear-gradient(to bottom, #f4f4f9, #e8e8f3);
  display: flex;
  justify-content: center;
`;

export const InfoSection = styled.div`
  background: #7f00ff;
  color: aliceblue;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

export const InfoItem = styled.p`
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 12px;

  a {
    color: white;
    text-decoration: none;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

export const SocialLink = styled.a`
  color: white;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const FormSection = styled.div`
  padding: 40px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #7f00ff;
    outline: none;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 8px 0 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #7f00ff;
    outline: none;
  }
`;

export const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 14px;
  background: #7f00ff;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #5900b3;
  }
`;

// Footer
export const FooterContainer = styled.footer`
  background: #121212;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
`;
export const SocialIconsFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const IconLink = styled.a`
  color: #fff;
  font-size: 24px;
  transition: 0.3s;

  &:hover {
    color: #7f00ff;
    transform: scale(1.1);
  }
`;

export const FooterText = styled.p`
  font-size: 14px;
  opacity: 0.7;
`;