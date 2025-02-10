'use client'
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { motion } from 'framer-motion'; // Importando animação
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  Container,
  LinkStyled,
  HomeSection,
  Icons,
  NavbarLink,
} from '../styles/style';

export default function Home() {
  const typewriterRef = useRef<HTMLHeadingElement | null>(null); // Define corretamente o tipo do useRef

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
  

  return (
    <>
      <Container>
        <Head>
          <title>Portifólio RFL</title>
          <link rel="icon" href="/img/logo.png" />
        </Head>

        <HomeSection id="inicio">
          <h1>Rafael Fassina Dos Santos</h1>
          <h2 ref={typewriterRef} id="typewriter">&lt; Software Developer /&gt;</h2>

          <Icons>
            <Link href="https://github.com/rafaelfsnT" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
            <Link href="https://www.linkedin.com/in/rafael-fassina-dos-santos-40805626a/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Link>
            <Link href="https://www.instagram.com/rafaelfsan/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </Link>
          </Icons>
        </HomeSection>

        <NavbarLink>
          <LinkStyled href="#sobre">Sobre</LinkStyled>
          <LinkStyled href="#services">Serviços</LinkStyled>
          <LinkStyled href="#contato">Contato</LinkStyled>
        </NavbarLink>
      </Container>
    </>
  );
}


{/* Memoji animado */ }
{/* <motion.div
           animate={{
             x: [-20, 20, -20], // Movendo para a direita e esquerda
           }}
           transition={{
             repeat: Infinity,
             duration: 2,
             ease: "easeInOut",
           }}
           style={{ width: 80, height: 80, margin: '20px auto' }}
         >
           <Image src="/memoji.png" alt="Memoji" width={80} height={80} />
         </motion.div> */}