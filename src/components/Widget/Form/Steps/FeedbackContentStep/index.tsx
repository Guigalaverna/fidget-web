import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { feedbackTypes } from "../..";
import { api } from "../../../../../lib/api";
import { Loading } from "../../../../Loading";
import { CloseButton } from "../../../CloseButton";
import { ScreenshotButton } from "./ScreenshotButton";

interface FeedbackContentType {
  selectedType: "bug" | "idea" | "other";
  onFeedbackRestart: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  selectedType,
  onFeedbackRestart,
  onFeedbackSent,
}: FeedbackContentType) {
  const [screenshot, setScreenshot] = useState<string | null>();
  const [comment, setComment] = useState<string>("");
  const [isSendingFeedback, setSendingFeedback] = useState(false);

  function handleSetScreenshot(imageInBase64: string) {
    setScreenshot(imageInBase64);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSendingFeedback(true);
    await api.post("feedback/create", {
      type: selectedType,
      comment,
      screenshot,
    });

    setSendingFeedback(false);

    onFeedbackSent();
  }

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

      <form className="my-4 w-full" onSubmit={handleSubmit}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder:text-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-x-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo"
          value={comment!}
          onChange={e => setComment(e.target.value)}
          required
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={handleSetScreenshot}
          />

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 transition-colors duration-200 focus:otuline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 focus:ring-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            disabled={comment.trim().length === 0 || isSendingFeedback}
          >
            {isSendingFeedback ? <Loading /> : "Enviar feedback"}
          </button>
        </footer>
      </form>
    </>
  );
}
