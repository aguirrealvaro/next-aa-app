import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type WrapperProps = {
  children: ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: WrapperProps) => {
  return <div className={cn("mx-auto w-4/5 max-w-6xl", className)}>{children}</div>;
};

export { Wrapper };
