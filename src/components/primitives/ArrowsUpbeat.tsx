import Image from "next/image";

export const ArrowsUpbeat = () => {
  return (
    <Image
      src={"/assets/arrows-upbeat-green.png"}
      width={600}
      height={283}
      alt={"arrows"}
      className="fixed top-1/2 opacity-25 -z-30"
    />
  );
};
