import { useState, useEffect } from "react";

const Typewriter = ({ texts, speed = 100, delay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index < texts.length) {
      if (!isDeleting && charIndex < texts[index].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + texts[index][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else if (!isDeleting && charIndex === texts[index].length) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, speed / 2);
        return () => clearTimeout(timeout);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [charIndex, index, isDeleting, texts, speed, delay]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return <span>{displayedText}<span className={blink ? "opacity-100" : "opacity-0"}>|</span></span>;
};

export default function App() {
  return (
    <div className="">
      <Typewriter texts={["Developer", "Problem Solver", "Innovator"]} speed={75} delay={1500} />
    </div>
  );
}

