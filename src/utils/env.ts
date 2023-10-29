export const env = {
  loggingLevel: process.env.LOGGING_LEVEL || "info",
  nodeEnv: process.env.NODE_ENV,
  deployEnv: process.env.DEPLOY_ENV || "local",
  pageSize: process.env.PAGE_SIZE ? parseInt(process.env.PAGE_SIZE) : 10,
};
