"use client";

import { useEffect, useMemo, useRef, useState, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  CameraControls,
  useGLTF,
  useTexture,
  useVideoTexture,
} from "@react-three/drei";
import { motion } from "motion/react";
import * as FadeIn from "@/app/lib/fade";
import Container from "@/components/ui/Container";
import { FaD, FaGithubAlt, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { PiReadCvLogoFill } from "react-icons/pi";
// --- 1. Constants & Data ---
const SocialLinks = [
  {
    name: "twitter",
    url: "https://x.com/shubu_y",
    icon: FaXTwitter,
  },
  {
    name: "github",
    url: "https://github.com/Shubham-yelekar",
    icon: FaGithubAlt,
  },
  {
    name: "linked",
    url: "https://www.linkedin.com/in/shubhamyelekar/",
    icon: FaLinkedinIn,
  },
];

const VIDEOS = {
  default: "/archives/haunted-house/haunted-house.mp4",
  shubham: "/archives/fox-animation/fox-animation.mp4",
  developer: "/archives/accordion/accordion.mp4",
  design: "/archives/the-planets/the-planets.mp4",
};

// --- 2. Preload Static Assets ---
useGLTF.preload("/models/cute-monitor-merged.glb");
useTexture.preload("/models/baked-3.jpg");

// --- 3. The 3D Model Component ---
type ComputerModelProps = {
  videoSrc: string;
  mouseRef: React.MutableRefObject<{ x: number }>;
  onReady: () => void;
};

const ComputerModel = ({ videoSrc, mouseRef, onReady }: ComputerModelProps) => {
  const groupRef = useRef<any>(null);
  const hasReportedReady = useRef(false);
  const { nodes } = useGLTF("/models/cute-monitor-merged.glb") as any;
  const bakedTexture = useTexture("/models/baked-3.jpg");

  const texDefault = useVideoTexture(VIDEOS.default, {
    muted: true,
    loop: true,
    start: true,
  });
  const texShubham = useVideoTexture(VIDEOS.shubham, {
    muted: true,
    loop: true,
    start: true,
  });
  const texDeveloper = useVideoTexture(VIDEOS.developer, {
    muted: true,
    loop: true,
    start: true,
  });
  const texDesign = useVideoTexture(VIDEOS.design, {
    muted: true,
    loop: true,
    start: true,
  });

  const mergedMesh = nodes.merged as THREE.Mesh;
  const screenMesh = nodes.screen as THREE.Mesh;
  const glassMesh = nodes.screenglass as THREE.Mesh;

  useEffect(() => {
    if (!hasReportedReady.current && bakedTexture && mergedMesh) {
      hasReportedReady.current = true;
      onReady();
    }
  }, [bakedTexture, mergedMesh, onReady]);

  [texDefault, texShubham, texDeveloper, texDesign].forEach((tex) => {
    tex.flipY = false;
    tex.colorSpace = THREE.SRGBColorSpace;
  });

  bakedTexture.flipY = false;
  bakedTexture.colorSpace = THREE.SRGBColorSpace;

  let activeTexture = texDefault;
  if (videoSrc === VIDEOS.shubham) activeTexture = texShubham;
  if (videoSrc === VIDEOS.developer) activeTexture = texDeveloper;
  if (videoSrc === VIDEOS.design) activeTexture = texDesign;

  useFrame((state, delta) => {
    if (!groupRef.current || !mouseRef.current) return;
    const targetY = (mouseRef.current.x * Math.PI) / 8;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY,
      delta * 8,
    );
  });

  return (
    <group ref={groupRef} dispose={null} position={[0, 0, 0]}>
      <mesh geometry={mergedMesh.geometry as any}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh geometry={screenMesh.geometry as any} position={[0.3, 1.25, 0]}>
        <meshBasicMaterial map={activeTexture} />
      </mesh>
      <mesh geometry={glassMesh.geometry as any} position={[0.32, 1.25, 0]}>
        <meshPhysicalMaterial
          transparent
          opacity={0.18}
          roughness={0}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </mesh>
    </group>
  );
};

const Hero = () => {
  const [activeVideo, setActiveVideo] = useState(VIDEOS.default);
  const [isModelReady, setIsModelReady] = useState(false);
  const mouseRef = useRef<{ x: number }>({ x: 0 });

  useEffect(() => {
    Object.values(VIDEOS).forEach((src) => {
      const video = document.createElement("video");
      video.src = src;
      video.preload = "auto";
      video.muted = true;
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normalizedX = ((e.clientX - rect.left) / rect.width) * 1 - 1;
    mouseRef.current.x = normalizedX;
  };

  const handleMouseLeave = () => {
    mouseRef.current.x = 0;
  };

  const modelReveal = useMemo(
    () => ({
      initial: { opacity: 0, scale: 0.94 },
      animate: isModelReady
        ? { opacity: 1, scale: 1 }
        : { opacity: 0, scale: 0.94 },
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
    [isModelReady],
  );

  const textContainer = useMemo(
    () => ({
      initial: "hidden",
      animate: isModelReady ? "show" : "hidden",
      variants: {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.12,
            delayChildren: 0.08,
          },
        },
      },
    }),
    [isModelReady],
  );

  const textItem = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Container
        text
        className="relative mt-[10dvh] flex flex-col justify-end gap-8 px-4 md:mt-[12dvh] md:gap-4"
      >
        <motion.div {...modelReveal} className="relative h-72 w-full">
          {!isModelReady && (
            <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-neutral-100/50 text-sm text-neutral-500 dark:bg-neutral-900/50 dark:text-neutral-400">
              Loading scene...
            </div>
          )}
          <Canvas camera={{ position: [22, 22, 22], fov: 8 }}>
            <Suspense fallback={null}>
              <CameraControls
                makeDefault
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 2.5}
                minAzimuthAngle={0}
                maxAzimuthAngle={Math.PI / 1.2}
                mouseButtons={{ left: 1, middle: 0, right: 0, wheel: 0 }}
                touches={{ one: 32, two: 0, three: 0 }}
              />
              <ComputerModel
                videoSrc={activeVideo}
                mouseRef={mouseRef}
                onReady={() => setIsModelReady(true)}
              />
            </Suspense>
          </Canvas>
        </motion.div>
      </Container>

      <Container
        text
        className="relative mt-[1dvh] flex flex-col justify-end gap-8 px-4 md:mt-[2dvh] md:gap-4"
      >
        <motion.div
          {...textContainer}
          className="flex flex-col justify-between gap-4"
        >
          <motion.div variants={textItem}>
            <div>
              <h1 className="text-heading text-lg md:text-xl">
                Hi, I'm{" "}
                <span
                  onMouseEnter={() => setActiveVideo(VIDEOS.shubham)}
                  onMouseLeave={() => setActiveVideo(VIDEOS.default)}
                  className="cursor-pointer rounded-md bg-orange-400/20 px-1 py-px transition-colors duration-100 hover:bg-orange-300 dark:bg-orange-400/20 hover:dark:bg-orange-400"
                >
                  Shubham Yelekar
                </span>
              </h1>
              <h1 className="text-heading text-lg md:text-xl">
                Front-end{" "}
                <span
                  onMouseEnter={() => setActiveVideo(VIDEOS.developer)}
                  onMouseLeave={() => setActiveVideo(VIDEOS.default)}
                  className="cursor-pointer rounded-md bg-blue-400/20 px-1 py-px transition-colors duration-100 hover:bg-blue-300 dark:bg-blue-400/20 hover:dark:bg-blue-400"
                >
                  Developer
                </span>{" "}
                driven by motion and UX, blending modern technologies with a
                strong{" "}
                <span
                  onMouseEnter={() => setActiveVideo(VIDEOS.design)}
                  onMouseLeave={() => setActiveVideo(VIDEOS.default)}
                  className="cursor-pointer rounded-md bg-green-400/20 px-1 py-px transition-colors duration-100 hover:bg-green-300 dark:bg-green-400/20 hover:dark:bg-green-400"
                >
                  Design Engineering
                </span>{" "}
                foundation.
              </h1>
            </div>
          </motion.div>

          <motion.div variants={textItem}>
            <div>
              <p className="text-body">
                I currently work at Artificial Reality, designing and developing
                interfaces for 3D configurators, landing pages, and web
                applications.
              </p>
              <p className="text-body">
                Exploring motion, 3D, and emerging web technologies to create
                more engaging digital experiences.
              </p>
            </div>
          </motion.div>

          <motion.div variants={textItem}>
            <div className="flex w-full gap-2">
              {SocialLinks.map((item, i) => (
                <a
                  className="grid items-center justify-center rounded-xl bg-neutral-100 p-3 text-[var(--body)] transition-colors duration-150 ease-out hover:bg-neutral-200 hover:text-[var(--heading)] dark:bg-neutral-900 hover:dark:bg-neutral-800"
                  key={`${item.name}-${i}`}
                  href={item.url}
                  target="_blank"
                >
                  <item.icon className=" " size={16} />
                </a>
              ))}
              <a
                className="flex items-center justify-center gap-2 rounded-xl bg-neutral-100 p-3 text-xs text-[var(--body)] transition-colors duration-150 ease-out hover:bg-neutral-200 hover:text-[var(--heading)] dark:bg-neutral-900 hover:dark:bg-neutral-800"
                href={
                  "https://drive.google.com/file/d/1nbV481gyES90t67mM-D4F-gPh5fmCsBu/view?usp=sharing"
                }
                target="_blank"
              >
                <PiReadCvLogoFill size={16} />
                Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
