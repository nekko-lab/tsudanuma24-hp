import { component$ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

type Heading = {
  value: string;
  description: string;
};

export default component$(({ value, description }: Heading) => {
  return (
    <div
      class={css({
        position: "relative",
      })}
    >
      <span
        class={css({
          position: "absolute",
          left: 0,
          top: 3,
          fontFamily: "heading_ja",
          fontWeight: 900,
          fontSize: "48px",
          color: "rgba(255,255,255,0)",
          zIndex: 10,
          WebkitTextStroke: "1px #5A5DFF",
        })}
      >
        {description}
      </span>
      <h1
        class={css({
          fontFamily: "heading_en",
          fontWeight: 900,
          fontSize: "64px",
          zIndex: 5,
          position: "relative",
        })}
      >
        {value}
      </h1>
      <span
        class={css({
          position: "absolute",
          left: 0,
          top: 3,
          fontFamily: "heading_ja",
          fontWeight: 900,
          fontSize: "48px",
          color: "#5A5DFF",
          zIndex: 0,
        })}
      >
        {description}
      </span>
      <span
        class={css({
          fontFamily: "barcode",
          fontSize: "20px",
          position: "relative",
          top: -3,
        })}
      >
        {value}
      </span>
    </div>
  );
});