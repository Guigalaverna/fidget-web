import { Camera, Trash } from "phosphor-react";

import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../../../../Loading";

interface ScreenshotButtonProps {
  onScreenshotTook: (imageInBase64: string) => void;
  screenshot?: string | null;
}

export function ScreenshotButton({
  onScreenshotTook,
  screenshot,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setisTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setisTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64Image = canvas.toDataURL("image/png");

    onScreenshotTook(base64Image);
    setisTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end overflow-clip text-zinc-400 hover:text-zinc-100 transition-colors duration-200 focus:outline-none"
        onClick={() => onScreenshotTook("")}
        style={{
          backgroundImage: `url(${screenshot})`,
        }}
      >
        <Trash className="w-4 h-4 absolute" weight="bold" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="bg-zinc-800 p-2 rounded-md border-transparent hover:bg-zinc-700 transition-colors duration-200 focus:otuline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 focus:ring-1 focus:outline-none"
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6 text-zinc-100" />
      )}
    </button>
  );
}
