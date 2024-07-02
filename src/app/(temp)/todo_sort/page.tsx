"use client";
import { Button } from "@/components/ui/button";
import { closestCorners, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";

const page = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Go to Gym" },
    { id: 2, title: "Complete MDX" },
    { id: 3, title: "Learn TS" },
  ]);
  const handleDrag = (event: any) => {
    const { active, over } = event;
    // console.log(event);
    // console.log(active);
    // console.log(over);

    // basically if user drag and drops at the same position just do noting
    if (active.id === over.id) return;

    // helper func
    const getTaskPosition = (id: any) =>
      tasks.findIndex((task) => task.id == id);

    setTasks((tasks: any) => {
      const originalPosition = getTaskPosition(active.id);
      console.log(originalPosition);
      const newPosition = getTaskPosition(over.id);

      return arrayMove(tasks, originalPosition, newPosition);
    });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1>Todos☑</h1>
      <DndContext onDragEnd={handleDrag} collisionDetection={closestCorners}>
        <section className="w-96 border rounded-sm p-5 my-5 min-h-32 flex flex-col gap-1">
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
            {tasks.map((task) => (
              <EachTodo todo={task.title} id={task.id} key={task.id} />
            ))}
          </SortableContext>
        </section>
      </DndContext>
      <Button
        onClick={() => {
          if (tasks[0].id === 3 && tasks[1].id === 2 && tasks[2].id === 1) {
            console.log("your right ✔");
          } else {
            console.log("your wrong❌");
          }
        }}
      >
        Check order
      </Button>
    </div>
  );
};

export default page;

const EachTodo = ({ todo, id }: { todo: string; id: any }) => {
  const { listeners, attributes, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="flex items-center justify-between bg-slate-200 rounded-sm p-1 px-3 hover:bg-slate-300"
    >
      {/* {todo} */}
      {id}
      <CgMenuGridO />
    </div>
  );
};