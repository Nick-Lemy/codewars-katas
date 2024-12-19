let rgb = (r, g, b) =>
  [r, g, b]
    .map((r) => (r < 0 ? 0 : r > 255 ? 255 : r))
    .map((num) =>
      `${num.toString(16)}`.length === 2
        ? `${num.toString(16)}`
        : "0".repeat(2 - `${num.toString(16)}`.length) + `${num.toString(16)}`
    )
    .reduce((acc, num) => acc + num)
    .toUpperCase();
