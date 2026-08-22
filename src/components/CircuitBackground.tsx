const CircuitBackground = () => {
  return (
    <div className="circuit-background" aria-hidden="true">
      <div className="circuit-grid" />

      <div className="circuit-line line-1" />
      <div className="circuit-line line-2" />
      <div className="circuit-line line-3" />
      <div className="circuit-line line-4" />

      <div className="circuit-node node-1" />
      <div className="circuit-node node-2" />
      <div className="circuit-node node-3" />
      <div className="circuit-node node-4" />
      <div className="circuit-node node-5" />
      <div className="circuit-node node-6" />

      <div className="circuit-glow glow-1" />
      <div className="circuit-glow glow-2" />
    </div>
  );
};

export default CircuitBackground;