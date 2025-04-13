'use client';
import { Container, FormSection, InfoItem, InfoSection, Section, SocialIcons, SocialLink, StyledInput, StyledTextarea, SubmitButton } from "@/styles/style";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contato() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("https://formspree.io/f/xoveqala", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };
    return (
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


                <FormSection>
                    <form onSubmit={handleSubmit}>
                        <h2>Fale Conosco</h2>

                        <label style={{ fontSize: "16px", fontWeight: "bold" }}>Nome</label>
                        <StyledInput type="text" name="name" required />

                        <label style={{ fontSize: "16px", fontWeight: "bold" }}>Email</label>
                        <StyledInput type="email" name="email" required />

                        <label style={{ fontSize: "16px", fontWeight: "bold" }}>Mensagem</label>
                        <StyledTextarea name="message" rows={4} required />

                        <SubmitButton
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
                        </SubmitButton>

                        {status === "success" && (
                            <p style={{ marginTop: "15px", color: "green" }}>
                                Sua mensagem foi enviada com sucesso!
                            </p>
                        )}
                        {status === "error" && (
                            <p style={{ marginTop: "15px", color: "red" }}>
                                Algo deu errado. Tente novamente.
                            </p>
                        )}
                    </form>
                </FormSection>
            </Container>
        </Section>
    );
}