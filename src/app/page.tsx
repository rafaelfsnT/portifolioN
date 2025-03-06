"use client";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import {
  Container,
  HomeSection,
  Icons,
  HomeContent,
  TextColumn,
  ImageColumn,
  NavbarContainer,
  NavbarLink,
} from "../styles/style";

export default function Home() {
  const typewriterRef = useRef<HTMLHeadingElement | null>(null); // Define corretamente o tipo do useRef
  

  useEffect(() => {
    const typewriter = typewriterRef.current;
    if (!typewriter) return;

    const text = "< Software Developer />";
    let index = 0;
    let isAdding = true;

    function type() {
      if (typewriter) {
        typewriter.innerHTML = text.substring(0, index);
      }

      if (isAdding) {
        if (index < text.length) {
          index++;
          setTimeout(type, 75);
        } else {
          isAdding = false;
          setTimeout(type, 1000);
        }
      } else {
        if (index > 0) {
          index--;
          setTimeout(type, 75);
        } else {
          isAdding = true;
          setTimeout(type, 1000);
        }
      }
    }
    type();

   
  }, []);


  // Função para rolar para uma seção sem alterar a URL
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>Portifólio RFL</title>
        <link rel="icon" href="/favicon.ico" type="image/png" />
      </Head>

      <Container>
        {/* Navbar fixa no topo e alinhada à direita */}
        <NavbarContainer
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            padding: "10px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            backgroundColor: "transparent",
            boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
          }}
        >
          {/* Links da Navbar */}
          <NavbarLink
            onClick={() => scrollToSection("inicio")}
            style={{
              color: "aliceblue",
              marginLeft: "30px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "500",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Início
          </NavbarLink>
          <NavbarLink
            onClick={() => scrollToSection("sobre")}
            style={{
              color: "aliceblue",
              marginLeft: "30px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "500",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Sobre
          </NavbarLink>
          <NavbarLink
            onClick={() => scrollToSection("habilidades")}
            style={{
              color: "aliceblue",
              marginLeft: "30px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "500",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Habilidades
          </NavbarLink>
          <NavbarLink
            onClick={() => scrollToSection("servicos")}
            style={{
              color: "aliceblue",
              marginLeft: "30px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "500",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Serviços
          </NavbarLink>
          <NavbarLink
            onClick={() => scrollToSection("contato")}
            style={{
              color: "aliceblue",
              marginLeft: "30px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "500",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Contato
          </NavbarLink>
        </NavbarContainer>

        <HomeSection id="inicio" style={{ paddingTop: "80px" }}>
          <HomeContent>
            <TextColumn>
              <h1>Rafael Fassina Dos Santos</h1>
              <h2 ref={typewriterRef} id="typewriter">
                &lt; Software Developer /&gt;
              </h2>

              <Icons>
                <Link href="https://github.com/rafaelfsnT" target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/rafael-fassina-dos-santos-40805626a/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
                <Link
                  href="https://www.instagram.com/rafaelfsan/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </Link>
              </Icons>
            </TextColumn>

            <ImageColumn>
              <motion.img
                src="/memoji.png"
                alt="Memoji"
                width={300}
                height={300}
                style={{ borderRadius: "50%", cursor: "pointer" }}
                animate={{ x: [-10, 10, -10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </ImageColumn>
          </HomeContent>
        </HomeSection>

        <HomeSection id="sobre" style={{ marginTop: "50px" }}>
          <h1>Sobre Mim</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ flex: 1 }}>
              <img
                src="/perfil2.jpeg"
                alt="Rafael"
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #7f00ff",
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <p>
                Olá! Meu nome é Rafael, sou desenvolvedor brasileiro, apaixonado
                por tecnologia e inovação. Atualmente, estou focado no
                aprimoramento contínuo das minhas habilidades e no aprendizado
                de novas ferramentas e tecnologias. Tenho grande interesse em
                atuar nas áreas de desenvolvimento Mobile e Web, sempre buscando
                criar soluções eficientes e de alta qualidade. Minha missão é
                contribuir para o crescimento da tecnologia, oferecendo
                experiências digitais únicas e funcionalmente avançadas.
              </p>
            </div>
          </div>
        </HomeSection>

        <HomeSection id="habilidades">
          <h1>Habilidades</h1>
        </HomeSection>

      
      </Container>
    </>
  );
}
