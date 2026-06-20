"use client";
import {
  CameraControls,
  useGLTF,
  useTexture,
  useVideoTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";

useGLTF.preload("/models/cute-monitor-merged.glb");
useTexture.preload("/models/baked-3.jpg");
useTexture.preload("/models/cat.jpg");
const Computer = ({ videoSrc }) => {
  return (
    <div className="h-72 w-full">
      <Canvas camera={{ position: [22, 22, 22], fov: 8 }}>
        <Suspense fallback={null}>
          <CameraControls
            makeDefault
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2.5}
            minAzimuthAngle={0}
            maxAzimuthAngle={Math.PI / 1.2}
            mouseButtons={{
              left: 1, // 1 = ROTATE
              middle: 0, // 0 = NONE (Disables middle click)
              right: 0, // 0 = NONE (Disables right-click pan)
              wheel: 0, // 0 = NONE (Disables scroll zoom)
            }}
            touches={{
              one: 32, // 32 = TOUCH_ROTATE (Keeps one-finger rotation)
              two: 0, // 0 = NONE (Disables pinch-to-zoom)
              three: 0, // 0 = NONE (Disables multi-finger pan)
            }}
          />
          <Model videoSrc={videoSrc} />
        </Suspense>
      </Canvas>
    </div>
  );
};

const Model = ({ videoSrc }) => {
  const { nodes } = useGLTF("/models/cute-monitor-merged.glb");
  const bakedTexture = useTexture("/models/baked-3.jpg");

  const screenVideoTexture = useVideoTexture(videoSrc, {
    muted: true,
    loop: true,
    start: true,
  });
  bakedTexture.flipY = false;
  bakedTexture.colorSpace = THREE.SRGBColorSpace;
  screenVideoTexture.flipY = false;
  screenVideoTexture.colorSpace = THREE.SRGBColorSpace;
  return (
    <>
      <group dispose={null} position={[0.0, 0.0, 0.0]}>
        <mesh geometry={(nodes.merged as THREE.Mesh).geometry as any}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
          geometry={(nodes.screen as THREE.Mesh).geometry as any}
          position={[0.3, 1.25, 0]}
        >
          {/* Using meshBasicMaterial so the screen stays bright like an actual monitor */}
          <meshBasicMaterial map={screenVideoTexture} />
        </mesh>
        <mesh
          geometry={(nodes.screenglass as THREE.Mesh).geometry as any}
          position={[0.32, 1.25, 0]}
        >
          <meshPhysicalMaterial
            transparent
            opacity={0.2}
            roughness={0.0}
            clearcoat={1}
            clearcoatRoughness={0}
          />
        </mesh>
      </group>
    </>
  );
};

export default Computer;
