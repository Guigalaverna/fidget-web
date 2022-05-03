import { ArrowLeft, Camera } from "phosphor-react";
import { feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentType {
  selectedType: "bug" | "idea" | "other";
  onFeedbackRestart: () => void;
}

export function FeedbackContentStep({
  selectedType,
  onFeedbackRestart,
}: FeedbackContentType) {
  return (
    <>
      <header className="flex items-center">
        <button
          type="button"
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
          onClick={onFeedbackRestart}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypes[selectedType].image.source}
            alt={feedbackTypes[selectedType].image.alt}
            className="w-6 h-6"
          />
          {feedbackTypes[selectedType].title}
        </span>
        <CloseButton />
      </header>

      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder:text-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-x-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo"
          required
        />
        <footer className="flex gap-2 mt-2">
          <button
            type="button"
            className="bg-zinc-800 p-2 rounded-md border-transparent hover:bg-zinc-700 transition-colors duration-200 focus:otuline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 focus:ring-1 focus:outline-none"
          >
            <Camera className="w-6 h-6 text-zinc-100" />
          </button>

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 transition-colors duration-200 focus:otuline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 focus:ring-1 focus:outline-none"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
