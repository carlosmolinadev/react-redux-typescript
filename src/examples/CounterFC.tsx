import React, { ReactElement } from "react";

interface Props {
  label: string;
  count: number;
  onIncrement: () => void;
}

export default function CounterFC({
  label,
  count,
  onIncrement,
  ...restProps
}: Props): ReactElement {
  const handleIncrement = () => {
    onIncrement();
  };
  return (
    <div>
      <span>
        {label}:{count}
      </span>
      <button type="button" onClick={handleIncrement}>
        On increment
      </button>
    </div>
  );
}
