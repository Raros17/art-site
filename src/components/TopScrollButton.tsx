import { useEffect, useState } from "react";

function TopScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`topScrollButton ${isVisible ? "visible" : ""}`}
      type="button"
      onClick={handleClickTop}
      aria-label="맨 위로 이동"
    >
      ↑
    </button>
  );
}

export default TopScrollButton;
