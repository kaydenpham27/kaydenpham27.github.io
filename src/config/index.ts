export const config = {
  useStaticData: import.meta.env.VITE_USE_STATIC_DATA === "true",
  awsBaseUrl: import.meta.env.VITE_AWS_BASE_URL || "",
  apiBaseUrl:
    import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_AWS_BASE_URL,

  // Development helpers
  environment:
    import.meta.env.VITE_APP_ENVIRONMENT ||
    (import.meta.env.VITE_ENVIRONMENT as "DEV" | "PROD"),
  AWS_BASE_URL: import.meta.env.VITE_AWS_BASE_URL || "None provided",
} as const;

export const shouldUseStaticData = () => config.useStaticData;
