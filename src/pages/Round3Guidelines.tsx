import CircuitBackground from "../components/CircuitBackground";

const ThankYou = () => {
  return (
    <main className="round3-page">
      <CircuitBackground />
      <div className="round3-overlay" />

      <section className="round3-container thank-you-page">
        <div className="round3-eyebrow">
          <span />
          KINDLE JUNIOR 5.0
        </div>

        <div className="thank-you-content">
          <div className="round3-round">ROUND 03</div>

          <h1>
            Thank <span>you.</span>
          </h1>

          <p>
            You’ve made it this far — now make it count.
            <br />
            We’d love to see you there.
          </p>

          <div className="thank-you-line" />

          <strong>BEST OF LUCK FOR ROUND 03.</strong>
        </div>
      </section>
    </main>
  );
};

export default ThankYou;
