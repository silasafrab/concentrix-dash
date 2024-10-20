import { tv } from "tailwind-variants";

export const typographyRecipe = tv({
  base: "inline-block",
  variants: {
    type: {
      // Título H1 (tamanho dinâmico para cada dispositivo)
      "heading-l":
        "text-[2.5rem] leading-[1.2] font-[800] tracking-[0.04rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] lg:leading-[normal]",

      // Título H2 (tamanho dinâmico para cada dispositivo)
      "title-l":
        "text-[2.5rem] leading-[1.2] font-[700] tracking-[0.01rem] sm:text-[2.875rem] md:text-[3.4375rem] lg:text-[4rem] lg:leading-[normal]",

      // Subtítulo (tamanho dinâmico para cada dispositivo)
      "subtitle-m":
        "text-[1.25rem] leading-[1.5rem] font-[600] tracking-[0.015rem] sm:text-[1.375rem] md:text-[1.5rem] lg:text-[1.625rem] lg:leading-[1.75rem]",

      // Body Large (tamanho dinâmico para cada dispositivo)
      "body-l":
        "text-[1rem] leading-[1.5rem] font-[400] tracking-[0.0125rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] lg:leading-[1.875rem]",

      // Body Small (tamanho dinâmico para cada dispositivo)
      "body-xs":
        "text-[0.5rem] leading-[1.2] font-[600] tracking-[0.00625rem] sm:text-[0.625rem] md:text-[0.75rem] lg:text-[0.875rem] lg:leading-[1.5rem]",

      // Body Extra Small (tamanho dinâmico para cada dispositivo)
      "label-xs":
        "text-[0.25rem] leading-[1] font-[600] tracking-[0.00375rem] sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] lg:leading-[1.2]",
    },
  },
  defaultVariants: {},
  compoundVariants: [],
});
