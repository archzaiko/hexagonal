interface HttpRequestOptions {
  headers?: Record<string, string>;
  params?: Record<string, string>;
  body?: unknown;
}

export interface HttpClient {
  get<T>(url: string, options?: HttpRequestOptions): Promise<T>;
  post<T>(url: string, options: HttpRequestOptions): Promise<T>;
  put<T>(url: string, options: HttpRequestOptions): Promise<T>;
  delete<T>(url: string, options?: HttpRequestOptions): Promise<T>;
}
