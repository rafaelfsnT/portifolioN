"use client";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Sobre } from "./components/Sobre";
import Habilidades from "./components/Habilidades";
import Servicos from "./components/Servicos";
import Contato from "./components/Contato";
import Head from "next/head";
import Footer from "./components/Footer";
import { Container } from "@/styles/style";

export default function Home() {
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
        <Header onNavigate={scrollToSection} />
        <Hero />
        <Sobre />
        <Habilidades />
        <Servicos />
        <Contato />
      </Container>
      <Footer />

    </>
  );
}
