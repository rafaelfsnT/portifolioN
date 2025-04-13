"use client";
import { useRef, useEffect } from "react";
import { HomeSection, HomeContent, TextColumn, Icons } from "@/styles/style";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Hero = () => {
  const typewriterRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const text = "< Software Developer />";
    let index = 0;
    let isAdding = true;

    function type() {
      if (typewriterRef.current) {
        typewriterRef.current.innerHTML = text.substring(0, index);
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

  return (
    <HomeSection id="inicio">
      <HomeContent>
        <TextColumn>
          <h1>Rafael Fassina Dos Santos</h1>
          <h2 ref={typewriterRef} id="typewriter">&lt; Software Developer /&gt;</h2>
          <Icons>
            <Link href="https://github.com/rafaelfsnT" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></Link>
            <Link href="https://www.linkedin.com/in/rafael-fassina-dos-santos-40805626a/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></Link>
            <Link href="https://www.instagram.com/rafaelfsan/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></Link>
          </Icons>
        </TextColumn>
      </HomeContent>
    </HomeSection>
  );
};
