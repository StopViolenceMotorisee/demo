"use client";

import { Card } from "./card.js";
import { useState } from "react";
import data from "@/verbatims.json";

export function Cards() {
  const [index, setIndex] = useState(0);

  function scroll(update) {
    const nv = update(index);
    setIndex(nv);
    const el = document.getElementById(`card_${nv}`);
    el.scrollIntoView({ block: "nearest", inline: "center" });
  }

  return (
    <div>
      <div className="cards">
        {data.records.map((d, i) => {
          return (
            <Card
              key={d.id}
              id={`card_${i}`}
              content={d.fields.Court}
              context={d.fields.Contexte}
            />
          );
        })}
      </div>
      <div className="card-buttons">
        <button
          className="button"
          onClick={() => scroll((i) => i - 1)}
          disabled={index == 0}
        >
          &lt;&lt;
        </button>
        <button
          className="button"
          onClick={() => scroll((i) => i + 1)}
          disabled={index == data.records.length - 1}
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
}
