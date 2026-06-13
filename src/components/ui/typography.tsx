import { cn } from "@/lib/utils";
import React from "react";

interface TypographyProps {
  className?: string;
  children: string | React.ReactNode;
}

export const H1 = ({ className, children }: TypographyProps) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ className, children }: TypographyProps) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ className, children }: TypographyProps) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ className, children }: TypographyProps) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </h4>
  );
};

export const P = ({ className, children }: TypographyProps) => {
  return (
    <p
      className={cn(
        "text-sm sm:text-base leading-7 [&:not(:first-child)]:mt-4",
        className,
      )}
    >
      {children}
    </p>
  );
};

export const Blockquote = ({ className, children }: TypographyProps) => {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  );
};

export const InlineCode = ({ className, children }: TypographyProps) => {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
    >
      {children}
    </code>
  );
};

export const Lead = ({ className, children }: TypographyProps) => {
  return (
    <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>
  );
};

export const Large = ({ className, children }: TypographyProps) => {
  return (
    <div className={cn("text-lg font-semibold", className)}>{children}</div>
  );
};

export const Medium = ({ className, children }: TypographyProps) => {
  return (
    <div className={cn("text-base font-medium leading-none", className)}>
      {children}
    </div>
  );
};

export const Small = ({ className, children }: TypographyProps) => {
  return (
    <div
      className={cn("text-xs sm:text-sm font-medium leading-none", className)}
    >
      {children}
    </div>
  );
};

export const Muted = ({ className, children }: TypographyProps) => {
  return (
    <p className={cn("text-muted-foreground text-xs sm:text-sm", className)}>
      {children}
    </p>
  );
};

export const Strong = ({ className, children }: TypographyProps) => {
  return <strong className={cn("font-bold", className)}>{children}</strong>;
};

const Typography = {
  H1,
  H2,
  H3,
  H4,
  P,
  Blockquote,
  InlineCode,
  Lead,
  Large,
  Medium,
  Small,
  Muted,
  Strong,
};

export default Typography;
