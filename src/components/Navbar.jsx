import React, { useState } from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  width: 100vw;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0;
  background-color: none;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  height: 5rem;
  margin: 0 5rem;
  @media only screen and (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  margin: 0 3.5rem;
  z-index: 10;
  background-color: #da4ea2;
  color: white;
  border-radius: 0.7rem;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.8s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) =>
        open ? "translateX(4px)rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) =>
        open ? "translateX(200px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ open }) =>
        open ? "translateX(4px)rotate(-45deg)" : "rotate(0)"};
    }
  }

  @media only screen and (max-width: 768px) {
    width: 2rem;
    margin: 0 2.5rem;
  }
`;

const MenuCard = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #da4ea2;
  opacity: 0.8;
  color: #f5f5f5;
  position: absolute;
  top: 6rem;
  right: 0rem;
  padding: 2rem;
  height: 72vh;
  width: 4.8vw;
  border-radius: 1.5rem;
  border: #f5f5f5 0.25rem ridge;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  z-index: 5;

  @media only screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    border-radius: 0;
    padding: 0;
  }
`;

const MenuItem = styled.a`
  font-size: 1.2rem;
  padding: 1rem 0;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  &:hover {
    color: #666;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`;

const SocialIcon = styled.a`
  margin: 0 0.5rem;
  color: #333;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #666;
  }
`;

const Navbar = ({ worksRef, portfolioRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePortfolioClick = (event) => {
    event.preventDefault();
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const handleWorksClick = () => {
    worksRef.current.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setIsOpen(false);
    }, 600);
  };
  const handleContactClick = (event) => {
    event.preventDefault(); // 防止默認行為
    contactRef.current.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setIsOpen(false); // 延遲 300 毫秒關閉 MenuCard
    }, 700);
  };

  return (
    <NavbarContainer>
      {/* <Logo to="/">Logo</Logo> */}
      <Logo src="./img/logo.png" />
      <MenuButton open={isOpen} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </MenuButton>
      <MenuCard open={isOpen}>
        <MenuItem
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Home
        </MenuItem>
        <MenuItem onClick={handleWorksClick}>About</MenuItem>
        <MenuItem onClick={handlePortfolioClick}>Portfolio</MenuItem>
        <MenuItem onClick={handleContactClick}>Contact</MenuItem>
        <SocialIcons>
          <SocialIcon
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </SocialIcon>
          <SocialIcon
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </SocialIcon>
        </SocialIcons>
      </MenuCard>
    </NavbarContainer>
  );
};

export default Navbar;
