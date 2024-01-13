import { ComponentChildren } from "preact";
import { useEffect, useState } from "preact/hooks";

export function Container({ children }: { children: ComponentChildren }) {
  const [useDark, setUseDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const [showIntro, setShowIntro] = useState(true);
  const [finishIntro, setFinishIntro] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowIntro(false), 1500);
    setTimeout(() => setFinishIntro(true), 2500);
  }, []);

  return (
    <div className={useDark ? "dark" : ""}>
      <div className="flex items-center justify-center w-full h-screen transition-all bg-white text-primary dark:bg-primary dark:text-white">
        <div className="w-full h-full px-12 pt-5 pb-16">
          <div
            className={`flex justify-end gap-2 transition-opacity duration-1000 ${finishIntro ? "opacity-100" : "opacity-0"}`}
          >
            <button
              className="flex items-center gap-2"
              onClick={() => setUseDark(false)}
            >
              <div
                className={`h-2 w-2 border border-primary dark:border-white ${!useDark && "bg-primary"}`}
              />
              <p>light</p>
            </button>
            <button
              className="flex items-center gap-2"
              onClick={() => setUseDark(true)}
            >
              <div
                className={`h-2 w-2 border border-primary dark:border-white ${useDark && "bg-white"}`}
              />
              <p>dark</p>
            </button>
          </div>
          <div className="relative flex w-full h-full p-5 border border-primary dark:border-white">
            <div
              className={`absolute flex h-full w-full items-center justify-center transition-opacity duration-1000 ${showIntro ? "opacity-100" : "opacity-0"} ${finishIntro ? "hidden" : ""}`}
            >
              Adrian Rampy: Portfolio
            </div>
            <div
              className={`transition-opacity duration-1000 ${finishIntro ? "opacity-100" : "opacity-0"}`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
