// jsxCopy code
import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { useState, useRef, useEffect } from "react";
// improt mern from "../public/img/mernproject.png"

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  justify-content: center;
  margin: 0 auto;
  /* max-width: 960px; */
  padding: 40px 20px;
`;

const SectionTitle = styled.h1`
  text-align: center;
  margin-bottom: 80px;
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  gap: 40px;
  /* margin:60px ; */
`;

const ControlButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const ControlButton = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 200;
  width: 60px;
  padding: 10px;
  border: none;
  border-radius: 60px;

  cursor: pointer;
`;

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const containerRef = useRef(null);

  const projects = [
    {
      previewImage: "https://i.imgur.com/t7kWRbu.png",
      title: "MERN-Projeect",
      tech: ["React", "Node.js", "MongoDB"],
      description:
        "A full-stack web application built with React, Node.js, and MongoDB.",
      liveUrl: "https://mern-projeect.onrender.com",
      demoUrl: "https://github.com/yuting813",
    },
    {
      title: "Project 2",
      tech: ["React Native", "Firebase"],
      description:
        "A cross-platform mobile app built with React Native and Firebase.",
      previewImage: "https://i.imgur.com/nT6fNzG.jpeg",
      liveUrl: "https://github.com/yuting813",
      demoUrl: "https://github.com/yuting813",
    },
    {
      title: "Project 2",
      tech: ["React Native", "Firebase"],
      description:
        "A cross-platform mobile app built with React Native and Firebase.",
      previewImage: "https://via.placeholder.com/600x400",
      liveUrl: "https://github.com/yuting813",
      demoUrl: "https://github.com/yuting813",
    },
    {
      title: "Project 2",
      tech: ["React Native", "Firebase"],
      description:
        "A cross-platform mobile app built with React Native and Firebase.",
      previewImage: "https://via.placeholder.com/600x400",
      liveUrl: "https://github.com/yuting813",
      demoUrl: "https://github.com/yuting813",
    },
    {
      title: "Project 2",
      tech: ["React Native", "Firebase"],
      description:
        "A cross-platform mobile app built with React Native and Firebase.",
      previewImage: "https://via.placeholder.com/600x400",
      liveUrl: "https://github.com/yuting813",
      demoUrl: "https://github.com/yuting813",
    },

    // Add more projects as needed
  ];

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + projects.length) % projects.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % projects.length);
  };

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    const cardWidth = 300; // 與 CardContainer 寬度一致
    const offset = containerWidth / 2 - cardWidth / 2; // 計算偏移量
    const translateX = -(activeIndex * cardWidth) + offset; // 計算平移距離
    containerRef.current.style.transition = "transform 0.5s ease-in-out";
    containerRef.current.style.transform = `translateX(${translateX}px)`; // 移動卡片列表
  }, [activeIndex]);

  return (
    <Container>
      <SectionTitle>Portfolio</SectionTitle>

      <ProjectsContainer ref={containerRef}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            tech={project.tech}
            description={project.description}
            previewImage={project.previewImage}
            liveUrl={project.liveUrl}
            demoUrl={project.demoUrl}
            isActive={index === activeIndex} // 傳遞是否為選中卡片的狀態
          />
        ))}
      </ProjectsContainer>

      <ControlButtonContainer>
        <ControlButton onClick={handlePrevClick}>Left</ControlButton>
        <ControlButton onClick={handleNextClick}>Right</ControlButton>
      </ControlButtonContainer>
    </Container>
  );
};

export default Portfolio;
