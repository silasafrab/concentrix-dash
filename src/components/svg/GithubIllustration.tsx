import * as React from "react";
import { SVGProps } from "react";

const GithubIllustration = ({
  className,
  ...props
}: SVGProps<SVGSVGElement> & { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={166}
    height={166}
    fill="currentColor" // Usando currentColor para que herde a cor do contexto
    className={className} // Aplica a classe aqui
    {...props}
  >
    <path d="M109.394 93.865c-5.959 0-10.79 6.698-10.79 14.931 0 8.251 4.831 14.949 10.79 14.949 5.96 0 10.79-6.698 10.79-14.949-.008-8.233-4.83-14.931-10.79-14.931Zm37.566-38.87c1.237-3.029 1.286-20.243-5.271-36.735 0 0-15.031 1.652-37.773 17.264-4.772-1.328-12.848-1.975-20.908-1.975-8.075 0-16.143.647-20.916 1.975C39.342 19.912 24.311 18.26 24.311 18.26c-6.549 16.492-6.483 33.706-5.262 36.736C11.346 63.362 6.64 73.413 6.64 87.126c0 59.643 49.493 60.597 61.976 60.597l14.392.017 14.376-.017c12.5 0 61.976-.954 61.976-60.598 0-13.712-4.698-23.763-12.4-32.13Zm-63.728 85.4h-.464c-31.3 0-55.685-3.727-55.685-34.155 0-7.296 2.573-14.052 8.69-19.663 10.184-9.354 27.432-4.407 46.995-4.407h.465c19.563 0 36.818-4.947 47.011 4.407 6.1 5.611 8.673 12.367 8.673 19.663 0 30.428-24.377 34.155-55.684 34.155Zm-26.618-46.53c-5.959 0-10.79 6.698-10.79 14.931 0 8.251 4.831 14.949 10.79 14.949 5.96 0 10.799-6.698 10.799-14.949 0-8.233-4.83-14.931-10.799-14.931Z" />
  </svg>
);

export default GithubIllustration;