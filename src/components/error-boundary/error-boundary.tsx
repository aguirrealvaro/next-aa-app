"use client";

import type { ReactNode } from "react";
import React from "react";
import { ErrorBoundary as ErrorBoundaryComponent } from "react-error-boundary";
import { Wrapper } from "@/components";

type ErrorFallbackProps = {
  error: Error;
};

const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  return (
    <div className="mt-8">
      <Wrapper>
        <div role="alert">
          <p>Something went wrong:</p>
          <pre className="text-red-500">{error.message}</pre>
        </div>
      </Wrapper>
    </div>
  );
};

type ErrorBoundaryProps = {
  children: ReactNode;
};

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  // eslint-disable-next-line no-console
  const logError = (error: Error) => console.log(error);

  return (
    <ErrorBoundaryComponent FallbackComponent={ErrorFallback} onError={logError}>
      {children}
    </ErrorBoundaryComponent>
  );
};

export { ErrorBoundary };
