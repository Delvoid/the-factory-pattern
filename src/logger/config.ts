import { LoggerTypes } from './types';

export type LoggerConfig = {
  [type in LoggerTypes]: {
    filename?: string;
    endpoint?: string;
  };
};

export const loggerConfig: LoggerConfig = {
  [LoggerTypes.Console]: {},
  [LoggerTypes.File]: {
    filename: 'logfile.txt',
  },
  [LoggerTypes.Network]: {
    endpoint: 'http://localhost:3000/logs',
  },
};
