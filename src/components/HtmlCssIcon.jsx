import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import HtmlIcon from "./HtmlIcon";

function HtmlCssIcon() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <HtmlIcon />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default HtmlCssIcon;
