import styled from 'styled-components';

// Container principal
export const Container = styled.div`
  background-color: #131313;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Navbar
export const Navbar = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

// Link estilizado
export const LinkStyled = styled.a`
  color: #7F00FF;
  font-size: 20px;
  border: 2px solid #7F00FF;
  border-radius: 30px;
  padding: 5px 20px;
  margin-right: 30px;
  text-decoration: none;
  transition: 0.4s;

  &:hover {
    color: aliceblue;
    font-size: 23px;
  }
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
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: aliceblue;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid;
    animation: blink-caret 0.75s step-end infinite;
    display: inline-block;
    height: 1.5em;
    line-height: 1.5em;
  }
`;

// Ícones
export const Icons = styled.div`
  text-align: center;
  padding: 20px;

  a {
    color: #7F00FF;
    font-size: 3em;
    margin-right: 80px;
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.2;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

// Links da Navbar
export const NavbarLink = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;

  ${LinkStyled} {
    margin: 0 15px;
    font-size: 2em;
    color: aliceblue;
    transition: 0.5s;

    &:hover {
      color: #7F00FF;
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
