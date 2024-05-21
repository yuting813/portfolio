import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Scene from "./Scene";

function Reacticon() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Scene />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}

export default Reacticon;
