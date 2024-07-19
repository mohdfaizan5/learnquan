import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { tableOfContext } from "../../page";

const ContentSideBar = () => {
  return (
    <aside className="w-72 h-screen border-r mt-20 ">
      <ScrollArea className="h-screen ">
        {tableOfContext.map((module, i) => (
          <div className="ml-5 text-[15px] mt-4" key={i}>
            <h5>{module.title}</h5>
            {module.concepts.length > 0 && (
              <div>
                {module.concepts.map((concept, i) => (
                  <div className="ml-5 text-sm" key={i}>- {concept.title}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </ScrollArea>
      <div className="my-20"></div>
    </aside>
  );
};

export default ContentSideBar;
