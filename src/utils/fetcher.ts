const API_URL = process.env.NEXT_PUBLIC_API_URL;

export class FetcherError extends Error {
  status?: number;
  constructor(
    public message: string,
    public response?: Response
  ) {
    super(message);

    this.name = 'FetcherError';
    this.status = response?.status;
  }
}

export const fetcher = async <TData>(
  url: string,
  options?: RequestInit
): Promise<TData> => {
  let response = {} as Response;

  try {
    const input = url.startsWith('http') ? url : API_URL + url;

    response = await fetch(input, options);

    if (response.status === 204) {
      return Promise.resolve(null as TData);
    }

    if (response.status === 401) {
      const message = 'Not authorized';

      throw new FetcherError(message || 'An unexpected error occurred');
    }

    if (!response.ok) {
      const message = await response.text();

      throw new FetcherError(message || 'An unexpected error occurred');
    }

    return response.json();
  } catch (error) {
    const message = error instanceof Error ? error.message : (error as string);

    return Promise.reject(new FetcherError(message, response));
  }
};
