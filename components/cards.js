"use client";

import { Card } from "./card.js";
import { useEffect } from "react";
import data from "@/verbatims.json";

export function Cards() {
  return (
    <div className="cards">
      {data.records.map((d) => {
        return (
          <Card
            key={d.id}
            content={d.fields.Court}
            context={d.fields.Contexte}
          />
        );
      })}
    </div>
  );
}
