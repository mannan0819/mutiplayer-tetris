interface SquareProps {
  type: string;
}

export default function Square({ type }: SquareProps) {
  return <div className={`square ${type}`} />;
}
