"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import confetti from "canvas-confetti";
import { GrPowerReset } from "react-icons/gr";
import React, { useState } from "react";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";
import { ArrowLeft } from "iconsax-react";
import { useRouter } from "next/navigation";

const page = () => {
  // states to check if its dropped
  const [isDropped1, setIsDropped1] = useState(false);
  const [isDropped2, setIsDropped2] = useState(false);
  const [isDropped3, setIsDropped3] = useState(false);
  const router = useRouter();

  const resetDrags = () => {
    setIsDropped1(false);
    setIsDropped2(false);
    setIsDropped3(false);
  };
  const draggable1 = (
    <Draggable id="1" key={"1"}>
      <div className="rounded-sm border  flex flex-col items-center justify-between px-1">
        <h5 className="underline"> Numbers </h5>
      </div>
    </Draggable>
  );

  const draggable2 = (
    <Draggable id="2" key={"2"}>
      <div className="rounded-sm border  flex flex-col items-center justify-between px-1">
        <h5 className="underline"> fixed quantity </h5>
      </div>
    </Draggable>
  );
  const draggable3 = (
    <Draggable id="3" key={"3"}>
      <div className="rounded-sm border  flex flex-col items-center justify-between px-1">
        <h5 className="underline"> quantified </h5>
      </div>
    </Draggable>
  );

  const handleDragEnd = (e: DragEndEvent) => {
    console.log(e);
    const { over, active } = e;
    if (over) {
      if (over.id == "droppable_1" && active.id == "draggable_1") {
        setIsDropped1(true);
      } else if (over.id == "droppable_2" && active.id == "draggable_2") {
        setIsDropped2(true);
      } else if (over.id == "droppable_3" && active.id == "draggable_3") {
        setIsDropped3(true);
      }
    }
  };

  return (
    <div className="min-h-[70vh] mt-32 flex flex-col items-center justify-center ">
      <Card className="bg-slate-100 md:w-[50vw] flex flex-col p-5 gap-2">
        <DndContext onDragEnd={handleDragEnd}>
          <section className="flex flex-wrap">
            <Droppable id="1">
              {/* first see if you its there  */}
              {isDropped1 ? (
                draggable1
              ) : (
                <div className="rounded-sm border-dashed  p-1  w-26 text-slate-600 flex flex-col items-center justify-center border border-black mx-1">
                  Drop here
                </div>
              )}
            </Droppable>
            are something that can have a particular
            <Droppable id="2">
              {isDropped2 ? (
                draggable2
              ) : (
                <div className="rounded-sm border-dashed  p-1 w-26  text-slate-600 flex flex-col items-center justify-center border border-black mx-1">
                  Drop here
                </div>
              )}
            </Droppable>{" "}
            or can be
            <Droppable id="3">
              {isDropped3 ? (
                draggable3
              ) : (
                <div className="rounded-sm border-dashed p-1 w-26 text-slate-600 flex flex-col items-center justify-center border border-black mx-1">
                  Drop here
                </div>
              )}
            </Droppable>
          </section>
          <section className="flex justify-center gap-2 my-5 py-3 border  rounded-md items-center">
            {!isDropped2 ? draggable2 : null}
            {!isDropped3 ? draggable3 : null}
            {!isDropped1 ? draggable1 : null}
          </section>
        </DndContext>
        <section className="flex items-center gap-3">
          <Button
            className="w-full"
            disabled={isDropped1 && isDropped2 && isDropped3 ? false : true}
            variant={"outline"}
            onClick={() => {
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
              });
            }}
          >
            Check
          </Button>
          <Button variant={"outline"} onClick={resetDrags} size={"lg"}>
            <GrPowerReset />
          </Button>
        </section>
      </Card>
      <div className="flex gap-10 mt-10 mb-10 ">
        <Button
          variant={"secondary"}
          size={"icon"}
          className="rounded-full p-2"
          onClick={() => {
            router.push("2");
          }}
        >
          <ArrowLeft />
        </Button>
        <Button
          className="w-72 mb-20"
          disabled={isDropped1 && isDropped2 && isDropped3 ? false : true}
          variant={"default"}
          onClick={() => {
            router.push("5");
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default page;
