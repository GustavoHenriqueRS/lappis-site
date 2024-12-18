interface SquareTitleProps {
  title: string;
  color: string;
  ref?: React.Ref<HTMLDivElement>;
}

export default function SquareTitle({ title, color, ref }: SquareTitleProps) {
  return (
    <div
      ref={ref}
      className={`px-4 py-8 bg-${color} rounded-xl h-4 flex items-center font-orbitron text-white absolute left-8 mt-8`}
    >
      <h1 className="text-4xl">{title}</h1>
    </div>
  );
}
