
# Logger System

## Concept

The Logger System is developed to provide a unified interface for logging messages while allowing flexibility in message destination, which can be the console, a file, or a network endpoint. The system employs a **Factory Pattern** to create different logger types, such as `ConsoleLogger` and `FileLogger`, dynamically based on the configuration or runtime requirements.

## Usefulness

The system enables switching between different logging mechanisms without altering the client code. By merely changing the logger type or configuration, messages can be redirected to different logging destinations, providing great flexibility and scalability in handling log messages across various environments and scenarios.

## Getting Started

### Logger Types

The Logger System supports the following logger types:

- **ConsoleLogger**: Logs messages to the console.
- **FileLogger**: Writes log messages to a file.
- **NetworkLogger**: Sends log messages to a network endpoint.

### Usage

Here's a basic usage guide for implementing the Logger System in your project:

```typescript
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


// Example: Logging to Console
logMessage(LoggerTypes.Console, "This is a log message", LogLevel.Log);

// Example: Logging to File
logMessage(LoggerTypes.File, "This is an info message", LogLevel.Info);

// Example: Logging to Network
logMessage(LoggerTypes.Network, "This is an error message", LogLevel.Error);
```

### Customization

You can customize the logging mechanism by providing custom options:

```typescript
// Logging to a custom file
logMessage(LoggerTypes.File, "This is an info message", LogLevel.Info, {
  filename: "custom_logfile.txt",
});

// Logging to a custom network endpoint
logMessage(LoggerTypes.Network, "This is an error message", LogLevel.Error, {
  endpoint: "https://custom-endpoint.com/log",
});
```

## Configuration

Logging configurations, such as default file paths or network endpoints, can be defined in the `config.ts` file. The configurations defined in this file will be utilized by default unless overridden by custom options during logger creation.

### Example Configuration

```typescript
export const loggerConfig = {
  console: {},
  file: {
    filename: "logfile.txt",
  },
  network: {
    endpoint: "https://example.com/log",
  },
};
```

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the Logger System.

