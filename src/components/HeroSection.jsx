function HeroSection() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
      }}
      >
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff' }}>
      Bunny <span style={{ color: '#E12750' }}>x</span> Project
      </h1>
      <p>Streetwear Drop 1</p>
      <a href="#products" style={{ marginTop: '2rem', fontSize: '1.5rem', color: '#fff', textDecoration: 'none' }}>
        ↓ Scroll
      </a>
    </div>
  );
}

export default HeroSection;