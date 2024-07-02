"use client"
import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props:any) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };
  
  
  return (
    <div className={`border w-52 h-40 flex flex-col items-center justify-center border-dashed ${isOver&& "border-black"}`} ref={setNodeRef}  style={style}>
      {props.children}
    </div>
  );
}