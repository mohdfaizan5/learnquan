"use client";
import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { Button } from "@/components/ui/button";

export function Draggable(props: any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <Button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </Button>
  );
}
