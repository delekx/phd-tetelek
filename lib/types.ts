export type TopicGroupName =
  | "I. Epidemiológia és Kutatásmódszertan"
  | "VII. Sport- és Egészségtudomány";

export type TopicBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "definition";
      title: string;
      text: string;
    }
  | {
      type: "bullets";
      title?: string;
      items: string[];
    }
  | {
      type: "formula";
      title?: string;
      formula: string;
      explanation?: string;
    }
  | {
      type: "compare";
      title?: string;
      items: {
        label: string;
        text: string;
      }[];
    }
  | {
      type: "highlight";
      text: string;
    };

export type Topic = {
  id: string;
  group: TopicGroupName;
  number: number;
  title: string;
  summary: string;
  blocks: TopicBlock[];
};