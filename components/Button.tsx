interface IButton {
  title: string;
  variant?: string;
}

const Button = ({ title, variant }: IButton) => {
  return (
    <button className={`py-3 px-5 rounded-full ${variant}`}>{title}</button>
  );
};

export default Button;
