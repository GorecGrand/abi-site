import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, useTexture, Environment, Float } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

/* ═══════════════════════════════════════════
   STATIC ABI CORE — logo fixed at center
   ═══════════════════════════════════════════ */
function ABICore() {
  const spriteRef = useRef<THREE.Sprite>(null)
  const logoTex = useTexture('/assets/abi-logo.png')

  const material = useMemo(() => {
    if (!logoTex) return null
    const mat = new THREE.SpriteMaterial({
      map: logoTex,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    return mat
  }, [logoTex])

  return (
    <group>
      <sprite ref={spriteRef} position={[0, 0, 0]} scale={[0.9, 0.9, 0.9]} material={material || undefined} />
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#001020"
          emissive="#003366"
          emissiveIntensity={1.0}
          roughness={0.7}
          metalness={0.6}
          transparent
          opacity={0.6}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#E0F0FF" toneMapped={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.58, 32, 32]} />
        <meshBasicMaterial
          color="#0066CC"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.68, 32, 32]} />
        <meshBasicMaterial
          color="#00BFFF"
          transparent
          opacity={0.05}
          side={THREE.FrontSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}

/* ═══════════════════════════════════════════
   GLASS SHELL
   ═══════════════════════════════════════════ */
function GlassShell() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.getElapsedTime() * 0.015
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.05, 64, 64]} /> {/* Reduced from 128,128 */}
      <meshPhysicalMaterial
        color="#001830"
        metalness={0.05}
        roughness={0.02}
        transmission={0.94}
        thickness={2.0}
        ior={1.7}
        clearcoat={1.0}
        clearcoatRoughness={0.05}
        transparent
        opacity={0.5}
        side={THREE.DoubleSide}
        depthWrite={false}
        envMapIntensity={2.0}
      />
    </mesh>
  )
}

/* ═══════════════════════════════════════════
   INNER WIREFRAME LATTICE — fixed memory leak
   ═══════════════════════════════════════════ */
function InnerLattice() {
  const ref = useRef<THREE.Group>(null)
  const wireGeo = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(0.82, 2)
    return new THREE.WireframeGeometry(geo) // Cached, not recreated each frame
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = -state.clock.getElapsedTime() * 0.08
      ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1
    }
  })

  return (
    <group ref={ref}>
      <lineSegments geometry={wireGeo}>
        <lineBasicMaterial color="#004080" transparent opacity={0.15} />
      </lineSegments>
    </group>
  )
}

/* ═══════════════════════════════════════════
   ORBITAL RING
   ═══════════════════════════════════════════ */
function OrbitRing({ radius, speed, tilt, color }: {
  radius: number; speed: number; tilt: [number, number, number]; color: string
}) {
  const ref = useRef<THREE.Group>(null)
  const nodeCount = Math.min(Math.floor(radius * 6), 12) // Cap at 12 nodes max
  useFrame(() => {
    if (ref.current) ref.current.rotation.z += speed * 0.004
  })
  return (
    <group rotation={tilt}>
      <group ref={ref}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.005, 8, 96]} /> {/* Reduced from 128 segs */}
          <meshBasicMaterial color={color} transparent opacity={0.35} />
        </mesh>
        {Array.from({ length: nodeCount }, (_, i) => {
          const angle = (i / nodeCount) * Math.PI * 2
          return (
            <mesh key={i} position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}>
              <sphereGeometry args={[0.02, 6, 6]} /> {/* Reduced from 8,8 */}
              <meshBasicMaterial color={i % 4 === 0 ? '#00FFFF' : color} transparent opacity={0.9} />
            </mesh>
          )
        })}
      </group>
    </group>
  )
}

/* ═══════════════════════════════════════════
   PREMIUM PARTICLE SYSTEM — reduced count
   ═══════════════════════════════════════════ */
function PremiumParticles() {
  const groupRef = useRef<THREE.Group>(null)
  const count = 40 // Reduced from 80 for performance

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => {
      const phi = Math.random() * Math.PI * 2
      const theta = Math.acos(2 * Math.random() - 1)
      const r = 1.1 + Math.random() * 1.2
      const isBright = Math.random() > 0.6
      return {
        position: new THREE.Vector3(
          r * Math.sin(theta) * Math.cos(phi),
          r * Math.cos(theta),
          r * Math.sin(theta) * Math.sin(phi)
        ),
        baseRadius: isBright ? 0.015 + Math.random() * 0.02 : 0.008 + Math.random() * 0.01,
        isBright,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.3 + Math.random() * 1.2,
        color: isBright
          ? new THREE.Color().lerpColors(new THREE.Color('#00BFFF'), new THREE.Color('#00FFFF'), Math.random())
          : new THREE.Color('#0066AA'),
      }
    })
  }, [count])

  const meshRefs = useRef<(THREE.Mesh | null)[]>([])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return
      const p = particles[i]
      const pulse = Math.sin(t * p.pulseSpeed + p.pulsePhase) * 0.3 + 0.7
      const mat = mesh.material as THREE.MeshBasicMaterial
      mat.opacity = p.isBright ? pulse * 0.9 : pulse * 0.4
      mesh.scale.setScalar(pulse)
      const dist = mesh.position.length()
      if (dist > 2.5) {
        mesh.position.copy(p.position).multiplyScalar(0.5)
      }
    })
  })

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh
          key={i}
          ref={(el) => { meshRefs.current[i] = el }}
          position={p.position}
        >
          <sphereGeometry args={[p.baseRadius, 6, 6]} /> {/* Reduced from 8,8 */}
          <meshBasicMaterial
            color={p.color}
            transparent
            opacity={p.isBright ? 0.9 : 0.4}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  )
}

/* ═══════════════════════════════════════════
   ENERGY STREAMS — reduced count
   ═══════════════════════════════════════════ */
function EnergyStreams() {
  const ref = useRef<THREE.Group>(null)

  const { brightGeo, faintGeo } = useMemo(() => {
    const brightCount = 15 // Reduced from 30
    const faintCount = 20  // Reduced from 40
    const brightPos = new Float32Array(brightCount * 6)
    const faintPos = new Float32Array(faintCount * 6)

    for (let i = 0; i < brightCount; i++) {
      const phi = Math.random() * Math.PI * 2
      const theta = Math.acos(2 * Math.random() - 1)
      const r1 = 0.65 + Math.random() * 0.2
      const r2 = r1 + 0.3 + Math.random() * 0.4
      brightPos[i * 6] = r1 * Math.sin(theta) * Math.cos(phi)
      brightPos[i * 6 + 1] = r1 * Math.cos(theta)
      brightPos[i * 6 + 2] = r1 * Math.sin(theta) * Math.sin(phi)
      brightPos[i * 6 + 3] = r2 * Math.sin(theta) * Math.cos(phi)
      brightPos[i * 6 + 4] = r2 * Math.cos(theta)
      brightPos[i * 6 + 5] = r2 * Math.sin(theta) * Math.sin(phi)
    }

    for (let i = 0; i < faintCount; i++) {
      const phi = Math.random() * Math.PI * 2
      const theta = Math.acos(2 * Math.random() - 1)
      const r1 = 1.1 + Math.random() * 0.3
      const r2 = r1 + 0.5 + Math.random() * 0.6
      faintPos[i * 6] = r1 * Math.sin(theta) * Math.cos(phi)
      faintPos[i * 6 + 1] = r1 * Math.cos(theta)
      faintPos[i * 6 + 2] = r1 * Math.sin(theta) * Math.sin(phi)
      faintPos[i * 6 + 3] = r2 * Math.sin(theta) * Math.cos(phi)
      faintPos[i * 6 + 4] = r2 * Math.cos(theta)
      faintPos[i * 6 + 5] = r2 * Math.sin(theta) * Math.sin(phi)
    }

    const bg = new THREE.BufferGeometry()
    bg.setAttribute('position', new THREE.BufferAttribute(brightPos, 3))
    const fg = new THREE.BufferGeometry()
    fg.setAttribute('position', new THREE.BufferAttribute(faintPos, 3))
    return { brightGeo: bg, faintGeo: fg }
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.025
    }
  })

  return (
    <group ref={ref}>
      <lineSegments geometry={brightGeo}>
        <lineBasicMaterial color="#00BFFF" transparent opacity={0.12} blending={THREE.AdditiveBlending} />
      </lineSegments>
      <lineSegments geometry={faintGeo}>
        <lineBasicMaterial color="#003366" transparent opacity={0.05} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  )
}

/* ═══════════════════════════════════════════
   OUTER NODES — reduced count
   ═══════════════════════════════════════════ */
function OuterNodes() {
  const ref = useRef<THREE.Group>(null)
  const nodes = useMemo(() => {
    const count = 12 // Reduced from 20
    return Array.from({ length: count }, () => {
      const phi = Math.random() * Math.PI * 2
      const theta = Math.acos(2 * Math.random() - 1)
      const r = 1.7 + Math.random() * 0.5
      return {
        position: [
          r * Math.sin(theta) * Math.cos(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(theta),
        ] as [number, number, number],
        scale: 0.025 + Math.random() * 0.025,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 1.0,
      }
    })
  }, [])

  const meshRefs = useRef<(THREE.Mesh | null)[]>([])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.y = -t * 0.06
      ref.current.rotation.x = Math.sin(t * 0.08) * 0.08
    }
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return
      const pulse = Math.sin(t * nodes[i].speed + nodes[i].phase) * 0.4 + 0.6
      const mat = mesh.material as THREE.MeshBasicMaterial
      mat.opacity = pulse * 0.5
    })
  })

  return (
    <group ref={ref}>
      {nodes.map((node, i) => (
        <mesh
          key={i}
          ref={(el) => { meshRefs.current[i] = el }}
          position={node.position}
        >
          <sphereGeometry args={[node.scale, 6, 6]} />
          <meshBasicMaterial
            color={i % 5 === 0 ? '#00FFFF' : '#0066AA'}
            transparent
            opacity={0.5}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  )
}

/* ═══════════════════════════════════════════
   MAIN SCENE
   ═══════════════════════════════════════════ */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.15} color="#001144" />
      <pointLight position={[3, 3, 3]} intensity={2.0} color="#00BFFF" distance={12} />
      <pointLight position={[-3, -2, 2]} intensity={1.0} color="#0066AA" distance={12} />
      <pointLight position={[0, 0, 2]} intensity={1.5} color="#00CCFF" distance={6} />
      <Environment preset="night" />

      <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.3} floatingRange={[-0.05, 0.05]}>
        <ABICore />
        <GlassShell />
        <InnerLattice />

        <OrbitRing radius={1.15} speed={1.0} tilt={[0.35, 0.15, 0]} color="#00BFFF" />
        <OrbitRing radius={1.45} speed={-0.8} tilt={[0.5, -0.25, 0.35]} color="#0088DD" />
        <OrbitRing radius={1.8} speed={0.6} tilt={[-0.25, 0.4, -0.15]} color="#0066AA" />

        <EnergyStreams />
        <PremiumParticles />
        <OuterNodes />

        <Stars radius={80} depth={40} count={300} factor={3} saturation={0} fade speed={0.3} /> {/* count: 500→300 */}
      </Float>
    </>
  )
}

/* ═══════════════════════════════════════════
   EXPORT
   ═══════════════════════════════════════════ */
export default function IcosahedronScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
        style={{ background: 'transparent' }}
      >
        <Scene />
        <EffectComposer>
          <Bloom intensity={1.8} luminanceThreshold={0.08} luminanceSmoothing={0.85} mipmapBlur />
        </EffectComposer>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.15}
          maxPolarAngle={Math.PI * 0.7}
          minPolarAngle={Math.PI * 0.3}
        />
      </Canvas>
    </div>
  )
}
