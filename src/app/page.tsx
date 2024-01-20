import { CopyButton, Wrapper } from "@/components";
import { cn } from "@/lib/cn";

const features = [
  { name: "NextJS", description: "React framework to render components on the server" },
  {
    name: "App Router",
    description: "New paradigm for building applications using React's latest features",
  },
  { name: "Typescript", description: "Enhance code quality and maintainability" },
  {
    name: "TailwindCSS",
    description: "A utility-first CSS framework for rapid UI development.",
  },
  { name: "Prettier & ESLint", description: "For clean, consistent, and error-free code" },
  { name: "Pre commit", description: "Checking linter and types on staged files" },
  { name: "Dark mode", description: "Support for light and dark mode" },
  { name: "Error Boundary", description: "To catching rendering errors" },
  { name: "Knip", description: "Find deadcode" },
  { name: "ts-reset", description: "Extremely strict TypeScript" },
  { name: "lucide-icons", description: "Beautiful and Consistent icons" },
];

export default function Home() {
  return (
    <div>
      <Wrapper>
        <div>
          <div
            className={cn(
              "flex items-center justify-between gap-4 rounded-lg border p-4",
              "bg-neutral-950  text-neutral-50",
              "dark:bg-neutral-50 dark:text-neutral-950",
              "mb-12"
            )}
          >
            <pre className="whitespace-normal">
              <code>npx create-next-app -e https://github.com/aguirrealvaro/next-aa-app</code>
            </pre>
            <CopyButton />
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            {features.map(({ name, description }) => {
              return (
                <div
                  key={name}
                  className="flex flex-col gap-4 rounded border bg-bg-secondary p-4 shadow"
                >
                  <h2 className="font-semibold">{name}</h2>
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
