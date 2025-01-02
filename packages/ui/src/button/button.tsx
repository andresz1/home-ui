import { cn } from "../core";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(
        "bg-basic px-lg py-md rounded-full text-on-basic text-body-1 hover:bg-basic-hovered focus-visible:ring ring-offset-2 outline-none"
      )}
      type="button"
      {...other}
    >
      {children}
    </button>
  );
}

Button.displayName = "Button";
