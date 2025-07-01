function Background() {
  return (
    <video
  autoPlay
  loop
  muted
  playsInline
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backgroundColor: '#000',
    zIndex: -1,
    opacity: 0.85,
  }}
>
  <source src="/bunny-bg.mp4" type="video/mp4" />
</video>

  );
}

export default Background;
