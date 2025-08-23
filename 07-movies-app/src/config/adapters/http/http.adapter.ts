/**
 * Abstract class that defines the contract for HTTP adapters
 * Enables dependency injection and facilitates testing
 */
export abstract class HttpAdapter {
  
  /**
   * Generic method to perform HTTP GET requests
   * @template T - Type of data expected to receive
   * @param url - Request URL
   * @param options - Additional request options
   * @returns Promise with typed data
   */
  abstract get<T>(url: string, options?: Record<string, unknown>): Promise<T>;

}