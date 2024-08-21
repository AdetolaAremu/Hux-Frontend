import { ValidationError } from "yup";

export function handleValidationErrors<T>(
  error: unknown
): Partial<Record<keyof T, string>> {
  const validationErrors: Partial<Record<keyof T, string>> = {};

  if (error instanceof ValidationError) {
    error.inner.forEach((err) => {
      if (err.path) {
        validationErrors[err.path as keyof T] = err.message;
      }
    });
  }

  return validationErrors;
}
