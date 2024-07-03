"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DndContext } from "@dnd-kit/core";
import Image from "next/image";
import { GrPowerReset } from "react-icons/gr";
import React, { useState } from "react";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

const page = () => {
  // states to check if its dropped
  const [isDropped1, setIsDropped1] = useState(false);
  const [isDropped2, setIsDropped2] = useState(false);

  const resetDrags = () => {
    setIsDropped1(false);
    setIsDropped2(false);
  };
  const draggable1 = (
    <Draggable id="lex" key={"lex"}>
      <div className="rounded-sm h-32 w-20 flex flex-col items-center justify-between ">
        <h4>draggable1</h4>
        <Image src={"/robots/lex_idle.svg"} width={200} height={200} alt="" />
      </div>
    </Draggable>
  );

  const draggable2 = (
    <Draggable id="ty" key={"ty"}>
      <div className="rounded-sm h-32 w-20 flex flex-col items-center justify-between ">
        <h4>draggable2</h4>
        <Image src={"/robots/ty_idle.svg"} width={200} height={200} alt="" />
      </div>
    </Draggable>
  );
  return (
    <div className="h-screen mt-20 flex flex-col items-center justify-center">
      <Card className="bg-slate-100 w-[300px] flex flex-col p-5 gap-2">
        <DndContext
          onDragCancel={(e) => {
            // console.log(e);
          }}
          onDragEnd={(e) => {
            console.log(e);
            if (e.over && e.over.id == "droppable_first") {
              if (e.active.id == "draggable_ty") setIsDropped1(true);
              else if (e.active.id == "draggable_lex") setIsDropped2(true);

            } else if (e.over && e.over.id == "droppable_second") {
              setIsDropped2(true);
            }
          }}
        >
          <section className="flex justify-evenly">
            <Droppable id="first">
              {/* first see if you its there  */}
              {isDropped1 ? (
                draggable1
              ) : (
                <div className="rounded-sm border-dashed h-32 w-26 text-slate-600 flex flex-col items-center justify-center border border-black">
                  Droppable1
                </div>
              )}
            </Droppable>
            <Droppable id="second">
              {isDropped2 ? (
                draggable2
              ) : (
                <div className="rounded-sm border-dashed h-32 w-26 text-slate-600 flex flex-col items-center justify-center border border-black">
                  Droppable2
                </div>
              )}
            </Droppable>
          </section>
          <section className="flex justify-evenly my-5">
            {!isDropped1 ? draggable1 : null}
            {!isDropped2 ? draggable2 : null}
          </section>
        </DndContext>
        <section className="flex items-center gap-3">
          <Button className="w-full">Check</Button>
          <Button variant={"outline"} onClick={resetDrags} size={"lg"}>
            <GrPowerReset />
          </Button>
        </section>
      </Card>
    </div>
  );
};

export default page;
