import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import MusicalPage from "./pages/MusicalPage";
import TopScrollButton from "./components/TopScrollButton";
import ScrollHeader from "./components/ScrollHeader";

function App() {
  return (
    <>
      <ScrollHeader key={location.pathname} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/musicals/:musicalId" element={<MusicalPage />} />
      </Routes>
      <TopScrollButton />
    </>
  );
}

export default App;
