export const env = {
  loggingLevel: process.env.LOGGING_LEVEL || "info",
  nodeEnv: process.env.NODE_ENV,
  deployEnv: process.env.DEPLOY_ENV || "local",
  pageSize: process.env.NEXT_PUBLIC_PAGE_SIZE
    ? parseInt(process.env.NEXT_PUBLIC_PAGE_SIZE)
    : 10,
};
