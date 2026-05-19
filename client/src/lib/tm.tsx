import { Fragment, type ReactNode } from "react";

export function tm(text: string): ReactNode {
  if (!text.includes("™")) return text;
  const parts = text.split("™");
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && (
        <sup className="text-[0.55em] font-normal tracking-normal align-super">™</sup>
      )}
    </Fragment>
  ));
}

export function TM() {
  return <sup className="text-[0.55em] font-normal tracking-normal align-super">™</sup>;
}
