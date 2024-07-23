"use client";
import mermaid from "mermaid";
import { useEffect} from "react";

const MermaidDiagram = ({ code }: { code: string }) => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, [code]);
  return <div className="mermaid flex flex-col items-center mx-auto"  suppressHydrationWarning>{code}</div>;
};

export default MermaidDiagram;
