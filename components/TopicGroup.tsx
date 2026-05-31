"use client";

import type { Topic, TopicGroupName } from "@/lib/types";
import { Accordion } from "@/components/ui/accordion";
import { TopicAccordion } from "@/components/TopicAccordion";

type TopicGroupProps = {
  title: TopicGroupName;
  topics: Topic[];
  openTopicIds: string[];
  onOpenTopicIds: (ids: string[]) => void;
  activeTopicId?: string;
};

export function TopicGroup({
  title,
  topics,
  openTopicIds,
  onOpenTopicIds,
  activeTopicId,
}: TopicGroupProps) {
  if (topics.length === 0) return null;

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold tracking-tight text-foreground">
        {title}
      </h2>

      <Accordion
        type="multiple"
        value={openTopicIds}
        onValueChange={onOpenTopicIds}
        className="space-y-3"
      >
        {topics.map((topic) => (
          <TopicAccordion
            key={topic.id}
            topic={topic}
            isActive={activeTopicId === topic.id}
          />
        ))}
      </Accordion>
    </section>
  );
}