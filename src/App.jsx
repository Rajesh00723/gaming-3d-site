import { motion } from 'framer-motion'

const cardStyle = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '20px',
  padding: '18px',
  backdropFilter: 'blur(10px)',
}

const buttonPrimary = {
  padding: '12px 22px',
  borderRadius: '16px',
  border: 'none',
  background: 'linear-gradient(90deg,#06b6d4,#2563eb)',
  color: 'white',
  fontWeight: '700',
  fontSize: '14px',
}

const buttonSecondary = {
  padding: '12px 22px',
  borderRadius: '16px',
  border: '1px solid rgba(255,255,255,0.12)',
  background: 'rgba(255,255,255,0.04)',
  color: 'white',
  fontWeight: '600',
  fontSize: '14px',
}

export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top left, #0f172a, #020617 45%, #000 100%)',
        color: 'white',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Glow blobs */}
      <div
        style={{
          position: 'absolute',
          top: '-60px',
          left: '-60px',
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          background: 'rgba(34,211,238,0.18)',
          filter: 'blur(70px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-80px',
          right: '-60px',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          background: 'rgba(168,85,247,0.18)',
          filter: 'blur(80px)',
        }}
      />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Navbar */}
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '18px 16px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(10px)',
            position: 'sticky',
            top: 0,
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: '20px',
              fontWeight: '900',
              letterSpacing: '1.5px',
              background: 'linear-gradient(90deg,#22d3ee,#a855f7)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            GAME ZONE X
          </div>
          <button style={buttonSecondary}>Login</button>
        </nav>

        {/* Hero */}
        <section
          style={{
            padding: '28px 16px 18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p
              style={{
                color: '#22d3ee',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '3px',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              Next Gen Gaming
            </p>

            <h1
              style={{
                fontSize: '42px',
                lineHeight: '0.95',
                margin: '14px 0 0',
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
                LIKE A PRO
              </span>
            </h1>

            <p
              style={{
                marginTop: '16px',
                color: '#cbd5e1',
                fontSize: '15px',
                lineHeight: '1.6',
                maxWidth: '360px',
              }}
            >
              Futuristic gaming landing page with neon vibe, tournaments, rewards,
              premium UI and mobile-friendly layout.
            </p>

            <div
              style={{
                marginTop: '18px',
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
              }}
            >
              <button style={buttonPrimary}>Start Game</button>
              <button style={buttonSecondary}>Watch Trailer</button>
            </div>
          </motion.div>

          {/* Fake 3D Hero Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              ...cardStyle,
              padding: '22px',
              marginTop: '8px',
              background:
                'linear-gradient(145deg, rgba(34,211,238,0.08), rgba(168,85,247,0.08), rgba(255,255,255,0.03))',
            }}
          >
            <div
              style={{
                height: '220px',
                borderRadius: '24px',
                background:
                  'radial-gradient(circle at 30% 30%, rgba(34,211,238,0.35), transparent 30%), radial-gradient(circle at 70% 70%, rgba(168,85,247,0.35), transparent 30%), linear-gradient(135deg, #0f172a, #020617, #111827)',
                border: '1px solid rgba(255,255,255,0.08)',
                position: 'relative',
                overflow: 'hidden',
                transform: 'perspective(900px) rotateX(10deg) rotateY(-8deg)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.45)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '18px',
                  left: '18px',
                  width: '90px',
                  height: '90px',
                  borderRadius: '18px',
                  background: 'linear-gradient(135deg,#06b6d4,#2563eb)',
                  transform: 'rotate(18deg)',
                  boxShadow: '0 10px 30px rgba(6,182,212,0.35)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  right: '22px',
                  bottom: '24px',
                  width: '110px',
                  height: '110px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg,#a855f7,#ec4899)',
                  boxShadow: '0 10px 30px rgba(168,85,247,0.35)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '38px' }}>🎮</div>
                <div style={{ fontWeight: '800', marginTop: '8px' }}>3D Gaming Arena</div>
                <div style={{ fontSize: '12px', color: '#cbd5e1', marginTop: '4px' }}>
                  Mobile Safe Preview
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features */}
        <section style={{ padding: '10px 16px 0' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '14px' }}>Top Features</h2>

          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              ['⚡', 'Ultra Fast', 'Lag-free premium gaming experience'],
              ['🏆', 'Tournaments', 'Daily battles and rewards'],
              ['🛒', 'Gaming Store', 'Skins, packs and exclusive drops'],
            ].map(([icon, title, text], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                style={cardStyle}
              >
                <div style={{ fontSize: '26px' }}>{icon}</div>
                <div style={{ fontSize: '18px', fontWeight: '800', marginTop: '8px' }}>{title}</div>
                <div style={{ color: '#cbd5e1', fontSize: '14px', marginTop: '6px' }}>{text}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tournament */}
        <section style={{ padding: '24px 16px 0' }}>
          <div
            style={{
              ...cardStyle,
              background:
                'linear-gradient(135deg, rgba(34,211,238,0.08), rgba(168,85,247,0.08))',
            }}
          >
            <div style={{ fontSize: '12px', color: '#22d3ee', letterSpacing: '2px' }}>
              LIVE EVENT
            </div>
            <h3 style={{ margin: '10px 0 6px', fontSize: '24px' }}>Cyber Clash Tournament</h3>
            <p style={{ margin: 0, color: '#cbd5e1', lineHeight: '1.6' }}>
              Join the weekly showdown and win rewards, coins and premium skins.
            </p>

            <div
              style={{
                marginTop: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                flexWrap: 'wrap',
              }}
            >
              <div style={cardStyle}>
                <div style={{ fontSize: '12px', color: '#94a3b8' }}>Prize Pool</div>
                <div style={{ fontSize: '18px', fontWeight: '800' }}>₹50,000</div>
              </div>
              <div style={cardStyle}>
                <div style={{ fontSize: '12px', color: '#94a3b8' }}>Players</div>
                <div style={{ fontSize: '18px', fontWeight: '800' }}>128</div>
              </div>
            </div>

            <button style={{ ...buttonPrimary, marginTop: '18px', width: '100%' }}>
              Join Tournament
            </button>
          </div>
        </section>

        {/* Footer CTA */}
        <section style={{ padding: '24px 16px 30px' }}>
          <div
            style={{
              ...cardStyle,
              textAlign: 'center',
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(168,85,247,0.08))',
            }}
          >
            <div style={{ fontSize: '22px', fontWeight: '900' }}>Ready to dominate?</div>
            <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6' }}>
              Upgrade this site anytime from GitHub and Vercel will auto update it.
            </p>
            <button style={{ ...buttonPrimary, width: '100%' }}>Launch Now</button>
          </div>
        </section>
      </div>
    </div>
  )
                }
