export enum LoggerTypes {
  Console = 'console',
  File = 'file',
  Network = 'network',
}

export enum LogLevel {
  Log = 'log',
  Info = 'info',
  Error = 'error',
}

export type CustomOptions = {
  filename?: string;
  endpoint?: string;
};

export type Logger = {
  log: (message: string) => void;
  info: (message: string) => void;
  error: (message: string) => void;
};
