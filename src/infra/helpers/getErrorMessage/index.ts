import { AxiosError } from 'axios';

export function getErrorMessage(
  err: unknown,
  fallback = 'Erro inesperado'
): string {

  console.log(err)
  if (typeof err === 'string') {
    return err;
  }

  if (err instanceof AxiosError) {
    const data = err.response?.data;

    if (data?.code) return String(data.code);

    if (data?.message) {
      if (Array.isArray(data.message)) return data.message[0];
      return String(data.message);
    }

    return err.message || fallback;
  }

  if (err instanceof Error) {
    return err.message || fallback;
  }

  // Último caso
  if (err && typeof err === 'object' && 'message' in err) {
    return String(err.message);
  }

  return fallback;
}