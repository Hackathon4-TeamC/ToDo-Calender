import React, { useState } from "react";
import SimpleMde from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export const MarkdownEditor = () => {
  const [markdownValue, setMarkdownValue] = useState("");

  const onChange = (value: any) => {
    setMarkdownValue(value);
  };

  return <SimpleMde value={markdownValue} onChange={onChange} />;
};
