import Image from "next/image";
import tbaLogoWhite from "@/lib/TBA-LOGOS/TBA-LOGO-WHITE.svg";
import tbaLogoDark from "@/lib/TBA-LOGOS/TBA-LOGO-DARK.svg";

import { cn } from "@/lib/utils";

type LogoSize = "navbar" | "loading" | "footer";

const sizeClasses: Record<LogoSize, string> = {
  navbar: "h-8 w-auto md:h-12",
  loading: "h-[26vw] w-auto md:h-[18vw]",
  footer: "h-[32vw] w-auto md:h-[26vw]",
};

interface LogoProps {
  size?: LogoSize;
  className?: string;
  priority?: boolean;
}

export default function Logo({ size = "navbar", className, priority = false }: LogoProps) {
  return (
    <div className={cn("inline-flex", sizeClasses[size])}>
      <Image
        src={tbaLogoDark}
        alt="Think Beyond Agency"
        priority={priority}
        className={cn("block h-full w-auto object-contain object-left dark:hidden", className)}
      />
      <Image
        src={tbaLogoWhite}
        alt="Think Beyond Agency"
        priority={priority}
        className={cn("hidden h-full w-auto object-contain object-left dark:block", className)}
      />
    </div>
  );
}
