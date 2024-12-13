interface SquareTitleProps {
  title: string;
  color: string;
}

export default function SquareTitle({ title, color }: SquareTitleProps) {
  return (
    <div
      className={`px-4 py-8 bg-${color} rounded-xl h-4 flex items-center font-orbitron text-white absolute left-8 mt-8`}
    >
      <h1 className="text-4xl">{title}</h1>
    </div>
  );
}
