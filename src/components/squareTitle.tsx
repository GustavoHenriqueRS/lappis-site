interface SquareTitleProps {
  title: string;
  color: string;
  ref?: React.Ref<HTMLDivElement>;
}

export default function SquareTitle({ title, color, ref }: SquareTitleProps) {
  return (
    <div
      ref={ref}
      className={`px-4 sm:px-6 py-3 sm:py-4 bg-${color} rounded-xl flex items-center font-orbitron text-white absolute left-4 sm:left-8 mt-6 sm:mt-8`}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl">{title}</h1>
    </div>
  );
}
