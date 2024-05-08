import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 4px solid #ccc;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  max-width: 600px;
  /* margin: 0 auto; */
  opacity: ${({ isActive }) =>
    isActive ? 1 : 0.5}; /* 根據是否為選中卡片調整不透明度 */
  width: 300px; /* 設置固定寬度 */
  /* transform: ${({ isActive }) => (isActive ? "scale(1.1)" : "scale(1)")}; */
  transition: transform 0.3s ease-in-out; /* 添加過渡效果 */
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Tech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

const TechItem = styled.span`
  background-color: #eee;
  color: #333;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 14px;
`;

const Description = styled.p`
  margin-bottom: 16px;
`;

const PreviewContainer = styled.div`
  text-align: center;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  cursor: pointer;
`;

const BottonContainer = styled.div`
  display: flex;
  /* justify-content: center;
  gap: 40px; */
  justify-content: space-between;
  margin-top: 10px;
`;

const Botton = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 200;
  width: 60px;
  padding: 10px;
  border: none;
  border-radius: 60px;
  /* margin: 0 40px; */
  cursor: pointer;
`;


const ProjectCard = ({
  title,
  tech,
  description,
  previewImage,
  liveUrl,
  demoUrl,
  isActive,
}) => {
  const handleLiveClick = () => {
    window.open(liveUrl, "_blank"); // 在新視窗中打開網站連結
  };
  const handleDemoClick = () => {
    window.open(demoUrl, "_blank"); // 在新視窗中打開網站連結
  };
  return (
    <CardContainer isActive={isActive}>
      <Title>{title}</Title>
      <Tech>
        {tech.map((item) => (
          <TechItem key={item}>{item}</TechItem>
        ))}
      </Tech>
      <Description>{description}</Description>
      <PreviewContainer>
        <PreviewImage src={previewImage} alt={title} />
      </PreviewContainer>


      <BottonContainer>
        <Botton onClick={handleDemoClick}>repo</Botton>
        <Botton onClick={handleLiveClick}>Live View</Botton>
      </BottonContainer>
    </CardContainer>
  );
};

export default ProjectCard;
