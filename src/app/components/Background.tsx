import Image from "next/image";
import { ReactNode } from "react";

export default function Background({
  image,
  children,
}: {
  image: string;
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <Image
        src={image}
        alt="Background"
        fill
        priority
        className="object-cover brightness-50"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
