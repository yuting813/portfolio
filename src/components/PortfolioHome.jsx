import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  scroll-snap-align: center;
`;

const Header = styled.h1`
  font-size: 36px;
  margin-bottom: 40px;
`;

const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const Card = styled.div`
  background-color: ${(props) => (props.isActive ? "#fff" : "#f2f2f2")};
  box-shadow: ${(props) =>
    props.isActive ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none"};
  border-radius: 8px;
  padding: 20px;
  margin: 0 20px;
  position: absolute;
  transform: ${(props) =>
    props.isActive
      ? "translateX(0) scale(1.1)"
      : `translateX(${props.offset}px) scale(0.9)`};
  transition: transform 0.3s ease;
  z-index: ${(props) => (props.isActive ? 1 : 0)};
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: black;
`;

const TechList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-bottom: 10px;
`;

const TechItem = styled.li`
  /* background-color: #007bff; */
  background-color: #c0da4e;
  color: #fff;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 8px;
  font-size: 14px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
  color: black;
`;

const LinkGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  /* background-color: #007bff; */
  background-color: #e580e3;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin: 0 10px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 40px;
`;

const Button = styled.button`
  /* background-color: #007bff;
   */
  background-color: #da4ea2;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  margin: 0 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// Portfolio Component
const PortfolioHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const portfolioItems = [
    {
      previewImage: "https://i.imgur.com/t7kWRbu.png",
      title: "MERN-Project",
      tech: ["React", "Node.js", "MongoDB"],
      description:
        "A full-stack web application built with React, Node.js, and MongoDB.",
      liveUrl: "https://mern-projeect.onrender.com",
      demoUrl: "https://github.com/yuting813",
    },
    {
      previewImage: "https://i.imgur.com/t7kWRbu.png",
      title: "MERN-Project",
      tech: ["React", "Node.js", "MongoDB"],
      description:
        "A full-stack web application built with React, Node.js, and MongoDB.",
      liveUrl: "https://mern-projeect.onrender.com",
      demoUrl: "https://github.com/yuting813",
    },
    {
      previewImage: "https://i.imgur.com/t7kWRbu.png",
      title: "MERN-Project",
      tech: ["React", "Node.js", "MongoDB"],
      description:
        "A full-stack web application built with React, Node.js, and MongoDB.",
      liveUrl: "https://mern-projeect.onrender.com",
      demoUrl: "https://github.com/yuting813",
    },
    {
      previewImage: "https://i.imgur.com/t7kWRbu.png",
      title: "MERN-Project",
      tech: ["React", "Node.js", "MongoDB"],
      description:
        "A full-stack web application built with React, Node.js, and MongoDB.",
      liveUrl: "https://mern-projeect.onrender.com",
      demoUrl: "https://github.com/yuting813",
    },
    {
      previewImage: "https://i.imgur.com/t7kWRbu.png",
      title: "MERN-Project",
      tech: ["React", "Node.js", "MongoDB"],
      description:
        "A full-stack web application built with React, Node.js, and MongoDB.",
      liveUrl: "https://mern-projeect.onrender.com",
      demoUrl: "https://github.com/yuting813",
    },
    // 其他項目...
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === portfolioItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container>
      <Header>Portfolio</Header>
      <CardsContainer>
        {portfolioItems.map((item, index) => (
          <Card
            key={index}
            isActive={index === activeIndex}
            offset={(index - activeIndex) * 400}
          >
            <Title>{item.title}</Title>
            <TechList>
              {item.tech.map((tech, techIndex) => (
                <TechItem key={techIndex}>{tech}</TechItem>
              ))}
            </TechList>
            <Description>{item.description}</Description>
            <PreviewImage src={item.previewImage} alt={item.title} />
            <LinkGroup>
              <Link
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Link>
              <Link
                href={item.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </Link>
            </LinkGroup>
          </Card>
        ))}
      </CardsContainer>
      <ButtonGroup>
        <Button onClick={handlePrev}>Prev</Button>
        <Button onClick={handleNext}>Next</Button>
      </ButtonGroup>
    </Container>
  );
};

export default PortfolioHome;
