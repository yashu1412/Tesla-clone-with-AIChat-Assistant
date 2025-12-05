export const ACCOUNT_TYPE = {
  Customer: "customer",
  Employee: "employee",
  ADMIN: "admin",
}

export const COURSE_STATUS = {
  DRAFT: "Draft",
  PUBLISHED: "Published",
}

// Common API base URL for all frontend data fetching.
// Configure this in your Vite env as VITE_API_BASE_URL, e.g.:
// VITE_API_BASE_URL="https://your-backend-domain.com/api/v1"
export const API_BASE_URL: string =
  (import.meta as any).env.VITE_API_BASE_URL || "http://localhost:4000/api/v1" 