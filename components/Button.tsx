interface IButton {
  title: string;
  variant?: string;
}

const Button = ({ title, variant }: IButton) => {
  return (
    <button className={`text-white py-3 px-5 rounded-3xl ${variant}`}>
      {title}
    </button>
  );
};

export default Button;
