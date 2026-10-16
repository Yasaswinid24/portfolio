import { Fragment, type ElementType } from "react";

type Props = { text: string; as?: ElementType; className?: string };

/**
 * Splits a heading into letters that hop when the pointer passes over them.
 * Words stay whole so the line still wraps normally; screen readers get the plain text.
 */
export default function HopText({ text, as: Tag = "span", className = "" }: Props) {
  return (
    <Tag className={className} aria-label={text}>
      {text.split(" ").map((word, w, all) => (
        <Fragment key={`${word}-${w}`}>
          <span aria-hidden className="hop-word">
            {Array.from(word).map((ch, i) => (
              <span key={i} className="hop-char">
                {ch}
              </span>
            ))}
          </span>
          {w < all.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </Tag>
  );
}
