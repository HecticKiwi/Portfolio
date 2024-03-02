import { ReactNode } from "react";
import { cn } from "../utils/cn";

const LinkButton = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <>
      <a
        className={cn(
          "flex items-center gap-2 rounded-md border border-neutral-600 px-3 py-2 text-lg transition hover:bg-neutral-600",
          className,
        )}
        href={href}
        target="_blank"
      >
        {children}
      </a>
    </>
  );
};

export default LinkButton;
