import axios, { AxiosInstance } from "axios";
import { HttpAdapter } from "./http.adapter";

/**
 * Configuration options for Axios adapter
 */
interface AxiosAdapterOptions {
  /** Base URL for all requests */
  baseUrl: string;
  /** Default parameters (API key, language, etc.) */
  params: Record<string, string>;
}

/**
 * Concrete implementation of HTTP adapter using Axios
 * Configures an Axios instance with base URL and default parameters
 */
export class AxiosAdapter implements HttpAdapter {

  /** Axios instance configured to perform HTTP requests */
  private axiosInstance: AxiosInstance;

  /**
   * Constructor that initializes the Axios instance with the provided configuration
   * @param options - Configuration options for the adapter
   */
  constructor(options: AxiosAdapterOptions) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
      params: options.params,
    });
  }

  /**
   * Performs HTTP GET requests and returns typed data
   * @template T - Type of data expected to receive
   * @param url - Request URL
   * @param options - Additional request options
   * @returns Promise with typed data
   * @throws Error if HTTP request fails
   */
  async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url, options);
      return data;
    } catch (error) {
      throw new Error(`Error fetching get: ${url}`);
    }
  }
}