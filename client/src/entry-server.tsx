import React from "react";
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

type NavigateFn = (to: string) => void;
type LocationHook = () => readonly [string, NavigateFn];

function createStaticLocationHook(url: string): LocationHook {
  return () => [url, () => {}] as const;
}

export function render(url: string) {
  const hook = createStaticLocationHook(url);
  return renderToString(
    <Router hook={hook}>
      <App />
    </Router>
  );
}

