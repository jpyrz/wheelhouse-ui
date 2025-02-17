import apiClient from "./apiClient";

export async function apiRequest<T = any>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  data?: any
): Promise<T> {
  try {
    const response = await apiClient.request<T>({
      url: endpoint,
      method,
      data,
    });
    return response.data;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
}
