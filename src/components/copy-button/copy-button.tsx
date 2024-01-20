"use client";

import { Copy } from "lucide-react";

const CopyButton = () => {
  const copyCommand = () => {
    navigator.clipboard.writeText(
      "npx create-next-app -e https://github.com/aguirrealvaro/next-aa-app"
    );
  };

  return (
    <button onClick={copyCommand}>
      <Copy size={20} />
    </button>
  );
};

export { CopyButton };
