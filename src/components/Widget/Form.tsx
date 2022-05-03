import { CloseButton } from "./CloseButton";

export function WidgetForm() {
  return (
    <div className="bg-zinc-9 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum
        quod debitis! Ratione magnam quibusdam vero quo ducimus aliquid aliquam
        neque blanditiis repellat? Aperiam, ullam! Veniam magni fugiat laborum
        labore.
      </p>

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
