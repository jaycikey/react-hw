import clsx from "clsx";

export const className = clsx(
    "first",
    10,
    undefined && "second",
    true && "third",
    false ? "fourth" : "fifth"
);
