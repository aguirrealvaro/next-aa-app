import { FunctionComponent, ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

export const Wrapper: FunctionComponent<WrapperProps> = ({ children }) => {
  return <div className="mx-auto w-4/5 max-w-6xl">{children}</div>;
};
