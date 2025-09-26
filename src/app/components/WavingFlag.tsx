"use client";
import React from "react";
import { useRef, useMemo } from "react";

///  THREE D
import * as THREE from "three";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { OrbitControls, shaderMaterial, useTexture } from "@react-three/drei";
import { useControls, folder } from "leva";

/// Shaders
import vertexShader from "../../../public/Shaders/WavingFlag/flagVertex.glsl";
import fragmentShader from "../../../public/Shaders/WavingFlag/flagFragment.glsl";

const WavingFlagMaterial = shaderMaterial(
  {
    //Uniforms
    uTime: 0,
    uElevation: 0.3,
    uFrequency: new THREE.Vector2(16 / 8),
    uTexture: new THREE.Texture(),
    uLightDirection: new THREE.Vector3(-2.8, 0.17, 8.0),
  },
  vertexShader,
  fragmentShader,
);

extend({ WavingFlagMaterial });

// Define the specific props (uniforms) for your material

declare global {
  namespace TSX {
    interface IntrinsixElements {
      wavingFlagMaterial: any;
    }
  }
}

function Scene() {
  const materialRef = useRef<any>(null);
  const lightRef = useRef<THREE.DirectionalLight>(null);

  // Load tectures
  const flagTexture = useTexture("/pictures/flag-india-2.jpg");

  // Update the uniforms in animation

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uTime += delta * 2;
      // Update uniforms from Leva controls
      materialRef.current.uElevation = 0.3;
      materialRef.current.uFrequency.x = 16;
      materialRef.current.uFrequency.y = 8;
    }
  });

  return (
    <>
      <ambientLight intensity={1.6} />
      <directionalLight
        ref={lightRef}
        castShadow
        position={[-4.5, 0.2, 8.0]}
        intensity={1.5}
      />

      <mesh
        castShadow
        rotation={[-0.25, -0.18, 0.15]}
        position={[-0.03, 0.02, 0.2]}
      >
        <planeGeometry args={[1.8, 1, 64, 64]} />
        <wavingFlagMaterial
          ref={materialRef}
          key={WavingFlagMaterial.key}
          uTexture={flagTexture}
          transparent={true}
        />
      </mesh>
    </>
  );
}

const WavingFlag = () => {
  return (
    <div className="fade-mask absolute -top-20 left-1/2 -z-1 h-96 w-[900px] -translate-x-1/2 bg-blue-400">
      <Canvas
        shadows
        camera={{ position: [-0.2, -0.3, 0.8], fov: 60 }}
        gl={{
          antialias: true,
          outputColorSpace: THREE.SRGBColorSpace,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
        style={{ background: "#e5e5e5", height: "60vh" }}
      >
        <OrbitControls enableDamping />
        <Scene />
      </Canvas>
    </div>
  );
};

export default WavingFlag;
