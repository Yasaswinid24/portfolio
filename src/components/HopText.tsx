import { Fragment } from "react";

type Props = { text: string };

/**
 * Letters that hop when the pointer passes over them. Words stay whole so the line wraps
 * normally. The visible letters are hidden from screen readers, which get the plain text instead.
 */
export default function HopText({ text }: Props) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {text.split(" ").map((word, w, all) => (
          <Fragment key={`${word}-${w}`}>
            <span className="hop-word">
              {Array.from(word).map((ch, i) => (
                <span key={i} className="hop-char">
                  {ch}
                </span>
              ))}
            </span>
            {w < all.length - 1 ? " " : ""}
          </Fragment>
        ))}
      </span>
    </>
  );
}
