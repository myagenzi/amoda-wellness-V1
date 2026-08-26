import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Field({
  label,
  error,
  children,
  hint,
}: {
  label: string;
  error?: string | undefined;
  children: ReactNode;
  hint?: string | undefined;
}) {
  return (
    <label className="block">
      <span className="type-label text-leaf">{label}</span>
      <span className="mt-2 block">{children}</span>
      {hint && !error ? (
        <span className="type-caption mt-1.5 block text-muted-foreground">{hint}</span>
      ) : null}
      {error ? (
        <span role="alert" className="type-caption mt-1.5 block text-destructive">
          {error}
        </span>
      ) : null}
    </label>
  );
}

const base =
  "w-full rounded-lg border bg-card px-4 py-3 font-body text-[1rem] text-ink placeholder:text-muted-foreground transition-colors duration-300 focus:border-leaf focus:outline-none";

export function TextInput({
  invalid,
  className,
  ...rest
}: React.ComponentProps<"input"> & { invalid?: boolean }) {
  return (
    <input
      className={cn(base, invalid ? "border-destructive" : "hairline", className)}
      {...rest}
    />
  );
}

export function TextArea({
  invalid,
  className,
  ...rest
}: React.ComponentProps<"textarea"> & { invalid?: boolean }) {
  return (
    <textarea
      rows={5}
      className={cn(base, "resize-y", invalid ? "border-destructive" : "hairline", className)}
      {...rest}
    />
  );
}

export function SelectInput({
  invalid,
  className,
  children,
  ...rest
}: React.ComponentProps<"select"> & { invalid?: boolean }) {
  return (
    <select
      className={cn(base, "appearance-none", invalid ? "border-destructive" : "hairline", className)}
      {...rest}
    >
      {children}
    </select>
  );
}

export function FormSuccess({
  title,
  body,
  onReset,
}: {
  title: string;
  body: string;
  onReset?: () => void;
}) {
  return (
    <div className="emboss px-6 py-8 text-center" role="status">
      <span className="mx-auto mb-4 block size-1.5 rounded-full bg-gold" aria-hidden="true" />
      <h3 className="type-h3 text-ink">{title}</h3>
      <p className="mx-auto mt-3 max-w-[46ch] text-ink/75">{body}</p>
      {onReset ? (
        <button
          type="button"
          onClick={onReset}
          className="type-label mt-6 text-leaf underline decoration-[var(--hairline)] underline-offset-[6px]"
        >
          Send another
        </button>
      ) : null}
    </div>
  );
}
