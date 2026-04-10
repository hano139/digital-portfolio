"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, Float } from "@react-three/drei";
import { useRouter } from "next/navigation";
import * as THREE from "three";

const panels = [
  { id: "about", title: "About Me", subtitle: "The story behind", href: "/about", color: "#C4907A", pos: [-6, 0, 0] as [number, number, number], img: "/billboard-about.jpg", char: "/char-about.png", charAspect: 590 / 1138 },
  { id: "career", title: "Career Journey", subtitle: "Where insight meets impact", href: "/career", color: "#C8A96E", pos: [-2, 0, 0] as [number, number, number], img: "/billboard-career.jpg", char: "/char-career.png", charAspect: 540 / 1127 },
  { id: "projects", title: "Side Projects", subtitle: "Building beyond boundaries", href: "/projects", color: "#7BA7BC", pos: [2, 0, 0] as [number, number, number], img: "/billboard-projects.jpg", char: "/char-projects.png", charAspect: 491 / 1192 },
  { id: "global", title: "Global Engagement", subtitle: "Connecting across cultures", href: "/global", color: "#8FAE7E", pos: [6, 0, 0] as [number, number, number], img: "/billboard-global.jpg", char: "/char-global.png", charAspect: 783 / 1061 },
];

function Pedestal({ hovered, color }: { hovered: boolean; color: string }) {
  return (
    <group position={[0, -1.7, 0]}>
      <mesh position={[0, 0.25, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 0.5, 1.5]} />
        <meshStandardMaterial color={hovered ? "#fefcf8" : "#f7e1e1"} roughness={0.35} metalness={0.05} />
      </mesh>
      <mesh position={[0, 0.53, 0]} castShadow>
        <boxGeometry args={[1.6, 0.06, 1.6]} />
        <meshStandardMaterial color={hovered ? color : "#eecfcf"} roughness={0.4} metalness={0.1} />
      </mesh>
    </group>
  );
}

function Billboard({ hovered, color, img }: { hovered: boolean; color: string; img: string }) {
  const texture = useLoader(THREE.TextureLoader, img);
  return (
    <group position={[0, 0.6, -1.3]}>
      <mesh castShadow>
        <boxGeometry args={[3.4, 3.4, 0.06]} />
        <meshStandardMaterial map={texture} roughness={0.5} />
      </mesh>
    </group>
  );
}

function CharacterSprite({ img, aspect, hovered }: { img: string; aspect: number; hovered: boolean }) {
  const texture = useLoader(THREE.TextureLoader, img);
  const charHeight = 2.0;
  const charWidth = charHeight * aspect;

  return (
    <Float speed={hovered ? 2 : 1} rotationIntensity={0.05} floatIntensity={hovered ? 0.3 : 0.1} floatingRange={[0, hovered ? 0.08 : 0.03]}>
      <mesh position={[0, charHeight / 2, 0]} scale={hovered ? 1.04 : 1}>
        <planeGeometry args={[charWidth, charHeight]} />
        <meshBasicMaterial map={texture} transparent alphaTest={0.1} side={THREE.DoubleSide} />
      </mesh>
    </Float>
  );
}

function ExhibitionItem({ panel }: { panel: (typeof panels)[number] }) {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <group
      position={panel.pos}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = "pointer"; }}
      onPointerOut={() => { setHovered(false); document.body.style.cursor = "default"; }}
      onClick={(e) => { e.stopPropagation(); router.push(panel.href); }}
    >
      <Billboard hovered={hovered} color={panel.color} img={panel.img} />
      <Pedestal hovered={hovered} color={panel.color} />
      <group position={[0, -1.14, 0.5]}>
        <CharacterSprite img={panel.char} aspect={panel.charAspect} hovered={hovered} />
      </group>
      <Html position={[0, -2.0, 0.8]} center className="pointer-events-none select-none">
        <div style={{ textAlign: "center", width: 220 }}>
          <h2 style={{
            fontSize: 20, fontWeight: 600, letterSpacing: "0.04em",
            fontFamily: "var(--font-serif)",
            color: hovered ? panel.color : "#ecb2b2",
            transition: "color 0.3s", whiteSpace: "nowrap", margin: 0,
          }}>{panel.title}</h2>
          <div style={{
            width: hovered ? "60%" : "0%", height: 1,
            background: panel.color, margin: "4px auto 0", transition: "width 0.4s",
          }} />
          <p style={{
            fontSize: 10, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase",
            fontFamily: "var(--font-sans)", color: panel.color,
            opacity: hovered ? 1 : 0, transition: "opacity 0.3s", marginTop: 6,
          }}>{panel.subtitle}</p>
        </div>
      </Html>
    </group>
  );
}

function Sparkles() {
  const count = 100;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useRef(new THREE.Object3D()).current;
  const data = useRef(
    Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 30,
      y: (Math.random() - 0.5) * 18,
      z: (Math.random() - 0.5) * 8 + 4,
      speed: 0.02 + Math.random() * 0.08,
      offset: Math.random() * Math.PI * 2,
      baseSize: 0.01 + Math.random() * 0.025,
      twinkleSpeed: 0.5 + Math.random() * 2.5,
    }))
  ).current;

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    data.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(t * p.speed + p.offset) * 0.3,
        p.y + Math.sin(t * p.speed * 0.5 + p.offset) * 0.2,
        p.z + Math.cos(t * p.speed + p.offset) * 0.2
      );
      const twinkle = 0.4 + 0.6 * Math.abs(Math.sin(t * p.twinkleSpeed + p.offset));
      dummy.scale.setScalar(p.baseSize * twinkle);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial color="#b0cde3" transparent opacity={0.7} depthTest={false} />
    </instancedMesh>
  );
}

function Scene() {
  return (
    <>
      <OrbitControls
        enablePan={false}
        enableZoom
        enableRotate
        minDistance={7}
        maxDistance={18}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.1}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        enableDamping
        dampingFactor={0.05}
        target={[0, -0.8, 0]}
        autoRotate
        autoRotateSpeed={0.2}
      />
      <ambientLight intensity={1.0} color="#ffffff" />
      <directionalLight position={[6, 10, 6]} intensity={1.2} color="#ffffff"
        castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024}
        shadow-camera-far={25} shadow-camera-left={-12} shadow-camera-right={12}
        shadow-camera-top={10} shadow-camera-bottom={-10}
      />
      <pointLight position={[-5, 6, 4]} intensity={0.4} color="#f5e0c8" />
      <pointLight position={[5, 6, -3]} intensity={0.3} color="#d5e5f5" />

      <mesh>
        <sphereGeometry args={[28, 16, 16]} />
        <meshBasicMaterial color="#ffffff" side={THREE.BackSide} />
      </mesh>

      <Suspense fallback={null}>
        {panels.map((panel) => (
          <ExhibitionItem key={panel.id} panel={panel} />
        ))}
      </Suspense>
      <Sparkles />
    </>
  );
}

export default function GalleryScene() {
  return (
    <Canvas shadows camera={{ position: [0, 1.5, 13], fov: 40 }}
      className="absolute inset-0"
      gl={{ antialias: true, alpha: false }}
      onCreated={(state) => {
        state.gl.setClearColor("#ffffff");
        state.gl.toneMapping = THREE.NoToneMapping;
      }}
    >
      <Scene />
    </Canvas>
  );
}
