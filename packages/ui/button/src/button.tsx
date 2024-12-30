export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button
      className="bg-support px-lg py-md rounded-full text-on-main t text-body-1 hover:bg-support-hovered focus-visible:ring ring-offset-2 outline-none"
      type="button"
      {...other}
    >
      {children}
    </button>
  );
}

Button.displayName = "Button";
