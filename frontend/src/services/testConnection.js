
import api from "./api";

const testConnection = async () => {
  try {
    const result = await api("/health");
    console.log("Backend connected successfully:", result);
  } catch (error) {
    console.error("Backend connection failed:", error.message);
  }
};

export default testConnection;
