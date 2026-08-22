import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  Bug,
  Gavel,
  Layers3,
  ShieldAlert,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import CircuitBackground from "../components/CircuitBackground";

type Battlefield = "feature" | "lying" | "auction";

type BattlefieldData = {
  id: Battlefield;
  number: string;
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  mission: string;
  points: string[];
  bonus: string;
  icon: ReactNode;
};

const battlefields: BattlefieldData[] = [
  {
    id: "feature",
    number: "01",
    title: "FEATURE",
    highlight: "EXTENSION",
    subtitle: "BUILD ON WHAT ALREADY EXISTS",
    description:
      "You are given a working software project. Your mission is to understand the existing system and extend it with a new feature without breaking what is already there.",
    mission: "Read. Understand. Modify. Integrate.",
    points: [
      "Functional Correctness · 40 pts",
      "Edge Case Handling · 20 pts",
      "Integration & Consistency · 20 pts",
      "Speed & Efficiency · 20 pts",
    ],
    bonus: "BONUS · 5 pts for polish, usability & documentation",
    icon: <Layers3 size={23} />,
  },

  {
    id: "lying",
    number: "02",
    title: "THE COMPUTER",
    highlight: "IS LYING",
    subtitle: "FIND THE HIDDEN FLAW",
    description:
      "The program appears to work perfectly. Standard inputs give perfect outputs. But something is catastrophically wrong. Your job is to discover the truth.",
    mission: "Break it. Test it. Expose it.",
    points: [
      "Design your own test cases",
      "Identify hidden behaviour",
      "Trace the root cause",
      "Prove why the system fails",
    ],
    bonus: "BONUS · Think beyond the obvious test cases",
    icon: <Bug size={23} />,
  },

  {
    id: "auction",
    number: "03",
    title: "TECHNICAL",
    highlight: "AUCTION",
    subtitle: "BUY YOUR WAY TO VICTORY",
    description:
      "You begin with ₹10,000 in virtual event currency. Before seeing the problems, bid on the technical tools you believe will help you survive the battlefield.",
    mission: "Spend wisely. Solve strategically.",
    points: [
      "₹10,000 starting budget",
      "Bid on technical tools",
      "Balance skill vs resources",
      "Solve with what you purchased",
    ],
    bonus: "BONUS · Smart resource management & efficiency",
    icon: <Gavel size={23} />,
  },
];

const Round3 = () => {
  const navigate = useNavigate();

  const [selectedBattlefield, setSelectedBattlefield] =
    useState<Battlefield | null>(null);

  const handleContinue = () => {
    if (!selectedBattlefield) return;

    // Each battlefield gets its own guideline page.
    const routes: Record<Battlefield, string> = {
      feature: "/round-3/feature-extension-guidelines",
      lying: "/round-3/computer-is-lying-guidelines",
      auction: "/round-3/technical-auction-guidelines",
    };

    navigate(routes[selectedBattlefield], {
      state: {
        battlefield: selectedBattlefield,
      },
    });
  };

  return (
    <main className="round3-page">

      <CircuitBackground />

      <div className="round3-overlay" />

      {/* HEADER */}
      <header className="round3-header">

        <div className="round3-brand">
          <span className="round3-brand-dot" />

          <span>
            KINDLE JUNIOR <b>5.0</b>
          </span>
        </div>

        <div className="round3-round">
          ROUND 03
        </div>

      </header>

      {/* MAIN */}
      <section className="round3-container">

        {/* EYEBROW */}
        <div className="round3-eyebrow">
          <span />
          ROUND 03 · FINAL BATTLEFIELD
        </div>

        {/* HERO */}
        <div className="round3-hero">

          <div>

            <h1>
              Choose your
              <span> battlefield.</span>
            </h1>

            <p>
              The final round is not about solving the same
              problem everyone else is solving. Choose your
              battlefield, trust your strategy, and prove what
              you can do under pressure.
            </p>

          </div>

          <div className="round3-hero-icon">
            <ShieldAlert size={34} />
          </div>

        </div>

        {/* WARNING */}
        <div className="round3-warning">

          <Zap size={21} />

          <div>

            <strong>
              THERE IS NO EASY BATTLEFIELD.
            </strong>

            <p>
              Each option tests a different kind of
              technical thinking. Choose carefully.
            </p>

          </div>

        </div>

        {/* BATTLEFIELD GRID */}
        <div className="round3-grid">

          {battlefields.map((battlefield) => {

            const isSelected =
              selectedBattlefield === battlefield.id;

            return (
              <button
                key={battlefield.id}
                type="button"
                className={`round3-card ${
                  isSelected
                    ? "round3-card-selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedBattlefield(battlefield.id)
                }
                aria-pressed={isSelected}
              >

                {/* CARD TOP */}
                <div className="round3-card-top">

                  <span className="round3-number">
                    {battlefield.number}
                  </span>

                  <div className="round3-card-icon">
                    {battlefield.icon}
                  </div>

                  {isSelected && (
                    <div className="round3-selected">
                      <Check size={12} />
                      SELECTED
                    </div>
                  )}

                </div>

                {/* TITLE */}
                <div className="round3-card-title">

                  <h2>
                    {battlefield.title}
                    <span>
                      {" "}
                      {battlefield.highlight}
                    </span>
                  </h2>

                  <p>
                    {battlefield.subtitle}
                  </p>

                </div>

                {/* DESCRIPTION */}
                <div className="round3-description">
                  {battlefield.description}
                </div>

                {/* MISSION */}
                <div className="round3-challenge">

                  <span>
                    YOUR MISSION
                  </span>

                  <strong>
                    {battlefield.mission}
                  </strong>

                </div>

                {/* POINTS */}
                <div className="round3-points">

                  {battlefield.points.map((point) => (
                    <div
                      className="round3-point"
                      key={point}
                    >
                      <Check size={12} />
                      {point}
                    </div>
                  ))}

                </div>

                {/* BONUS */}
                <div className="round3-bonus">

                  <Zap size={12} />

                  {battlefield.bonus}

                </div>

                {/* SELECT */}
                <div className="round3-select">

                  <span>
                    {isSelected
                      ? "BATTLEFIELD SELECTED"
                      : "SELECT THIS BATTLEFIELD"}
                  </span>

                  <ArrowRight size={15} />

                </div>

              </button>
            );
          })}

        </div>

        {/* INFO */}
        <div className="round3-info-grid">

          <div className="round3-info-card">

            <Layers3 size={18} />

            <div>
              <strong>
                3 BATTLEFIELDS
              </strong>

              <span>
                One choice decides your challenge
              </span>
            </div>

          </div>

          <div className="round3-info-card">

            <ShieldAlert size={18} />

            <div>
              <strong>
                100 POINTS
              </strong>

              <span>
                Technical performance decides
              </span>
            </div>

          </div>

          <div className="round3-info-card">

            <Zap size={18} />

            <div>
              <strong>
                FINAL ROUND
              </strong>

              <span>
                This is where strategy matters
              </span>
            </div>

          </div>

        </div>

        {/* ACTION */}
        <div className="round3-action">

          <div className="round3-status">

            <span
              className={
                selectedBattlefield
                  ? "round3-status-active"
                  : ""
              }
            />

            {selectedBattlefield
              ? `${
                  battlefields.find(
                    (item) =>
                      item.id === selectedBattlefield
                  )?.number
                } · BATTLEFIELD READY`
              : "CHOOSE YOUR BATTLEFIELD"}

          </div>

          <button
            type="button"
            className={`round3-continue ${
              !selectedBattlefield
                ? "round3-continue-disabled"
                : ""
            }`}
            disabled={!selectedBattlefield}
            onClick={handleContinue}
          >

            ENTER FINAL BATTLE

            <ArrowRight size={17} />

          </button>

        </div>

        {/* FOOTER */}
        <div className="round3-footer">

          <span>
            FEATURE EXTENSION
          </span>

          <i />

          <span>
            THE COMPUTER IS LYING
          </span>

          <i />

          <span>
            TECHNICAL AUCTION
          </span>

          <i />

          <span>
            ROUND 03
          </span>

        </div>

      </section>

    </main>
  );
};

export default Round3;