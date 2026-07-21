import Image from "next/image";
import tbaLogo from "../lib/TBA LOGOS/TBA LOGO.png";
import { cn } from "@/lib/utils";

type LogoSize = "navbar" | "loading" | "footer";

const sizeClasses: Record<LogoSize, string> = {
  navbar: "h-8 w-auto md:h-9",
  loading: "h-[13vw] w-auto md:h-[9vw]",
  footer: "h-[22vw] w-auto md:h-[16vw]",
};

interface LogoProps {
  size?: LogoSize;
  className?: string;
  priority?: boolean;
}

export default function Logo({ size = "navbar", className, priority = false }: LogoProps) {
  return (
    <Image
      src={tbaLogo}
      alt="Think Beyond Agency"
      priority={priority}
      className={cn(
        "object-contain object-left dark:brightness-0 dark:invert",
        sizeClasses[size],
        className,
      )}
    />
  );
}
