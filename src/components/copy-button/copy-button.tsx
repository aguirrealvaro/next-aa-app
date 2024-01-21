"use client";

import { Copy } from "lucide-react";

const CopyButton = () => {
  const copyCommand = () => {
    navigator.clipboard.writeText(
      "npx create-next-app -e https://github.com/aguirrealvaro/next-aa-app"
    );
  };

  return (
    <button
      onClick={copyCommand}
      className="rounded bg-neutral-950 p-2 transition hover:bg-neutral-800 dark:bg-neutral-50 dark:hover:bg-neutral-200"
    >
      <Copy size={18} />
    </button>
  );
};

export { CopyButton };
