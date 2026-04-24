import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, MeshDistortMaterial, Sphere, Box } from '@react-three/drei'
import { motion } from 'framer-motion'

function GamingScene() {
  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 3, 3]} intensity={2} />

      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere args={[1.2, 64, 64]} position={[-2, 0.5, 0]}>
          <MeshDistortMaterial color="#22d3ee" distort={0.35} speed={2} roughness={0} />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <Box args={[1.6, 1.6, 1.6]} position={[2, -0.2, 0]} rotation={[0.4, 0.4, 0]}>
          <meshStandardMaterial color="#a855f7" metalness={0.7} roughness={0.1} />
        </Box>
      </Float>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
    </>
  )
}

export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #000, #0f172a, #000)',
        color: 'white',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          width: '280px',
          height: '280px',
          background: 'rgba(6,182,212,0.15)',
          filter: 'blur(80px)',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '40px',
          width: '320px',
          height: '320px',
          background: 'rgba(124,58,237,0.15)',
          filter: 'blur(80px)',
          borderRadius: '50%',
        }}
      />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            background: 'rgba(255,255,255,0.03)',
          }}
        >
          <h1
            style={{
              fontSize: '22px',
              fontWeight: '900',
              letterSpacing: '2px',
              background: 'linear-gradient(90deg,#22d3ee,#a855f7)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            GAME ZONE X
          </h1>
          <div style={{ fontSize: '12px' }}>PLAY NOW</div>
        </nav>

        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '85vh',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30px',
            padding: '20px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <p
              style={{
                color: '#22d3ee',
                fontWeight: '700',
                letterSpacing: '4px',
                fontSize: '12px',
                textTransform: 'uppercase',
              }}
            >
              Next Gen Gaming
            </p>

            <h2
              style={{
                marginTop: '16px',
                fontSize: '48px',
                lineHeight: '0.95',
                fontWeight: '900',
              }}
            >
              <span
                style={{
                  background: 'linear-gradient(90deg,#22d3ee,#60a5fa,#a855f7)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                PLAY
              </span>
              <br />
              <span
                style={{
                  background: 'linear-gradient(90deg,#c084fc,#ec4899,#ef4444)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                BEYOND
              </span>
            </h2>

            <p
              style={{
                marginTop: '24px',
                color: '#cbd5e1',
                fontSize: '16px',
                maxWidth: '340px',
                lineHeight: '1.6',
              }}
            >
              Futuristic 3D gaming website with neon UI and premium cyberpunk vibe.
            </p>

            <div
              style={{
                marginTop: '28px',
                display: 'flex',
                gap: '14px',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <button
                style={{
                  padding: '12px 22px',
                  borderRadius: '18px',
                  border: 'none',
                  background: 'linear-gradient(90deg,#06b6d4,#2563eb)',
                  color: 'white',
                  fontWeight: '700',
                }}
              >
                Start Game
              </button>

              <button
                style={{
                  padding: '12px 22px',
                  borderRadius: '18px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.04)',
                  color: 'white',
                }}
              >
                Watch
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{
              width: '100%',
              maxWidth: '360px',
              height: '320px',
              borderRadius: '28px',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.04)',
              overflow: 'hidden',
            }}
          >
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <GamingScene />
            </Canvas>
          </motion.div>
        </section>
      </div>
    </div>
  )
          }
