export default function App() {
  const section = {
    padding: '20px 16px',
  }

  const card = {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '18px',
    padding: '16px',
    marginTop: '12px',
  }

  const btn1 = {
    padding: '12px 18px',
    borderRadius: '14px',
    border: 'none',
    background: 'linear-gradient(90deg,#06b6d4,#2563eb)',
    color: '#fff',
    fontWeight: '700',
    fontSize: '14px',
  }

  const btn2 = {
    padding: '12px 18px',
    borderRadius: '14px',
    border: '1px solid rgba(255,255,255,0.15)',
    background: 'rgba(255,255,255,0.05)',
    color: '#fff',
    fontWeight: '700',
    fontSize: '14px',
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0f172a 0%, #020617 55%, #000 100%)',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* NAVBAR */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px',
          background: 'rgba(0,0,0,0.45)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div
          style={{
            fontSize: '22px',
            fontWeight: '900',
            letterSpacing: '1px',
            color: '#22d3ee',
          }}
        >
          GAME ZONE X
        </div>
        <button style={btn2}>Login</button>
      </div>

      {/* HERO */}
      <div style={section}>
        <div style={{ color: '#22d3ee', fontSize: '12px', fontWeight: '800', letterSpacing: '3px' }}>
          NEXT GEN GAMING
        </div>

        <h1
          style={{
            margin: '12px 0 0',
            fontSize: '42px',
            lineHeight: '1',
            fontWeight: '900',
          }}
        >
          PLAY
          <br />
          LIKE A PRO
        </h1>

        <p
          style={{
            marginTop: '14px',
            color: '#cbd5e1',
            fontSize: '15px',
            lineHeight: '1.6',
            maxWidth: '360px',
          }}
        >
          Premium mobile-safe gaming landing page. Tournaments, rewards, store and esports vibe.
        </p>

        <div style={{ display: 'flex', gap: '10px', marginTop: '16px', flexWrap: 'wrap' }}>
          <button style={btn1}>Start Game</button>
          <button style={btn2}>Watch Trailer</button>
        </div>

        {/* HERO CARD */}
        <div
          style={{
            ...card,
            marginTop: '20px',
            background:
              'linear-gradient(135deg, rgba(34,211,238,0.12), rgba(168,85,247,0.10), rgba(255,255,255,0.04))',
          }}
        >
          <div
            style={{
              height: '220px',
              borderRadius: '22px',
              background:
                'radial-gradient(circle at 25% 25%, rgba(34,211,238,0.25), transparent 25%), radial-gradient(circle at 75% 70%, rgba(168,85,247,0.25), transparent 25%), linear-gradient(135deg, #111827, #0f172a, #020617)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div style={{ fontSize: '44px' }}>🎮</div>
            <div style={{ marginTop: '8px', fontSize: '22px', fontWeight: '900' }}>3D Gaming Arena</div>
            <div style={{ marginTop: '6px', color: '#cbd5e1', fontSize: '13px' }}>Ultra Safe Mobile Version</div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div style={section}>
        <h2 style={{ margin: 0, fontSize: '24px', fontWeight: '900' }}>Top Features</h2>

        <div style={card}>
          <div style={{ fontSize: '24px' }}>⚡</div>
          <div style={{ marginTop: '8px', fontSize: '18px', fontWeight: '800' }}>Ultra Fast</div>
          <div style={{ marginTop: '6px', color: '#cbd5e1', fontSize: '14px' }}>
            Lag-free smooth gaming experience with premium UI.
          </div>
        </div>

        <div style={card}>
          <div style={{ fontSize: '24px' }}>🏆</div>
          <div style={{ marginTop: '8px', fontSize: '18px', fontWeight: '800' }}>Tournaments</div>
          <div style={{ marginTop: '6px', color: '#cbd5e1', fontSize: '14px' }}>
            Join weekly esports battles and win exciting rewards.
          </div>
        </div>

        <div style={card}>
          <div style={{ fontSize: '24px' }}>🛒</div>
          <div style={{ marginTop: '8px', fontSize: '18px', fontWeight: '800' }}>Gaming Store</div>
          <div style={{ marginTop: '6px', color: '#cbd5e1', fontSize: '14px' }}>
            Buy skins, bundles and exclusive premium packs.
          </div>
        </div>
      </div>

      {/* TOURNAMENT */}
      <div style={section}>
        <div
          style={{
            ...card,
            background: 'linear-gradient(135deg, rgba(34,211,238,0.08), rgba(168,85,247,0.08))',
          }}
        >
          <div style={{ color: '#22d3ee', fontSize: '12px', fontWeight: '800', letterSpacing: '2px' }}>
            LIVE EVENT
          </div>

          <div style={{ marginTop: '8px', fontSize: '24px', fontWeight: '900' }}>Cyber Clash Tournament</div>

          <div style={{ marginTop: '8px', color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6' }}>
            Weekly showdown with rewards, coins and premium skins.
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '14px', flexWrap: 'wrap' }}>
            <div style={card}>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>Prize Pool</div>
              <div style={{ fontWeight: '900', fontSize: '18px' }}>₹50,000</div>
            </div>
            <div style={card}>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>Players</div>
              <div style={{ fontWeight: '900', fontSize: '18px' }}>128</div>
            </div>
          </div>

          <button style={{ ...btn1, width: '100%', marginTop: '14px' }}>Join Tournament</button>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ padding: '20px 16px 30px' }}>
        <div style={{ ...card, textAlign: 'center' }}>
          <div style={{ fontSize: '22px', fontWeight: '900' }}>Ready to dominate?</div>
          <div style={{ marginTop: '8px', color: '#cbd5e1', fontSize: '14px', lineHeight: '1.6' }}>
            Update this site anytime from GitHub and Vercel auto redeploy karega.
          </div>
          <button style={{ ...btn1, width: '100%', marginTop: '14px' }}>Launch Now</button>
        </div>
      </div>
    </div>
  )
}
