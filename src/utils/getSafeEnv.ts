export function getSafeEnv(variable: string): string {
  const result = process.env[variable];
  if (!result) {
    throw new Error(`Variable ${variable} is required`);
  }
  return result;
}
