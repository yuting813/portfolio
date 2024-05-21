import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 87.5rem;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 4.625rem;
  animation: fadeIn 1s ease-in-out;

  @media only screen and (max-width: 768px) {
    font-size: 6rem;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Whatwedo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const Line = styled.img`
  height: 0.3125rem;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
`;
const Desc = styled.p`
  font-size: 1.5rem;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    padding: 1.25rem;
    align-items: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 600;
  width: 15rem;
  padding: 0.8rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  animation: scale 1s infinite;

  @media only screen and (max-width: 768px) {
    padding: 1.25rem;
    align-items: center;
    width: 20rem;
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 50rem;
  height: 30rem;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 19rem;
    height: 19rem;
    animation: animate 1s infinite ease alternate;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = ({ worksRef, portfolioRef, contactRef }) => {
  // 將 scrollToContact 函數定義在 Hero 組件內部是較好的做法。
  // 這樣可以將邏輯封裝在組件本身內,使代碼更加模塊化和可重用。
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section>
      <Navbar
        contactRef={contactRef}
        worksRef={worksRef}
        portfolioRef={portfolioRef}
      />
      <Container>
        <Left>
          <Title>Hi, my name is Tina.</Title>
          <Whatwedo>
            <Line src="./img/line.png" />
            <Subtitle>Looking For Web Developer?</Subtitle>
          </Whatwedo>
          <Desc>Welcome to my Portfolio</Desc>
          <Button onClick={scrollToContact}>Get in touch</Button>
        </Left>

        <Right>
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
