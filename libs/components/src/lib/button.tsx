type props = {
  title: string;
};

export function Button({ title }: props) {
  return <button>{title}</button>;
}

export default Button;
