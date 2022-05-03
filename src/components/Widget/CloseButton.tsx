import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button
      className="right-5 absolute text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
      title="Fechar formulário de feeback"
    >
      <X className="w-4 h-4" weight="bold" />
    </Popover.Button>
  );
}
