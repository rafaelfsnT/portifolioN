"use client";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion"; // Importando animação
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
  HabilidadesSection,
  ButtonHabilidades,
} from "../styles/style";

export default function Home() {
  const typewriterRef = useRef<HTMLHeadingElement | null>(null); // Define corretamente o tipo do useRef
  const [isHabilidadesVisible, setIsHabilidadesVisible] = useState(false);
  
  useEffect(() => {
    const typewriter = typewriterRef.current;
    if (!typewriter) return; // Garante que o elemento existe antes de acessar

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
          setTimeout(type, 1000); // Pausa antes de apagar
        }
      } else {
        if (index > 0) {
          index--;
          setTimeout(type, 75);
        } else {
          isAdding = true;
          setTimeout(type, 1000); // Pausa antes de digitar novamente
        }
      }
    }
    type();
  }, []);

  const handleToggleHabilidades = () => {
    setIsHabilidadesVisible(!isHabilidadesVisible); // Alterna a visibilidade
  };
  return (
    <>
      <Head>
        <title>Portifólio RFL</title>
        <link rel="icon" href="/favicon.ico" type="image/png" />
      </Head>

      <Container>
        <HomeSection id="inicio">
          <HomeContent>
            {/* Coluna 1 - Texto e Ícones (Centralizados) */}
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

              <NavbarContainer>
                <NavbarLink href="#sobre">Sobre</NavbarLink>
                <NavbarLink href="#habilidades">Habilidades</NavbarLink>
                <NavbarLink href="#servicos">Serviços</NavbarLink>
                <NavbarLink href="#contato">Contato</NavbarLink>
              </NavbarContainer>
            </TextColumn>

            {/* Coluna 2 - Imagem (Empurrada para a direita) */}
            <ImageColumn>
              <motion.img
                src="/memoji.png"
                alt="Memoji"
                width={300}
                height={300}
                style={{ borderRadius: "50%", cursor: "pointer" }}
                animate={{ x: [-10, 10, -10] }} // Movimento para direita e esquerda
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </ImageColumn>
          </HomeContent>
        </HomeSection>

        <HomeSection id="sobre">
          <h1>Sobre Mim</h1>
          <p>
            Hello World, me chamo Rafael, sou brasileiro, e atualmente sou
            desenvolvedor. Procuro estar sempre aprimorando minhas habilidades e
            conhecer novas tecnologias. Procuro atuar na área de desenvolvimento
            Mobile e Web.
          </p>
          <ButtonHabilidades onClick={handleToggleHabilidades}>
            {isHabilidadesVisible ? "Esconder Habilidades" : "Ver Habilidades"}
          </ButtonHabilidades>
        </HomeSection>

        {/* Quadro de habilidades com animação */}
        <HabilidadesSection
          initial={{ opacity: 0, y: -50 }} // Inicialmente invisível e deslocado para cima
          animate={{
            opacity: isHabilidadesVisible ? 1 : 0, // Mostra ou esconde com transição
            y: isHabilidadesVisible ? 0 : -50, // Desliza de volta para cima ao esconder
          }}
          transition={{
            duration: 0.5, // Duração da animação
            ease: "easeInOut", // Suavização da animação
          }}
        >
          {isHabilidadesVisible && (
            <>
              <h2>Minhas Habilidades</h2>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>CSS e Styled Components</li>
                <li>Git e GitHub</li>
                {/* Adicione mais habilidades conforme necessário */}
              </ul>
            </>
          )}
        </HabilidadesSection>
      </Container>
    </>
  );
}
