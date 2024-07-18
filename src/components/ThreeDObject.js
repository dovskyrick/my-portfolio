import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const ThreeDObject = ({ modelPath, scale = 1 }) => {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  const { scene } = useGLTF(modelPath);

  // Rotate the object
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      ref={mesh}
      scale={hovered ? scale * 1.1 : scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default ThreeDObject;
