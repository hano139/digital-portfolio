"use client";

import { useRef, useState, useMemo, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, Float } from "@react-three/drei";
import { useRouter } from "next/navigation";
import * as THREE from "three";

const panels = [
  { id: "about", title: "About Me", subtitle: "The story behind", href: "/about", color: "#FFC000", pos: [-6, 0, 0] as [number, number, number], img: "/billboard-about.jpg", char: "/char-about.png", charAspect: 590 / 1138 },
  { id: "career", title: "Career Journey", subtitle: "Where insight meets impact", href: "/career", color: "#3E5DFA", pos: [-2, 0, 0] as [number, number, number], img: "/billboard-career.jpg", char: "/char-career.png", charAspect: 540 / 1127 },
  { id: "projects", title: "Side Projects", subtitle: "Building beyond boundaries", href: "/projects", color: "#FF7447", pos: [2, 0, 0] as [number, number, number], img: "/billboard-projects.jpg", char: "/char-projects.png", charAspect: 491 / 1192 },
  { id: "global", title: "Global Engagement", subtitle: "Connecting across cultures", href: "/global", color: "#37C722", pos: [6, 0, 0] as [number, number, number], img: "/billboard-global.jpg", char: "/char-global.png", charAspect: 783 / 1061 },
];

function createVintageTexture(baseColor: string): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;

  // Fill base
  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, 256, 256);

  // Ornamental border — double line
  ctx.strokeStyle = "rgba(160, 120, 80, 0.35)";
  ctx.lineWidth = 3;
  ctx.strokeRect(12, 12, 232, 232);
  ctx.lineWidth = 1;
  ctx.strokeRect(20, 20, 216, 216);

  // Corner flourishes
  const drawCorner = (cx: number, cy: number, sx: number, sy: number) => {
    ctx.beginPath();
    ctx.moveTo(cx + 20 * sx, cy);
    ctx.quadraticCurveTo(cx + 8 * sx, cy + 2 * sy, cx, cy + 20 * sy);
    ctx.strokeStyle = "rgba(160, 120, 80, 0.3)";
    ctx.lineWidth = 2;
    ctx.stroke();
    // Small diamond
    ctx.beginPath();
    ctx.moveTo(cx + 6 * sx, cy);
    ctx.lineTo(cx + 3 * sx, cy + 3 * sy);
    ctx.lineTo(cx, cy + 6 * sy);
    ctx.lineTo(cx + 3 * sx, cy + 3 * sy - 1 * sy);
    ctx.closePath();
    ctx.fillStyle = "rgba(160, 120, 80, 0.2)";
    ctx.fill();
  };
  drawCorner(24, 24, 1, 1);
  drawCorner(232, 24, -1, 1);
  drawCorner(24, 232, 1, -1);
  drawCorner(232, 232, -1, -1);

  // Center diamond motif
  ctx.beginPath();
  ctx.moveTo(128, 108);
  ctx.lineTo(148, 128);
  ctx.lineTo(128, 148);
  ctx.lineTo(108, 128);
  ctx.closePath();
  ctx.strokeStyle = "rgba(160, 120, 80, 0.2)";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Subtle grain noise
  for (let i = 0; i < 800; i++) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    ctx.fillStyle = `rgba(120, 90, 60, ${Math.random() * 0.06})`;
    ctx.fillRect(x, y, 1, 1);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function Platform({ hovered, color }: { hovered: boolean; color: string }) {
  const defaultTex = useMemo(() => createVintageTexture("#D4B896"), []);
  const hoverTex = useMemo(() => createVintageTexture(color), [color]);

  return (
    <group position={[0, -1.47, 0]}>
      <mesh>
        <boxGeometry args={[1.8, 0.08, 1.8]} />
        <meshBasicMaterial
          map={hovered ? hoverTex : defaultTex}
          transparent
          opacity={0.95}
        />
      </mesh>
    </group>
  );
}

function Spotlight({ hovered }: { hovered: boolean }) {
  const coneRef = useRef<THREE.Mesh>(null);
  const bulbRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!coneRef.current || !bulbRef.current) return;
    const target = hovered ? 0.15 : 0;
    const coneMat = coneRef.current.material as THREE.MeshBasicMaterial;
    coneMat.opacity += (target - coneMat.opacity) * 0.08;
    const bulbMat = bulbRef.current.material as THREE.MeshBasicMaterial;
    bulbMat.opacity += ((hovered ? 0.9 : 0) - bulbMat.opacity) * 0.08;
  });

  return (
    <group position={[0, 2.8, 0.8]}>
      {/* Light bulb glow */}
      <mesh ref={bulbRef}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshBasicMaterial color="#FFF3D4" transparent opacity={0} />
      </mesh>
      {/* Light cone — pointing straight down, centered on character */}
      <mesh ref={coneRef} position={[0, -2.2, 0]}>
        <coneGeometry args={[1.4, 4.4, 16, 1, true]} />
        <meshBasicMaterial
          color="#FFEEBB"
          transparent
          opacity={0}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
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

function CharacterSprite({ img, aspect, hovered, scale = 1 }: { img: string; aspect: number; hovered: boolean; scale?: number }) {
  const texture = useLoader(THREE.TextureLoader, img);
  const charHeight = 2.0;
  const charWidth = charHeight * aspect;

  return (
    <Float speed={hovered ? 2 : 1} rotationIntensity={0.05} floatIntensity={hovered ? 0.3 : 0.1} floatingRange={[0, hovered ? 0.08 : 0.03]}>
      <mesh position={[0, charHeight / 2, 0]} scale={(hovered ? 1.04 : 1) * scale}>
        <planeGeometry args={[charWidth, charHeight]} />
        <meshBasicMaterial map={texture} transparent alphaTest={0.1} side={THREE.DoubleSide} />
      </mesh>
    </Float>
  );
}

function ExhibitionItem({ panel, onHover }: { panel: (typeof panels)[number]; onHover: (id: string | null) => void }) {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <group
      position={panel.pos}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); onHover(panel.id); document.body.style.cursor = "pointer"; }}
      onPointerOut={() => { setHovered(false); onHover(null); document.body.style.cursor = "default"; }}
      onClick={(e) => { e.stopPropagation(); router.push(panel.href); }}
    >
      <Billboard hovered={hovered} color={panel.color} img={panel.img} />
      <Platform hovered={hovered} color={panel.color} />
      <Spotlight hovered={hovered} />
      <group position={[0, panel.id === "projects" ? -1.0 : -1.2, 0.8]}>
        <CharacterSprite img={panel.char} aspect={panel.charAspect} hovered={hovered} scale={panel.id === "projects" ? 1.2 : 1} />
      </group>
      <Html position={[0, -2.0, 0.8]} center className="pointer-events-none select-none">
        <div style={{ textAlign: "center", width: 220 }}>
          <h2 style={{
            fontSize: 20, fontWeight: 700, letterSpacing: "0.04em",
            fontFamily: "var(--font-serif)",
            color: hovered ? panel.color : "#FFA689",
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

function CameraAnimator({ hoveredId }: { hoveredId: string | null }) {
  const defaultPos = useMemo(() => new THREE.Vector3(0, 1.5, 13), []);
  const defaultTarget = useMemo(() => new THREE.Vector3(0, -0.8, 0), []);
  const targetPos = useRef(new THREE.Vector3());
  const targetLook = useRef(new THREE.Vector3());

  useFrame(({ camera }) => {
    if (hoveredId) {
      const panel = panels.find((p) => p.id === hoveredId);
      if (panel) {
        const isOuter = panel.id === "about" || panel.id === "global";
        const zoomZ = isOuter ? 12.5 : 9;
        const panX = isOuter ? panel.pos[0] * 0.4 : panel.pos[0];
        targetPos.current.set(panX, 1.0, zoomZ);
        targetLook.current.set(panel.pos[0], -0.3, 0);
      }
    } else {
      targetPos.current.copy(defaultPos);
      targetLook.current.copy(defaultTarget);
    }
    camera.position.lerp(targetPos.current, 0.04);
  });

  return null;
}

function Scene() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
        autoRotate={!hoveredId}
        autoRotateSpeed={0.2}
      />
      <CameraAnimator hoveredId={hoveredId} />
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
          <ExhibitionItem key={panel.id} panel={panel} onHover={setHoveredId} />
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
