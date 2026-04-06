export const LOG_LEVELS = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
} as const;

export type LogLevel = keyof typeof LOG_LEVELS;
const LOG_COLORS: Record<LogLevel, string> = {
  error: "#ff4444",
  warn: "#ffaa00",
  info: "#00aa00",
  http: "#aa00aa",
  debug: "#888888",
};
const LOG_BG_COLORS: Record<LogLevel, string> = {
  error: "#2d1b1b",
  warn: "#2d2519",
  info: "#1b2d1b",
  http: "#2b1b2d",
  debug: "#1e1e1e",
};
const getLogLevel = (): LogLevel => {
  const environment = import.meta.env.VITE_ENVIRONMENT || "PROD";

  switch (environment.toUpperCase()) {
    case "DEV":
    case "DEVELOPMENT":
      return "debug";
    case "TEST":
    case "TESTING":
      return "warn";
    case "PROD":
    case "PRODUCTION":
    default:
      return "info";
  }
};
const getCurrentLogLevel = (): number => {
  return LOG_LEVELS[getLogLevel()];
};
const shouldLog = (level: LogLevel): boolean => {
  return LOG_LEVELS[level] <= getCurrentLogLevel();
};
const formatTimestamp = (): string => {
  const now = new Date();
  return now.toISOString().replace("T", " ").slice(0, 19);
};
const getConsoleStyle = (level: LogLevel): string[] => {
  return [
    `color: ${LOG_COLORS[level]}; background-color: ${LOG_BG_COLORS[level]}; padding: 2px 6px; border-radius: 3px; font-weight: bold;`,
    "color: inherit; background: inherit; padding: 0; font-weight: normal;",
  ];
};
const formatMessage = (level: LogLevel, ...args: unknown[]): void => {
  if (!shouldLog(level)) return;

  const timestamp = formatTimestamp();
  const [levelStyle, messageStyle] = getConsoleStyle(level);

  // Format the first argument as the main message if it's a string
  const firstArg = args[0];
  const isFirstArgString = typeof firstArg === "string";

  const consoleArgs: unknown[] = [
    `%c[${timestamp}] ${level.toUpperCase()}%c${isFirstArgString ? " " + firstArg : ""}`,
    levelStyle,
    messageStyle,
  ];

  // Add remaining arguments
  if (args.length > 1 || !isFirstArgString) {
    const additionalArgs = isFirstArgString ? args.slice(1) : args;
    consoleArgs.push(...additionalArgs);
  }

  switch (level) {
    case "error":
      console.error(...consoleArgs);
      break;
    case "warn":
      console.warn(...consoleArgs);
      break;
    case "debug":
      console.log(...consoleArgs);
      break;
    default:
      console.log(...consoleArgs);
  }
};

const error = (...args: unknown[]): void => {
  formatMessage("error", ...args);
};

const warn = (...args: unknown[]): void => {
  formatMessage("warn", ...args);
};

const info = (...args: unknown[]): void => {
  formatMessage("info", ...args);
};

const http = (...args: unknown[]): void => {
  formatMessage("http", ...args);
};

const debug = (...args: unknown[]): void => {
  formatMessage("debug", ...args);
};

const log = (level: LogLevel, ...args: unknown[]): void => {
  formatMessage(level, ...args);
};

const getLevel = (): LogLevel => {
  return getLogLevel();
};

const isLevelEnabled = (level: LogLevel): boolean => {
  return shouldLog(level);
};

const logger = {
  error,
  warn,
  info,
  http,
  debug,
  log,
  getLevel,
  isLevelEnabled,
};
export const loggerUtils = {
  error: (...args: unknown[]) => {
    logger.error(...args);
  },

  warn: (...args: unknown[]) => {
    logger.warn(...args);
  },

  info: (...args: unknown[]) => {
    logger.info(...args);
  },

  http: (...args: unknown[]) => {
    logger.http(...args);
  },

  debug: (...args: unknown[]) => {
    logger.debug(...args);
  },
  apiCall: (
    method: string,
    url: string,
    status?: number,
    duration?: number,
  ) => {
    const message = `${method.toUpperCase()} ${url}`;
    const meta = {
      status,
      duration: duration ? `${duration}ms` : undefined,
      timestamp: new Date().toISOString(),
    };

    if (status && status >= 400) {
      logger.error(`API Error: ${message}`, meta);
    } else {
      logger.http(`API Call: ${message}`, meta);
    }
  },

  componentRender: (componentName: string, props?: Record<string, unknown>) => {
    logger.debug(`Component Rendered: ${componentName}`, {
      props,
      timestamp: new Date().toISOString(),
    });
  },

  userAction: (action: string, details?: Record<string, unknown>) => {
    logger.info(`User Action: ${action}`, {
      ...details,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    });
  },

  performanceMetric: (name: string, value: number, unit: string = "ms") => {
    logger.info(`Performance: ${name}`, {
      value,
      unit,
      timestamp: new Date().toISOString(),
    });
  },

  // Error boundary logging
  errorBoundary: (
    error: Error,
    errorInfo: Record<string, unknown>,
    componentStack?: string,
  ) => {
    logger.error("React Error Boundary Caught Error", {
      error: {
        message: error.message,
        stack: error.stack,
        name: error.name,
      },
      errorInfo,
      componentStack,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    });
  },
  logEnvironmentInfo: () => {
    const environment = import.meta.env.VITE_ENVIRONMENT || "PROD";
    const awsBaseUrl = import.meta.env.VITE_AWS_BASE_URL || "None provided";
    const isDev = environment.toUpperCase() === "DEV";

    logger.info("Application Started", {
      environment,
      logLevel: getLogLevel(),
      isDevelopment: isDev,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      screen: {
        width: window.screen.width,
        height: window.screen.height,
      },
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      awsBaseUrl,
    });
  },
  group: (label: string, callback: () => void) => {
    if (shouldLog("debug")) {
      console.group(`🗂️ ${label}`);
      callback();
      console.groupEnd();
    } else {
      callback();
    }
  },
  table: (data: unknown[], label?: string) => {
    if (shouldLog("debug")) {
      if (label) {
        logger.debug(`Table: ${label}`);
      }
      console.table(data);
    }
  },
  time: (label: string) => {
    if (shouldLog("debug")) {
      console.time(label);
    }
  },

  timeEnd: (label: string) => {
    if (shouldLog("debug")) {
      console.timeEnd(label);
    }
  },
  assert: (
    condition: boolean,
    message: string,
    meta?: Record<string, unknown>,
  ) => {
    if (!condition) {
      logger.error(`Assertion Failed: ${message}`, meta);
    }
  },
  count: (label: string) => {
    if (shouldLog("debug")) {
      console.count(label);
    }
  },
  trace: (message: string, meta?: Record<string, unknown>) => {
    if (shouldLog("debug")) {
      logger.debug(message, meta);
      console.trace();
    }
  },
};
export { logger };
export const isProduction = () => {
  const env = import.meta.env.VITE_ENVIRONMENT || "PROD";
  return env.toUpperCase() === "PROD" || env.toUpperCase() === "PRODUCTION";
};

export const isDevelopment = () => {
  const env = import.meta.env.VITE_ENVIRONMENT || "PROD";
  return env.toUpperCase() === "DEV" || env.toUpperCase() === "DEVELOPMENT";
};

export const isTesting = () => {
  const env = import.meta.env.VITE_ENVIRONMENT || "PROD";
  return env.toUpperCase() === "TEST" || env.toUpperCase() === "TESTING";
};
export default loggerUtils;
