interface IButton {
  title: string;
  variant?: string;
  onClick?: () => void;
}

const Button = ({ title, variant, onClick }: IButton) => {
  return (
    <button className={`py-3 px-5 rounded-full ${variant}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
