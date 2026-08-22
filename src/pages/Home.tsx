import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  Code2,
  FileQuestion,
} from "lucide-react";
import CircuitBackground from "../components/CircuitBackground";
import FloatingCard from "../components/FloatingCard";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main className="home">
      <CircuitBackground />
      <Navbar />
      <section className="hero">

        <div className="hero-eyebrow">
          <span />
          TECHNICAL CODING COMPETITION · 2026
        </div>


        <div className="hero-heading">

          <h1>
            KINDLE
            <em>JUNIOR 5.0</em>
          </h1>

          <p className="hero-tagline">
            THINK <span>•</span> CODE <span>•</span> SOLVE
          </p>

        </div>
        <FloatingCard
          icon={<FileQuestion size={18} />}
          label="ROUND 01"
          value="40 QUESTIONS"
          description="Multiple-choice challenge"
          className="card-question"
        />
        <FloatingCard
          icon={<Clock3 size={18} />}
          label="TOTAL TIME"
          value="40 MINUTES"
          description="One minute per question"
          className="card-time"
        />
        <FloatingCard
          label="TIME MANAGEMENT"
          value="01 MIN / Q"
          description="Think fast. Choose wisely."
          className="card-minute"
        />
        <FloatingCard
          icon={<Code2 size={18} />}
          label="QUESTION DOMAINS"
          value="C · C++ · PY · JAVA"
          description="Programming & logic"
          className="card-domains"
        />
        <div className="hero-content">

          <p>
            A technical challenge designed to test
            your programming fundamentals, logic,
            and problem-solving skills.
          </p>

          <Link to="/login" className="hero-button">
           <span>LOGIN TO ROUND 01</span>
             <ArrowRight size={17} />
          </Link>

        </div>
        <div className="hero-meta">

          <span>ROUND 01</span>

          <i />

          <span>40 QUESTIONS</span>

          <i />

          <span>40 MINUTES</span>

        </div>

      </section>

    </main>
  );
};

export default Home;