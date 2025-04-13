"use client";
import { HomeSection } from "@/styles/style";

export const Sobre = () => (
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
);
