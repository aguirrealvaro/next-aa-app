"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/cn";

const CopyButton = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText(
      "npx create-next-app -e https://github.com/aguirrealvaro/next-aa-app"
    );
    setIsCopied((isCopied) => !isCopied);
  };

  return (
    <div className="absolute right-4">
      {isCopied ? (
        <Check size={18} className="m-2 text-green-600" />
      ) : (
        <button
          onClick={copyCommand}
          className={cn(
            "bg-neutral-950 hover:bg-neutral-800 dark:bg-neutral-50 dark:hover:bg-neutral-200",
            "rounded p-2 transition"
          )}
        >
          <Copy size={18} />
        </button>
      )}
    </div>
  );
};

export { CopyButton };
