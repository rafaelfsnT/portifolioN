"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faReact, faNode, faCss3Alt, faJsSquare
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { FaPaintBrush, FaUsers, FaSeedling, FaBullseye } from 'react-icons/fa'; 
import { Mail, MapPin } from "lucide-react";
import {
  Container,
  HomeSection,
  Icons,
  HomeContent,
  TextColumn,
  NavbarContainer,
  NavbarLink,
  ServiceContainer,
  ServiceCard,
  ServiceImage,
  ServiceTitle,
  Section,
  InfoSection,
  InfoItem,
  SocialIcons,
  SocialLink,
  FormSection,
  StyledInput,
  StyledTextarea,
  SubmitButton,
  FooterContainer,
  IconLink,
  FooterText,
  SocialIconsFooter,
  NavbarLogo,
} from "../styles/style";
import { useEffect, useRef } from "react";

export default function Home() {
  const typewriterRef = useRef<HTMLHeadingElement | null>(null); // Define corretamente o tipo do useRef

  const skills = [
    { name: "React", icon: faReact, level: 75 },
    { name: "Node.js", icon: faNode, level: 80 },
    { name: "CSS", icon: faCss3Alt, level: 70 },
    { name: "JavaScript", icon: faJsSquare, level: 90 },
  ];

  const sortedSkills = skills.sort((a, b) => b.level - a.level);

  // Animação de digitar e apagar a frase
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
        <NavbarContainer>
          <NavbarLogo
            src="/logo.png"
            alt="Logo"
            onClick={() => scrollToSection("inicio")}
          />
          <div>
            <NavbarLink onClick={() => scrollToSection("sobre")}>Sobre</NavbarLink>
            <NavbarLink onClick={() => scrollToSection("habilidades")}>Habilidades</NavbarLink>
            <NavbarLink onClick={() => scrollToSection("servicos")}>Serviços</NavbarLink>
            <NavbarLink onClick={() => scrollToSection("contato")}>Contato</NavbarLink>
          </div>
        </NavbarContainer>

        <HomeSection id="inicio" >
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

          
          </HomeContent>
        </HomeSection>

        <HomeSection id="sobre">
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
                src="/perfil.jpg"
                alt="Rafael"
                style={{
                  width: "300px",
                  height: "320px",
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

        {/* Section Habilidades */}
        <HomeSection id="habilidades">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Habilidades
          </motion.h1>

          <div style={{ display: "flex", gap: "30px", marginTop: "20px", flexWrap: "wrap" }}>
            {sortedSkills.map((skill, index) => (
              <motion.div
                key={index}
                style={{
                  flex: "1 1 200px",
                  padding: "20px",
                  background: "#f4f4f4",
                  borderRadius: "10px",
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <FontAwesomeIcon icon={skill.icon} size="3x" />
                <h3>{skill.name}</h3>

                <div style={{ display: "flex", alignItems: "center", width: "100%", marginTop: "10px" }}>
                  <div
                    style={{
                      width: "100%",
                      background: "#e0e0e0",
                      borderRadius: "5px",
                      height: "8px",
                      position: "relative",
                    }}
                  >
                    <motion.div
                      style={{
                        height: "100%",
                        borderRadius: "5px",
                        background: "#7f00ff",
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <span style={{ marginLeft: "10px", fontWeight: "bold", color: "#7f00ff" }}>
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: '5rem' }}
          >
            Soft Skills
          </motion.h1>

          <div style={{ display: "flex", gap: "30px", marginTop: "20px", justifyContent: "center" }}>
            <motion.div
              style={{
                flex: "1 1 150px",
                padding: "20px",
                background: "#f4f4f4",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaPaintBrush size="3rem" />
              <h3>Criatividade</h3>
            </motion.div>

            <motion.div
              style={{
                flex: "1 1 150px",
                padding: "20px",
                background: "#f4f4f4",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaUsers size="3rem" />
              <h3>Trabalho em Equipe</h3>
            </motion.div>

            <motion.div
              style={{
                flex: "1 1 150px",
                padding: "20px",
                background: "#f4f4f4",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaSeedling size="3rem" />
              <h3>Adaptabilidade</h3>
            </motion.div>

            <motion.div
              style={{
                flex: "1 1 150px",
                padding: "20px",
                background: "#f4f4f4",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaBullseye size="3rem" />
              <h3>Foco</h3>
            </motion.div>
          </div>
        </HomeSection>

        {/* Section Serviços */}
        <HomeSection id="servicos">
          <h1>Serviços</h1>
          <ServiceContainer>
            <ServiceCard>
              <ServiceTitle>Projeto Casa da Paz Umuarama-PR (NextJS)
              </ServiceTitle>
              <ServiceImage src="/projeto1.png" alt="Imagem 1" />
              <p>Esse projeto foi desenvolvido em sala em equipes. O intuito desse projeto era trazer algo mais moderno,e eles queriam que nós alunos, desenvolvessemos um site mais intuitivo. Não foi concluído 100% por questão de tempo.</p>
              <Link
                href="https://github.com/rafaelfsnT/projCDP"
                target="_blank"
              >
                Link projeto
              </Link>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>Projeto JavaScript</ServiceTitle>
              <ServiceImage src="/projeto2.png" alt="Imagem 2" />
              <p>Esse foi um projeto que tinha o incentivo de melhorar a estilização, colocar novas animações e etc. O site que usei para fazer esse projeto foi o Front End Mentor, onde você pode encontrar mais chalenges para melhorar seu CSS.</p>
              <Link
                href="https://github.com/rafaelfsnT/projetoJS"
                target="_blank"

              >
                Link projeto
              </Link>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>Projeto com Filtro de Produtos (NextJS)</ServiceTitle>
              <ServiceImage src="/projeto3.png" alt="Imagem 3" />
              <p>Esse projeto é as aulas que fiz de Next, aqui mostra diversos itens criados dentro de um arquivo "db.json", onde na navbar, fizemos que aparecesse somentes os produtos relacionados a determinada categoria.</p>
              <Link
                href="https://github.com/rafaelfsnT/aulaNext"
                target="_blank"
              >
                Link projeto
              </Link>
            </ServiceCard>

          </ServiceContainer>
        </HomeSection>

        {/* Section Contato */}
        <Section id="contato">
          <Container>
            {/* Lado Esquerdo - Informações */}
            <InfoSection>
              <h1>Entre em Contato</h1>
              <InfoItem>
                <MapPin size={22} /> Xambrê, PR - Brasil
              </InfoItem>
              <InfoItem>
                <Mail size={22} />
                <a href="mailto:rafaelf_santos08@outlook.com?subject=Contato%20via%20site">
                  rafaelf_santos08@outlook.com
                </a>
              </InfoItem>

              {/* Ícones sociais */}
              <SocialIcons>
                <SocialLink href="https://github.com/rafaelfsnT" target="_blank">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/in/rafael-fassina-dos-santos-40805626a/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </SocialLink>
                <SocialLink href="https://www.instagram.com/rafaelfsan/" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </SocialLink>
              </SocialIcons>
            </InfoSection>

            {/* Lado Direito - Formulário */}
            <FormSection>
              <form action="https://formspree.io/f/xoveqala" method="POST">
                <h2>Fale Conosco</h2>
                <label style={{ fontSize: "16px", fontWeight: "bold" }}>Nome</label>
                <StyledInput type="text" name="name" required />

                <label style={{ fontSize: "16px", fontWeight: "bold" }}>Email</label>
                <StyledInput type="email" name="email" required />

                <label style={{ fontSize: "16px", fontWeight: "bold" }}>Mensagem</label>
                <StyledTextarea name="message" rows={4} required />

                <SubmitButton type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Enviar Mensagem
                </SubmitButton>
              </form>
            </FormSection>
          </Container>
        </Section>
      </Container>
      <FooterContainer>
        <SocialIconsFooter>
          <IconLink href="mailto:rafaelf_santos08@outlook.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </IconLink>
          <IconLink href="https://github.com/rafaelfsnT" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/rafael-fassina-dos-santos-40805626a/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </IconLink>
          <IconLink href="https://www.instagram.com/rafaelfsan/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </IconLink>
        </SocialIconsFooter>
        <FooterText>© {new Date().getFullYear()} Rafael Fassina dos Santos. Todos os direitos reservados.</FooterText>
      </FooterContainer>
    </>
  );
}
