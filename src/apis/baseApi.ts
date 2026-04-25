import { config } from "@/config";
import { loggerUtils } from "@/utils/logger";

const API_BASE_URL = config.apiBaseUrl;

type ApiError = Error & {
  status?: number;
  statusText?: string;
  url?: string;
  method?: string;
};

type ApiConfig = {
  resourceName: string;
  baseUrl?: string;
};

const createApiClient = (customConfig: ApiConfig) => {
  const baseUrl = customConfig.baseUrl ?? API_BASE_URL;
  // for testing purposes:
  // const baseUrl =
  //   "https://hz05s8ymp9.execute-api.us-west-2.amazonaws.com/test";
  const resourceName = customConfig.resourceName;

  const get = async <T>(
    endpoint: string = "",
    options: RequestInit = {},
  ): Promise<T> => {
    const url = `${baseUrl}${resourceName}${endpoint}`;
    const startTime = performance.now();

    loggerUtils.http(`Starting GET request to ${url}`);

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        ...options,
      });

      const duration = Math.round(performance.now() - startTime);

      if (!response.ok) {
        const error = new Error(
          `Failed to fetch ${resourceName}: ${response.statusText}`,
        ) as ApiError;
        error.status = response.status;
        error.statusText = response.statusText;
        error.url = url;
        error.method = "GET";

        loggerUtils.apiCall("GET", url, response.status, duration);
        loggerUtils.error(`GET ${url} failed:`, {
          status: response.status,
          statusText: response.statusText,
          duration: `${duration}ms`,
        });

        throw error;
      }

      const data = await response.json();
      loggerUtils.apiCall("GET", url, response.status, duration);
      loggerUtils.debug(`GET ${url} successful:`, {
        status: response.status,
        duration: `${duration}ms`,
        dataLength: Array.isArray(data) ? data.length : "object",
      });

      return data;
    } catch (error) {
      const duration = Math.round(performance.now() - startTime);
      loggerUtils.error(`GET ${url} failed:`, error, {
        duration: `${duration}ms`,
      });
      throw error;
    }
  };

  /**
   * POST request that actually "GETs" data from the backend.
   *
   * @param endpoint API endpoint to send the request to.
   * @param data Optional request body payload.
   * @param options Additional fetch options.
   * @returns Response data from the server as type T.
   */
  const post = async <T, U = undefined>(
    endpoint: string = "",
    data?: U,
    options: RequestInit = {},
  ): Promise<T> => {
    const url = `${baseUrl}${endpoint}`;
    const startTime = performance.now();

    loggerUtils.http(`Starting POST request to ${url}`, {
      dataType: typeof data,
      hasData: !!data,
    });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data === undefined ? undefined : JSON.stringify(data),
        ...options,
      });

      const duration = Math.round(performance.now() - startTime);

      if (!response.ok) {
        const error = new Error(
          `Failed to fetch data from ${resourceName}: ${response.statusText}`,
        ) as ApiError;
        error.status = response.status;
        error.statusText = response.statusText;
        error.url = url;
        error.method = "POST";

        loggerUtils.apiCall("POST", url, response.status, duration);
        loggerUtils.error(`POST ${url} failed:`, {
          status: response.status,
          statusText: response.statusText,
          duration: `${duration}ms`,
          requestData: data,
        });

        throw error;
      }

      const responseData = await response.json();
      loggerUtils.apiCall("POST", url, response.status, duration);
      loggerUtils.debug(`POST ${url} successful:`, {
        status: response.status,
        duration: `${duration}ms`,
        received: true,
      });

      return responseData as T;
    } catch (error) {
      const duration = Math.round(performance.now() - startTime);
      loggerUtils.error(`POST ${url} failed:`, error, {
        duration: `${duration}ms`,
        requestData: data,
      });
      throw error;
    }
  };

  const put = async <T, U>(
    endpoint: string = "",
    data: U,
    options: RequestInit = {},
  ): Promise<T> => {
    const url = `${baseUrl}${endpoint}`;
    const startTime = performance.now();

    loggerUtils.http(`Starting PUT request to ${url}`, {
      dataType: typeof data,
      hasData: !!data,
    });

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        ...options,
      });

      const duration = Math.round(performance.now() - startTime);

      if (!response.ok) {
        const error = new Error(
          `Failed to update ${resourceName}: ${response.statusText}`,
        ) as ApiError;
        error.status = response.status;
        error.statusText = response.statusText;
        error.url = url;
        error.method = "PUT";

        loggerUtils.apiCall("PUT", url, response.status, duration);
        loggerUtils.error(`PUT ${url} failed:`, {
          status: response.status,
          statusText: response.statusText,
          duration: `${duration}ms`,
          requestData: data,
        });

        throw error;
      }

      const responseData = await response.json();
      loggerUtils.apiCall("PUT", url, response.status, duration);
      loggerUtils.debug(`PUT ${url} successful:`, {
        status: response.status,
        duration: `${duration}ms`,
        updated: true,
      });

      return responseData;
    } catch (error) {
      const duration = Math.round(performance.now() - startTime);
      loggerUtils.error(`PUT ${url} failed:`, error, {
        duration: `${duration}ms`,
        requestData: data,
      });
      throw error;
    }
  };

  const patch = async <T, U>(
    endpoint: string = "",
    data: U,
    options: RequestInit = {},
  ): Promise<T> => {
    const url = `${baseUrl}${endpoint}`;
    const startTime = performance.now();

    loggerUtils.http(`Starting PATCH request to ${url}`, {
      dataType: typeof data,
      hasData: !!data,
    });

    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        ...options,
      });

      const duration = Math.round(performance.now() - startTime);

      if (!response.ok) {
        const error = new Error(
          `Failed to patch ${resourceName}: ${response.statusText}`,
        ) as ApiError;
        error.status = response.status;
        error.statusText = response.statusText;
        error.url = url;
        error.method = "PATCH";

        loggerUtils.apiCall("PATCH", url, response.status, duration);
        loggerUtils.error(`PATCH ${url} failed:`, {
          status: response.status,
          statusText: response.statusText,
          duration: `${duration}ms`,
          requestData: data,
        });

        throw error;
      }

      const responseData = await response.json();
      loggerUtils.apiCall("PATCH", url, response.status, duration);
      loggerUtils.debug(`PATCH ${url} successful:`, {
        status: response.status,
        duration: `${duration}ms`,
        patched: true,
      });

      return responseData;
    } catch (error) {
      const duration = Math.round(performance.now() - startTime);
      loggerUtils.error(`PATCH ${url} failed:`, error, {
        duration: `${duration}ms`,
        requestData: data,
      });
      throw error;
    }
  };

  const del = async (
    endpoint: string = "",
    options: RequestInit = {},
  ): Promise<void> => {
    const url = `${baseUrl}${endpoint}`;
    console.log("DELETING VIA THE URL", url);
    const startTime = performance.now();

    loggerUtils.http(`Starting DELETE request to ${url}`);

    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        ...options,
      });

      const duration = Math.round(performance.now() - startTime);

      if (!response.ok) {
        const error = new Error(
          `Failed to delete ${resourceName}: ${response.statusText}`,
        ) as ApiError;
        error.status = response.status;
        error.statusText = response.statusText;
        error.url = url;
        error.method = "DELETE";

        loggerUtils.apiCall("DELETE", url, response.status, duration);
        loggerUtils.error(`DELETE ${url} failed:`, {
          status: response.status,
          statusText: response.statusText,
          duration: `${duration}ms`,
        });

        throw error;
      }

      loggerUtils.apiCall("DELETE", url, response.status, duration);
      loggerUtils.debug(`DELETE ${url} successful:`, {
        status: response.status,
        duration: `${duration}ms`,
        deleted: true,
      });
    } catch (error) {
      const duration = Math.round(performance.now() - startTime);
      loggerUtils.error(`DELETE ${url} failed:`, error, {
        duration: `${duration}ms`,
      });
      throw error;
    }
  };

  const request = async <T>(
    method: string,
    endpoint: string = "",
    data?: unknown,
    options: RequestInit = {},
  ): Promise<T> => {
    const url = `${baseUrl}/${resourceName}${endpoint}`;
    const startTime = performance.now();

    loggerUtils.http(`Starting ${method} request to ${url}`, {
      method,
      hasData: !!data,
    });

    try {
      const requestOptions: RequestInit = {
        method: method.toUpperCase(),
        headers: {
          "Content-Type": "application/json",
        },
        ...options,
      };

      if (data && ["POST", "PUT", "PATCH"].includes(method.toUpperCase())) {
        requestOptions.body = JSON.stringify(data);
      }

      const response = await fetch(url, requestOptions);
      const duration = Math.round(performance.now() - startTime);

      if (!response.ok) {
        const error = new Error(
          `${method} ${resourceName} failed: ${response.statusText}`,
        ) as ApiError;
        error.status = response.status;
        error.statusText = response.statusText;
        error.url = url;
        error.method = method.toUpperCase();

        loggerUtils.apiCall(
          method.toUpperCase(),
          url,
          response.status,
          duration,
        );
        loggerUtils.error(`${method} ${url} failed:`, {
          status: response.status,
          statusText: response.statusText,
          duration: `${duration}ms`,
          requestData: data,
        });

        throw error;
      }

      let responseData: T;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        responseData = await response.json();
      } else {
        responseData = null as T;
      }

      loggerUtils.apiCall(method.toUpperCase(), url, response.status, duration);
      loggerUtils.debug(`${method} ${url} successful:`, {
        status: response.status,
        duration: `${duration}ms`,
        hasResponseData: !!responseData,
      });

      return responseData;
    } catch (error) {
      const duration = Math.round(performance.now() - startTime);
      loggerUtils.error(`${method} ${url} failed:`, error, {
        duration: `${duration}ms`,
        requestData: data,
      });
      throw error;
    }
  };

  return {
    get,
    post,
    put,
    patch,
    delete: del,
    request,
  };
};

export { createApiClient };
export type { ApiConfig, ApiError };
