import Image from "next/image";

export const Logo = () => {
  return (
    <div className="h-16 max-w-full flex justify-center items-center">
      <Image
        src="/assets/logo.png"
        alt="logo"
        width={323}
        height={50}
        priority
        className="w-full h-auto"
      />
    </div>
  );
};
