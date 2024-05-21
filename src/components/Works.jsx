import React, { useState } from "react";
import styled from "styled-components";
import Skills from "./Skills";
import Reacticon from "./Reacticon";
import HtmlCssIcon from "./HtmlCssIcon";
import JsIcon from "./JsIcon";
import NodejsIcon from "./NodejsIcon";

const data = ["Skills :", "HTML+CSS", "JavaScript", "ReactJS", "Node.js"];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding: 4.25rem 0 0 1.25rem;
    justify-content: center;
  }
`;

const Right = styled.div`
  flex: 2;

  @media only screen and (max-width: 768px) {
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      /* animation: name duration timing-function delay iteration-count direction fill-mode; */
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
  /* position: absolute;
    top: 0;
    bottom: 0; */
`;

const Works = () => {
  const [work, setWork] = useState("Skills");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Node.js" ? (
            <NodejsIcon />
          ) : work === "ReactJS" ? (
            <Reacticon />
          ) : work === "HTML+CSS" ? (
            // <HtmlCssIcon />
            <Skills />
          ) : work === "JavaScript" ? (
            <JsIcon />
          ) : (
            <Skills />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
