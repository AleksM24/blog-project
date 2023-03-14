import "./App.scss";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";

const ScrollToUp = () => {
  const scrollToUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="scroll-to-up" onClick={scrollToUp}>
        <KeyboardControlKeyIcon fontSize="large" />
      </div>
    </>
  );
};

export default ScrollToUp;
