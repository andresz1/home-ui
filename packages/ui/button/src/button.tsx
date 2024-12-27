export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button
      className="bg-main px-lg py-md rounded-full text-on-main text-body-1 hover:bg-main-hovered focus-visible:ring ring-offset-2 outline-none"
      type="button"
      {...other}
    >
      {children}
    </button>
  );
}

Button.displayName = "Button";
