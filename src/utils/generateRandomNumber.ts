export function generateRandomNumber(): string {
  return Math.random().toString().split("0.")[1];
}
