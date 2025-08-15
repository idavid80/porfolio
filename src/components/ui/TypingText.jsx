import React, { useState, useEffect } from "react";

export default function TypingText({ text }) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(text.substring(0, index));
      index++;
      if (index > text.length) {
        clearInterval(typingInterval);
        setShowCursor(false);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [text]);

  // Parpadeo del cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500); // 500ms
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <cite>
      {displayedText}
      <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </cite>
  );
}