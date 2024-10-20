import { Heart } from "lucide-react";
import Link from "next/link";
import { Typography } from "../primitives/typography/typography";

export const Footer = () => {
  return (
    <footer>
      <Link
        href={"https://silasafra.com"}
        className=" text-center flex justify-center items-center gap-1 py-6 "
        target="_blank"
      >
        <Typography as="p" type="body-xs">
          Feito com por
        </Typography>
        <Heart className="size-4" />
        <Typography as="span" className="font-bold">
          Silas Afra
        </Typography>
      </Link>
    </footer>
  );
};
