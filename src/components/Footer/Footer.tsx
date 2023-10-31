import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { GitHubIcon } from "../Icons/GitHubIcon";
import style from "./Footer.scss?inline";

export const Footer = component$(() => {
  useStylesScoped$(style);
  return (
    <footer class="flex border-t-[1px] border-slate-200 bg-white px-6 py-4 dark:border-slate-800  dark:bg-slate-900">
      <div class="grid w-full grid-cols-12">
        <div class="col-span-4" />
        <div class="col-span-4" />
        <div class="col-span-4 flex justify-end pr-4">
          <a
            href="https://github.com/QwikDev/RoadPlan"
            rel="noopener noreferrer"
            target="_blank"
            title="QwikDev/RoadPlan"
            aria-label="QwikDev/RoadPlan"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
});
