/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 htmlIcon.gltf --transform 
Files: htmlIcon.gltf [80.73KB] > C:\Users\tingtinghu321\Desktop\3D\htmlcss\htmlIcon-transformed.glb [268.12KB] (-232%)
Author: Helindu (https://sketchfab.com/Helindu)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/3d-clipart-webdev-f3d8f1a7174847d994ab698e265f9672
Title: 3D Clipart - WebDev
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/htmlIcon-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.JS_text001_0.geometry} material={materials.PaletteMaterial001} position={[3.767, -0.071, 0.509]} />
    </group>
  )
}

useGLTF.preload('/htmlIcon-transformed.glb')
