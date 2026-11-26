
const API_URL = import.meta.env.VITE_API_URL;

console.log("Frontend API URL:", API_URL);

const api = async (endpoint, options = {}) => {
  const url = `${API_URL}${endpoint}`;

  console.log("Requesting:", url);

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    credentials: "include",
  });

  const contentType = response.headers.get("content-type");
  const responseText = await response.text();

  console.log("Response status:", response.status);
  console.log("Response content type:", contentType);
  console.log("Response body:", responseText);

  if (!contentType?.includes("application/json")) {
    throw new Error(
      `Expected JSON but received ${contentType || "unknown content type"}`
    );
  }

  const data = JSON.parse(responseText);

  if (!response.ok) {
    throw new Error(data.message || "API request failed");
  }

  return data;
};

export default api;
