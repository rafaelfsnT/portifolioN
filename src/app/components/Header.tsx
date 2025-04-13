'use client'
import { useState } from 'react'
import {
  NavbarContainer,
  NavbarLogo,
  NavbarLink,
  NavLinksWrapper,
  HamburgerIcon,
  MobileMenu
} from '@/styles/style';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <NavbarContainer>
      <NavbarLogo src="/logo.png" alt="Logo" />

      <HamburgerIcon onClick={toggleMenu} isOpen={menuOpen}>
        <span />
        <span />
        <span />
      </HamburgerIcon>

      <NavLinksWrapper className="desktop">
        <NavbarLink href="#sobre">Sobre</NavbarLink>
        <NavbarLink href="#habilidades">Habilidades</NavbarLink>
        <NavbarLink href="#softskills">Soft Skills</NavbarLink>
        <NavbarLink href="#servicos">Serviços</NavbarLink>
        <NavbarLink href="#contato">Contato</NavbarLink>
      </NavLinksWrapper>

      {menuOpen && (
        <MobileMenu>
          <NavbarLink href="#sobre">Sobre</NavbarLink>
          <NavbarLink href="#habilidades">Habilidades</NavbarLink>
          <NavbarLink href="#softskills">Soft Skills</NavbarLink>
          <NavbarLink href="#servicos">Serviços</NavbarLink>
          <NavbarLink href="#contato">Contato</NavbarLink>
        </MobileMenu>
      )}
    </NavbarContainer>
  )
}
