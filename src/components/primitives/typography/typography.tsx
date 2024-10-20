import React from "react";

import { clsx } from "clsx";

import { typographyRecipe } from "./typography.recipe";
import { IAs, ITypography } from "./typography.types";

const Typography = <T extends IAs>({
  as = "span",
  children,
  className,
  ...props
}: ITypography<T | "span">) => {
  return React.createElement(
    as,
    {
      className: clsx(typographyRecipe({ type: props.type, className })),
      ...props,
    },
    children
  );
};

Typography.displayName = "Typography";

export { Typography, type ITypography };
