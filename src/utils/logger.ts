import { env } from "./env";
import pino, { LoggerOptions } from "pino";

const config: LoggerOptions = {
  level: env.loggingLevel,
  base: {
    env: env.nodeEnv,
    deployEnv: env.deployEnv,
  },
};

export const logger = pino(config);
