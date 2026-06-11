"use client";
import {
  CameraControls,
  ContactShadows,
  Environment,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const Computer = () => {
  return (
    <div className="h-86 w-full">
      <Canvas camera={{ position: [22, 22, 22], fov: 8 }}>
        <Environment preset="city" />
        <CameraControls
          makeDefault
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.5}
          minAzimuthAngle={0}
          maxAzimuthAngle={Math.PI / 1.5}
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
        <Model />
        <ContactShadows
          position={[0, -0.5, 0.0]} // Adjust Y to sit exactly under your mesh
          opacity={1}
          scale={10}
          blur={1.5}
          far={2}
          color="red"
        />
      </Canvas>
    </div>
  );
};

const Model = () => {
  const { nodes } = useGLTF("/models/cute-monitor-merged.glb");

  const bakedTexture = useTexture("/models/baked.jpg");
  const screenTexture = useTexture("/models/cat.jpg");
  console.log(screenTexture);
  bakedTexture.flipY = false;
  bakedTexture.colorSpace = THREE.SRGBColorSpace;
  screenTexture.flipY = false;
  screenTexture.colorSpace = THREE.SRGBColorSpace;
  return (
    <>
      <group dispose={null} position={[-0.2, 1.5, 0.2]}>
        <mesh geometry={nodes.merged.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh geometry={nodes.screen.geometry} position={[0.8, -0.1, 0]}>
          {/* Using meshBasicMaterial so the screen stays bright like an actual monitor */}
          <meshBasicMaterial map={screenTexture} />
        </mesh>
        <mesh geometry={nodes.screenglass.geometry} position={[0.8, 0, 0]}>
          <meshPhysicalMaterial
            transparent={true}
            transmission={0.5} // Glass-like transparency
            opacity={1}
            roughness={0.5} // Smooth surface
            ior={1.5} // Index of refraction for glass
            thickness={0.1} // Volume thickness for refraction
            clearcoat={1} // Extra glossy reflection on top
          />
        </mesh>
      </group>
    </>
  );
};

export default Computer;
