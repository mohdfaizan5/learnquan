import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsQuestion } from "react-icons/bs";
import { TbPointerQuestion } from "react-icons/tb";

const KnowMoreCard = ({ word, meaning }: { word: string; meaning: string }) => {
  return (
    <HoverCard>
      <HoverCardTrigger className=" underline decoration-primary px-1  items-center inline-flex">
        {word}
        <TbPointerQuestion className="inline size-4" />
      </HoverCardTrigger>
      <HoverCardContent className="p-2 text-sm px-3">
        <b className="capitalize">{word}</b> — {meaning}
      </HoverCardContent>
    </HoverCard>
  );
};

export default KnowMoreCard;
