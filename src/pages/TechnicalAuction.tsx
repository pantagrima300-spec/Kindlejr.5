import { useState } from "react";
import {
  Gavel,
  Coins,
  CheckCircle2,
  Clock3,
  ArrowUp,
  Send,
} from "lucide-react";
import CircuitBackground from "../components/CircuitBackground";

type Tool = {
  name: string;
  price: number;
  description: string;
};

const tools: Tool[] = [
  {
    name: "SORTING",
    price: 1000,
    description: "Unlock sorting utilities.",
  },
  {
    name: "SEARCH",
    price: 2000,
    description: "Unlock advanced search tools.",
  },
  {
    name: "DEBUGGER",
    price: 2500,
    description: "Gain debugging assistance.",
  },
  {
    name: "OPTIMIZER",
    price: 3000,
    description: "Unlock optimization utilities.",
  },
  {
    name: "DATA STRUCTURES",
    price: 3500,
    description: "Unlock advanced DS utilities.",
  },
];

const TechnicalAuction = () => {

  const [balance, setBalance] = useState(10000);

  const [purchased, setPurchased] =
    useState<string[]>([]);

  const [submitted, setSubmitted] =
    useState(false);

  const purchaseTool = (tool: Tool) => {

    if (purchased.includes(tool.name)) return;

    if (balance < tool.price) return;

    setBalance((current) =>
      current - tool.price
    );

    setPurchased((current) => [
      ...current,
      tool.name,
    ]);
  };

  return (
    <main className="battlefield-page auction-page">

      <CircuitBackground />

      <div className="battlefield-overlay" />

      {/* HEADER */}
      <header className="battlefield-header">

        <div className="battlefield-brand">

          <span className="battlefield-dot" />

          KINDLE JUNIOR <b>5.0</b>

        </div>

        <div className="battlefield-round">
          ROUND 03 · BATTLEFIELD 03
        </div>

      </header>

      <section className="battlefield-container">

        {/* HERO */}
        <div className="battlefield-top">

          <div>

            <div className="battlefield-eyebrow">
              <Gavel size={14} />
              TECHNICAL AUCTION
            </div>

            <h1>
              Buy your way
              <span> to victory.</span>
            </h1>

            <p>
              You have ₹10,000 in virtual event currency.
              Choose your tools carefully. Once your money
              is spent, it is gone.
            </p>

          </div>

          <div className="auction-wallet">

            <Coins size={20} />

            <div>
              <span>AVAILABLE BALANCE</span>

              <strong>
                ₹{balance.toLocaleString()}
              </strong>
            </div>

          </div>

        </div>

        {/* AUCTION STATUS */}
        <div className="auction-status">

          <div>

            <Clock3 size={17} />

            <span>
              AUCTION ACTIVE
            </span>

          </div>

          <strong>
            STARTING BUDGET · ₹10,000
          </strong>

        </div>

        {/* TOOLS */}
        <div className="auction-grid">

          {tools.map((tool) => {

            const bought =
              purchased.includes(tool.name);

            const affordable =
              balance >= tool.price;

            return (
              <div
                className={`auction-tool ${
                  bought
                    ? "auction-tool-bought"
                    : ""
                }`}
                key={tool.name}
              >

                <div className="auction-tool-top">

                  <span>
                    TOOL
                  </span>

                  {bought && (
                    <CheckCircle2 size={17} />
                  )}

                </div>

                <h2>
                  {tool.name}
                </h2>

                <p>
                  {tool.description}
                </p>

                <div className="auction-price">

                  <Coins size={14} />

                  ₹{tool.price.toLocaleString()}

                </div>

                <button
                  disabled={
                    bought || !affordable
                  }
                  onClick={() =>
                    purchaseTool(tool)
                  }
                  className={
                    bought
                      ? "auction-bought-button"
                      : ""
                  }
                >

                  {bought
                    ? "PURCHASED"
                    : affordable
                      ? "BID / PURCHASE"
                      : "INSUFFICIENT FUNDS"}

                  {!bought && affordable && (
                    <ArrowUp size={15} />
                  )}

                </button>

              </div>
            );
          })}

        </div>

        {/* INVENTORY */}
        <div className="auction-inventory">

          <div className="battlefield-section-label">
            YOUR PURCHASED TOOLS
          </div>

          {purchased.length === 0 ? (

            <p className="auction-empty">
              No tools purchased yet. Spend your budget wisely.
            </p>

          ) : (

            <div className="auction-purchased-list">

              {purchased.map((tool) => (
                <span key={tool}>
                  <CheckCircle2 size={13} />
                  {tool}
                </span>
              ))}

            </div>

          )}

        </div>

        {/* SUBMIT */}
        <div className="round3-action">

          <div className="round3-status">

            <span className="round3-status-active" />

            {purchased.length} TOOLS ACQUIRED

          </div>

          <button
            className="round3-continue"
            onClick={() => setSubmitted(true)}
          >

            LOCK AUCTION

            <Send size={16} />

          </button>

        </div>

        {submitted && (

          <div className="battlefield-success">

            <CheckCircle2 size={20} />

            <div>

              <strong>
                AUCTION LOCKED
              </strong>

              <span>
                Your purchased tools are now locked for
                the final challenge.
              </span>

            </div>

          </div>

        )}

      </section>

    </main>
  );
};

export default TechnicalAuction;