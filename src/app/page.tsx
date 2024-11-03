'use client'
import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Container, 
  Navbar, 
  LinkStyled, 
  Avatar, 
  HomeSection, 
  Icons, 
  NavbarLink, 
  SobreSection, 
  ContainerStyled 
} from '../styles/style';
export default function Home() {
  const typewriterRef = useRef(null); // Referência para o elemento do typewriter

  useEffect(() => {
    const typewriter = typewriterRef.current;
    const text = "< Desenvolvedor Front End />";
    let index = 0;
    let isAdding = true;
    let isWaiting = false;

    function type() {
      typewriter.innerHTML = text.substring(0, index);
      
      if (isAdding) {
        if (index < text.length) {
          index++;
          setTimeout(type, 75);
        } else {
          isAdding = false;
          isWaiting = true;
          setTimeout(() => {
            isWaiting = false;
            type();
          }, 1000); // Pausa antes de começar a apagar
        }
      } else {
        if (index > 0) {
          index--;
          setTimeout(type, 75);
        } else {
          isAdding = true;
          setTimeout(type, 1000); // Pausa antes de começar a digitar novamente
        }
      }
    }

    type();
  }, []);
  return (
    <>
      <Container>
        <Head>
          <title>Portifólio RFL</title>
          <link rel="icon" href="/img/logo.png" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
            crossOrigin="anonymous"
          />
        </Head>
        <HomeSection id="inicio">
          <h1>Rafael F Santos</h1>
          <h2 ref={typewriterRef} id="typewriter">&lt; Desenvolvedor Front End /&gt;</h2>

          <Icons>
            <Link href="https://github.com/rafaelfsnT" target="_blank">
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link href="https://www.linkedin.com/in/rafael-f-san-40805626a/" target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link href="https://www.instagram.com/rafaelfsan/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </Icons>

          <NavbarLink>
            <LinkStyled href="#sobre">Sobre</LinkStyled>
            <LinkStyled href="#services">Serviços</LinkStyled>
            <LinkStyled href="#contato">Contato</LinkStyled>
          </NavbarLink>
        </HomeSection>

        <SobreSection id="sobre">
          <ContainerStyled className="container text-center">
            <div className="row">
              <div className="col-7">
                <Avatar>
                  <Image src="/perfil1.jpeg" alt="foto pessoal" width={180} height={180} />
                </Avatar>
              </div>
              <div className="col-5">
                <h1> Sobre mim</h1>
                <h3>
                  Hello World, eu me chamo Rafael, sou do Paraná - Brasil, e faço graduação de Sistemas
                  para Internet. <br />
                  Busco cada vez melhorar minhas skills e meus conhecimentos, e conhecer novas áreas e
                  tecnologias.
                </h3>
              </div>
            </div>
          </ContainerStyled>
        </SobreSection>

        {/* Adicione a seção de serviços aqui */}
      </Container>
    </>
  );
}
