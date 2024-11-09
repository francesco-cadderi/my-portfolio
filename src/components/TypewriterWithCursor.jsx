import React, { useState } from "react";
import TypewriterText from "./TypewriterText";
import Cursor from "./Cursor";

const TypewriterWithCursor = ({ text }) => {
  const [writingFinished, setWritingFinished] = useState(false);

  const handleWritingFinished = () => {
    setWritingFinished(true);
  };

  return (
    <div style={{ position: "relative" }}>
      <TypewriterText text={text} onFinish={handleWritingFinished} />
      <Cursor visible={writingFinished} />
    </div>
  );
};

export default TypewriterWithCursor;
