import styled from 'styled-components';

// Container principal
export const Container = styled.div`
  background-color: #131313;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Link estilizado
export const LinkStyled = styled.a`
  color: #f0f0f0;
  font-size: 25px;
  border: 2px solid #7F00FF;
  border-radius: 30px;
  padding: 5px 20px;
  margin-right: 30px;
  text-decoration: none;
  transition: 0.4s;

  &:hover {
    color: #7F00FF;
    opacity: 0.2s;
  }
`;

export const NavbarLink = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;

  
`;


// Avatar
export const Avatar = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 100%;
  overflow: hidden;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Seção Home
export const HomeSection = styled.section`
  text-align: center;
  padding-top: 250px;

  h1 {
    color: #7F00FF;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  h2 {
    margin: 2rem; 
    font-size: 1.6rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: aliceblue;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid;
    animation: blink-caret 0.75s step-end infinite;
    display: inline-block;
    height: 2rem;
    line-height: 2rem;
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


// Seção Sobre
export const SobreSection = styled.section`
  padding-top: 450px;
  color: #7F00FF;

  h1 {
    color: #7F00FF;
  }

  h3 {
    color: aliceblue;
  }
`;

// Container estilizado para seções
export const ContainerStyled = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
