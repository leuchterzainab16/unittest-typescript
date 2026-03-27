export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiply(faktorA: number, faktorB: number): number {
  return faktorA * faktorB;
}

export function division(divident: number, divisor: number): number {
  if (divisor === 0) {
    throw new Error("Division by zero is not allowed");
  }

  return divident / divisor;
}