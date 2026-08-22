import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

import Round1Guidelines from "./pages/Round1Guidelines";
import Round1 from "./pages/Round1";
import Round1Result from "./pages/Round1Result";

import Round2Guidelines from "./pages/Round2Guidlines";
import LanguageSelection from "./pages/LanguageSelection";
import CodingArena from "./pages/CodingArena";
import Round2Result from "./pages/Round2Result";
import Round3Guidelines from "./pages/Round3Guidelines";
import FeatureExtension from "./pages/FeatureExtension";
import ComputerIsLying from "./pages/ComputerIsLying";
import TechnicalAuction from "./pages/TechnicalAuction";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* ROUND 1 GUIDELINES */}
        <Route
          path="/round-1-guidelines"
          element={<Round1Guidelines />}
        />

        {/* ROUND 1 */}
        <Route
          path="/round-1"
          element={<Round1 />}
        />

        {/* ROUND 1 RESULT */}
        <Route
          path="/round-1-result"
          element={<Round1Result />}
        />

        {/* ROUND 2 GUIDELINES */}
        <Route
          path="/round-2-guidelines"
          element={<Round2Guidelines />}
        />

        {/* ROUND 2 LANGUAGE SELECTION */}
        <Route
          path="/round-2/language"
          element={<LanguageSelection />}
        />
        <Route
  path="/round-2/coding-arena"
  element={<CodingArena />}
/>
      <Route
  path="/round-2-result"
  element={<Round2Result />}
/>
<Route
          path="/round-3-guidelines"
          element={<Round3Guidelines />}
        />
        <Route
  path="/round-3/feature-extension-guidelines"
  element={<FeatureExtension />}
/>

<Route
  path="/round-3/computer-is-lying-guidelines"
  element={<ComputerIsLying />}
/>

<Route
  path="/round-3/technical-auction-guidelines"
  element={<TechnicalAuction />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;