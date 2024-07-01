"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { Reorder } from "framer-motion";

const page = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  return (
    <div>
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col">
          <Reorder.Group
            values={items}
            onReorder={(e) => {
              console.log(e);
              setItems(e);
            }}
          >
            {items.map((item, i) => (
              <Reorder.Item value={item} key={i}>
                <p className="flex w-full justify-between p-1 border rounded-sm  items-center px-4 bg-slate-50">
                  Card {item}
                  <CgMenuGridO />
                </p>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
