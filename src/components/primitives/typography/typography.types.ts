import { ReactNode } from "react";
import { VariantProps } from "tailwind-variants";

import { typographyRecipe } from "./typography.recipe";

export type IAs = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TypographyVariants = VariantProps<typeof typographyRecipe>;

export type ITypography<T extends IAs> = TypographyVariants & {
  as?: T;
  children?: ReactNode;
} & React.ComponentProps<T>;
