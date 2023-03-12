import { useState } from "react";
import "./App.scss";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";

const ScrollToUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <>
      <div className="scroll-to-up" onClick={scrollToUp}>
        <KeyboardControlKeyIcon fontSize="large" />
      </div>
    </>
  );
};

export default ScrollToUp;
