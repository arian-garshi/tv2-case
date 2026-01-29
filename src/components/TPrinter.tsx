import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  font-family: monospace;
`;

const Output = styled.pre`
  margin-top: 10px;
`;

const TPrinter = () => {
  const [size, setSize] = useState(3);

  const buildT = (size: number): string[] => {
    const center = Math.floor(size / 2);
    const rows: string[] = [];

    // Top row gets all Ts
    rows.push("T ".repeat(size).trim());

    // Stem rows get spaces + one T
    for (let row = 1; row < size; row++) {
      rows.push(" ".repeat(center * 2) + "T");
    }

    return rows;
  };

  const validSize = Math.max(3, size % 2 === 0 ? size + 1 : size);

  return (
    <Container>
      <label>
        T Size (odd, min 3):{" "}
        <input
          type="number"
          value={size}
          min={3}
          step={2}
          onChange={(e) => setSize(Number(e.target.value))}
        />
      </label>
      <Output>
        {buildT(validSize).map((row, i) => (
          <div key={i}>{row}</div>
        ))}
      </Output>
    </Container>
  );
};

export default TPrinter;
