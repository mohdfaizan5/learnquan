"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { Reorder } from "framer-motion";

const page = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [items2, setItems2] = useState(["A", "B", "C", "D", "E"]);

  return (
    // <div>
    //   <Card className="w-96">
    //     <CardHeader>
    //       <CardTitle>Card Title</CardTitle>
    //     </CardHeader>
    //     <CardContent className="flex flex-col">
    //       <Reorder.Group
    //         values={items}
    //         onReorder={(e) => {
    //           console.log(e);
    //           setItems(e);
    //         }}
    //       >
    //         {items.map((item, i) => (
    //           <Reorder.Item value={item} key={i}>
    //             <p className="flex w-full justify-between p-1 border rounded-sm  items-center px-4 bg-slate-50">
    //               Card {item}
    //               <CgMenuGridO />
    //             </p>
    //           </Reorder.Item>
    //         ))}
    //       </Reorder.Group>
    //     </CardContent>
    //   </Card>
    // </div>
    <div className="flex gap-20 justify-center">
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {items.map((item) => (
          <Reorder.Item key={item} value={item}>
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <hr />
      <Reorder.Group axis="y" values={items2} onReorder={setItems2}>
        {items2.map((item) => (
          <Reorder.Item key={item} value={item}>
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default page;
