function Card({ children }) {
  return (
    <div
      style={{
        width: '100vw',
        margin: 0,
        padding: 0,
        borderRadius: 0,
        backgroundColor: 'transparent',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
}

export default Card;
