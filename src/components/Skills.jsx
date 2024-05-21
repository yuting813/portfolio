import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import HtmlIcon from "./HtmlIcon";

function Skills() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <HtmlIcon scale={1.8} />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}

export default Skills;
