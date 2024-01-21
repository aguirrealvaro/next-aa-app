import { ExternalLink } from "lucide-react";
import { CopyButton, Wrapper } from "@/components";
import { cn } from "@/lib/cn";

type Feature = {
  name: string;
  url?: string;
  description: string;
};

const features: Feature[] = [
  {
    name: "NextJS",
    description: "React framework to render components on the server",
    url: "https://nextjs.org/",
  },
  {
    name: "App Router",
    description: "New paradigm for building applications using React's latest features",
  },
  {
    name: "Typescript",
    description: "Enhance code quality and maintainability",
  },
  {
    name: "TailwindCSS",
    description: "A utility-first CSS framework for rapid UI development.",
    url: "https://tailwindcss.com/",
  },
  { name: "Prettier & ESLint", description: "For clean, consistent, and error-free code" },
  {
    name: "Pre commit",
    description:
      "Checking linter and types on staged files before commits with husky and lint-staged",
  },
  {
    name: "Dark mode",
    description: "Support for light and dark mode",
  },
  {
    name: "Error Boundary",
    description: "To catch rendering errors",
    url: "https://www.npmjs.com/package/react-error-boundary",
  },
  { name: "Knip", description: "Find deadcode", url: "https://github.com/webpro/knip" },
  {
    name: "ts-reset",
    description: "Extremely strict TypeScript",
    url: "https://www.totaltypescript.com/ts-reset",
  },
  {
    name: "lucide-icons",
    description: "Beautiful and Consistent icons",
    url: "https://lucide.dev/guide/packages/lucide-react",
  },
];

export default function Home() {
  return (
    <div>
      <Wrapper>
        <div>
          <div
            className={cn(
              "flex items-center justify-center gap-4 rounded-lg border p-4",
              "bg-neutral-950  text-neutral-50",
              "dark:bg-neutral-50 dark:text-neutral-950",
              "relative mb-12 overflow-auto"
            )}
          >
            <pre>
              <code>npx create-next-app -e https://github.com/aguirrealvaro/next-aa-app</code>
            </pre>
            <CopyButton />
          </div>
          <div className="grid grid-cols-3 gap-4 text-center md:grid-cols-2 xs:grid-cols-1">
            {features.map(({ name, description, url }) => {
              return (
                <div
                  key={name}
                  className="flex flex-col gap-4 rounded-lg bg-bg-secondary p-4 shadow"
                >
                  <h2 className="font-semibold">
                    {url ? (
                      <a
                        href={url}
                        target="_blank"
                        className="flex items-center justify-center gap-2 hover:underline"
                      >
                        {name} <ExternalLink size={18} />
                      </a>
                    ) : (
                      name
                    )}
                  </h2>
                  <p>{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
