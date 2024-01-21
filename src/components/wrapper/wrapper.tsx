import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type WrapperProps = {
  children: ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: WrapperProps) => {
  return <div className={cn("mx-auto w-4/5 max-w-6xl xs:w-11/12", className)}>{children}</div>;
};

export { Wrapper };
