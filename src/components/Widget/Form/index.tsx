import { CloseButton } from "../CloseButton";

import Bug from "../../../assets/bug.svg";
import Idea from "../../../assets/idea.svg";
import Thought from "../../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export type FeedbackType = keyof typeof feedbackTypes;

export const feedbackTypes = {
  bug: {
    title: "Problema",
    image: {
      source: Bug,
      alt: "Inseto relacionado a um problema",
    },
  },

  idea: {
    title: "Ideia",
    image: {
      source: Idea,
      alt: "Uma lâmpada relacionada a uma ideia",
    },
  },

  other: {
    title: "Outro",
    image: {
      source: Thought,
      alt: "Um balão relacionado a outro tipo de feeback",
    },
  },
};

export function WidgetForm() {
  const [selectedFeebackType, setSelectedFeedbackType] =
    useState<FeedbackType | null>();

  function handleRestartFeedback() {
    setSelectedFeedbackType(null);
  }

  return (
    <div className="bg-zinc-9 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!selectedFeebackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setSelectedFeedbackType} />
      ) : (
        <FeedbackContentStep
          onFeedbackRestart={handleRestartFeedback}
          selectedType={selectedFeebackType}
        />
      )}

      <footer className="text-neutral-400">
        Feito com <span>❤</span> por{" "}
        <a
          href="https://github.com/Guigalaverna/"
          target="_blank"
          className="underline underline-offset-2"
        >
          Guilherme Galaverna
        </a>
      </footer>
    </div>
  );
}
