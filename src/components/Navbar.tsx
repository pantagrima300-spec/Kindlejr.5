import { ShieldCheck } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-brand">
        <div className="brand-mark">
          <ShieldCheck size={17} />
        </div>

        <div>
          <span className="brand-main">
            IEEE STUDENT BRANCH
          </span>

          <span className="brand-sub">
            GRAPHIC ERA UNIVERSITY
          </span>
        </div>
      </div>


      <div className="navbar-event">
        <span className="nav-status" />
        KINDLE JUNIOR <b>5.0</b>
      </div>

    </nav>
  );
};

export default Navbar;