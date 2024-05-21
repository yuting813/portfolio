import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Nodejs from "./Nodejs";

function NodejsIcon() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.8} scale={0.3}>
        <Nodejs scale={0.6} />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}

export default NodejsIcon;
