import { ThemeToggle, Wrapper } from "@/components";
import { cn } from "@/lib/cn";

export default function Home() {
  return (
    <div>
      <Wrapper>
        <div>
          <div className="mb-8 flex justify-center">
            <pre
              className={cn(
                "whitespace-normal rounded-lg border p-4",
                "bg-neutral-950  text-neutral-50",
                "dark:bg-neutral-50 dark:text-neutral-950"
              )}
            >
              <code>npx create-aa-app -e https://github.com/aguirrealvaro/next-aa-app</code>
            </pre>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-center">NextJS boilerplate with the following features</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>App Router</div>
              <div>Typescript</div>
              <div>TailwindCSS</div>
              <div>Prettier</div>
              <div>ESLint</div>
              <div>Pre commit</div>
              <div>App Router</div>
              <div className="flex items-center justify-center gap-2">
                Light and Dark mode <ThemeToggle />
              </div>
              <div>Error Boundary</div>
              <div>Knip</div>
              <div>ts-reset</div>
              <div>lucide icons</div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
