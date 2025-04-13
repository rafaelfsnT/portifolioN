'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FooterContainer, IconLink, FooterText, SocialIconsFooter } from "@/styles/style";

export default function Footer() {
    return (
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
    );
}