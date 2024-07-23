import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const { isOver, setNodeRef } = useDroppable({
    id: `droppable_${id}`,
  });
  const style = {
    color: isOver ? "green" : undefined,
    transform: isOver ? "scale(1.1)" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}
