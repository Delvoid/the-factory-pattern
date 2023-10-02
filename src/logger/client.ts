import { createLogger } from './logger';
import { LoggerTypes, LogLevel, CustomOptions } from './types';

const logMessage = (
  loggerType: LoggerTypes,
  message: string,
  level: LogLevel,
  customOptions?: CustomOptions
): void => {
  const logger = createLogger(loggerType, customOptions);
  switch (level) {
    case 'log':
      logger.log(message);
      break;
    case 'info':
      logger.info(message);
      break;
    case 'error':
      logger.error(message);
      break;
    default:
      throw new Error('Invalid log level');
  }
};

// example console logs
logMessage(LoggerTypes.Console, 'This is a log message', LogLevel.Log);
logMessage(LoggerTypes.Console, 'This is an info message', LogLevel.Info);
logMessage(LoggerTypes.Console, 'This is an error message', LogLevel.Error);

// example file logs
logMessage(LoggerTypes.File, 'This is a log message', LogLevel.Log);

// example using custom filename
logMessage(LoggerTypes.File, 'This is an info message', LogLevel.Info, {
  filename: 'logfile2.txt',
});

logMessage(LoggerTypes.File, 'This is an error message', LogLevel.Error);
