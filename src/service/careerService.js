import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Career Analysis Service
export const careerService = {
  // Submit form for career analysis
  analyzeCareer: async (formData) => {
    try {
      const response = await api.post("/analyze-career", formData);
      return response.data;
    } catch (error) {
      console.error("Error analyzing career:", error);
      throw error.response?.data || { error: "Network error" };
    }
  },

  // Get sample form structures
  getSampleForms: async () => {
    try {
      const response = await api.get("/sample-forms");
      return response.data;
    } catch (error) {
      console.error("Error getting sample forms:", error);
      throw error.response?.data || { error: "Network error" };
    }
  },

  // Health check
  checkHealth: async () => {
    try {
      const response = await api.get("/health");
      return response.data;
    } catch (error) {
      console.error("Error checking API health:", error);
      throw error.response?.data || { error: "Network error" };
    }
  },
};

export default careerService;
