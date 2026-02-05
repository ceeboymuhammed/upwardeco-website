import type { ReactNode } from "react";

export default function Section({
  title,
  subtitle,
  children,
  variant = "default",
}: {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  variant?: "default" | "muted";
}) {
  return (
    <section className={variant === "muted" ? "bg-zinc-50 py-16 sm:py-20" : "py-16 sm:py-20"}>
      <div className="container-px">
        {(title || subtitle) && (
          <div className="max-w-3xl">
            {title ? (
              <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
            ) : null}
            {subtitle ? <p className="mt-3 text-zinc-600">{subtitle}</p> : null}
          </div>
        )}
        <div className={title || subtitle ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}
