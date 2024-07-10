type props = {
  title: string;
};

export function Button({ title }: props) {
  return <button style={{ color: 'red' }}>{title}</button>;
}

export default Button;
