export class CustomError extends Error {}
export class AnotherError extends Error {}

export function throwBasedOnInput(input: string) {
  if (input === 'custom') {
    throw new CustomError('This is a custom error');
  } else if (input === 'another') {
    throw new AnotherError('This is another error');
  } else {
    throw new Error('Generic error');
  }
}
