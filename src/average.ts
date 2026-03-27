export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate mean of empty array");
  }

  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }

  const mean: number = sum / numbers.length;
  return mean;
}

export function median(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate median of empty array");
  }

  // Sort the array in ascending order
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    // Even number of elements
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    // Odd number of elements
    return sorted[mid];
  }
}