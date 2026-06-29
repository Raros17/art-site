import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";

function ScrollHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const previousScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(false);

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    previousScrollY.current = window.scrollY;
    setIsVisible(false);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < previousScrollY.current;
      const isFarFromTop = currentScrollY > 140;

      setIsVisible(isScrollingUp && isFarFromTop);

      previousScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleBack = () => {
    navigate(-1);
  };

  if (isHomePage) {
    return null;
  }

  return (
    <header className={`scrollHeader ${isVisible ? "visible" : ""}`}>
      <button
        className="scrollHeaderBackButton"
        type="button"
        onClick={handleBack}
      >
        ← Back
      </button>

      <span className="scrollHeaderTitle">Musical Drawing Archive</span>
    </header>
  );
}

export default ScrollHeader;
