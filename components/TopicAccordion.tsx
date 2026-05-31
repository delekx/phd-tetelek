"use client";

import type { Topic, TopicBlock } from "@/lib/types";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type TopicAccordionProps = {
  topic: Topic;
  isActive?: boolean;
};

function TopicBlockView({ block }: { block: TopicBlock }) {
  if (block.type === "paragraph") {
    return (
      <p className="text-sm leading-relaxed text-card-foreground">
        {block.text}
      </p>
    );
  }

  if (block.type === "definition") {
    return (
      <div className="rounded-lg border border-border bg-background px-3 py-2">
        <h4 className="mb-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
          {block.title}
        </h4>
        <p className="text-sm leading-relaxed text-card-foreground">
          {block.text}
        </p>
      </div>
    );
  }

  if (block.type === "bullets") {
    return (
      <div>
        {block.title ? (
          <h4 className="mb-1.5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            {block.title}
          </h4>
        ) : null}

        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-card-foreground">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.type === "formula") {
    return (
      <div className="rounded-lg border border-border bg-background px-3 py-2">
        {block.title ? (
          <h4 className="mb-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            {block.title}
          </h4>
        ) : null}

        <p className="font-mono text-sm font-semibold text-primary">
          {block.formula}
        </p>

        {block.explanation ? (
          <p className="mt-1 text-sm leading-relaxed text-card-foreground">
            {block.explanation}
          </p>
        ) : null}
      </div>
    );
  }

  if (block.type === "compare") {
    return (
      <div>
        {block.title ? (
          <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            {block.title}
          </h4>
        ) : null}

        <div className="space-y-2">
          {block.items.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-border bg-background px-3 py-2"
            >
              <p className="text-sm font-semibold text-card-foreground">
                {item.label}
              </p>
              <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === "highlight") {
    return (
      <p className="border-l-4 border-primary bg-background px-3 py-2 text-sm font-medium leading-relaxed text-foreground">
        {block.text}
      </p>
    );
  }

  return null;
}

export function TopicAccordion({ topic, isActive }: TopicAccordionProps) {
  return (
    <AccordionItem
      id={topic.id}
      value={topic.id}
      className={`scroll-mt-10 overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300 ${
        isActive
          ? "border-primary/60 ring-2 ring-primary/20"
          : "border-border"
      }`}
    >
      <AccordionTrigger className="px-4 py-3 hover:no-underline">
        <div className="pr-4 text-left">
          <h3 className="text-sm font-semibold leading-snug text-card-foreground md:text-base">
            {topic.number}. {topic.title}
          </h3>

          <p className="mt-1 text-sm leading-snug text-muted-foreground">
            {topic.summary}
          </p>
        </div>
      </AccordionTrigger>

      <AccordionContent>
        <div className="border-t border-border bg-muted/40 px-4 pb-4 pt-3">
          <div className="space-y-3">
            {topic.blocks.map((block, index) => (
              <TopicBlockView key={index} block={block} />
            ))}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}