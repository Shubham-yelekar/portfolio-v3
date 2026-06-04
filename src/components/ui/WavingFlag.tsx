// @ts-nocheck
"use client";

import { useRef, type FC } from "react";

///  THREE D
import { shaderMaterial, useTexture } from "@react-three/drei";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/// Shaders
import fragmentShader from "../../../public/Shaders/WavingFlag/flagFragment.glsl";
import vertexShader from "../../../public/Shaders/WavingFlag/flagVertex.glsl";

type Uniforms = {
  uTime: number;
  uElevation: number;
  uFrequency: THREE.Vector2;
  uTexture: THREE.Texture;
  uLightDirection: THREE.Vector3;
};

const DEFAULT_UNIFORMS: Uniforms = {
  uTime: 0,
  uElevation: 0.3,
  uFrequency: new THREE.Vector2(16, 8),
  uTexture: new THREE.Texture(),
  uLightDirection: new THREE.Vector3(-2.8, 0.17, 8.0),
};

const WavingFlagMaterial = shaderMaterial(
  DEFAULT_UNIFORMS,
  vertexShader,
  fragmentShader,
);

extend({ WavingFlagMaterial });

// Define the specific props (uniforms) for your material

declare module "@react-three/fiber" {
  interface ThreeElements {
    wavingFlagMaterial: THREE.ShaderMaterialParameters & Uniforms;
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

      <mesh castShadow rotation={[0.0, 0.0, 0.0]} position={[0.0, 0.0, 0.0]}>
        <planeGeometry args={[1.8, 1, 64, 64]} />
        // @ts-ignore
        {
          (
            <wavingFlagMaterial
              ref={materialRef}
              key={WavingFlagMaterial.key}
              uTexture={flagTexture}
              transparent={true}
            />
          ) as any
        }
      </mesh>
    </>
  );
}

const WavingFlag: FC = () => {
  const shaderRef = useRef<THREE.ShaderMaterial & Uniforms>(null!);
  return (
    <div className="absolute top-0 left-0 -z-1 aspect-square w-full">
      {/* position [x, y , z]  */}
      <Canvas
        shadows
        camera={{ position: [0.0, 0.0, 0.8], fov: 50 }}
        gl={{
          antialias: true,
          outputColorSpace: THREE.SRGBColorSpace,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
        style={{ background: "transparent" }}
      >
        {/* <OrbitControls enableDamping /> */}
        <Scene />
      </Canvas>
    </div>
  );
};

export default WavingFlag;
