# Notification System

## Concept

Construct a flexible notification system that can send notifications through various channels (Email, SMS, Slack, Discord) using a Notification Factory.

## Usefulness

- **Unified Notification Sending:** Clients can send notifications through various channels using a consistent interface without worrying about the different sending mechanisms and validations.
- **Easy Extension:** New notification channels can be added effortlessly without altering the existing client code.
- **Configurable Channels:** The system can dynamically select notification channels based on different message types or user preferences.

## Usage

### Sending Notifications

Sending a notification is reduced to a single function call, where the notification type, message, and specific options for each channel type are specified:

```typescript
import { sendNotification, Notify } from "./notification";

sendNotification(Notify.Email, "This is an email notification", {
  emailAddress: "user@example.com",
});
sendNotification(Notify.SMS, "This is an SMS notification", {
  phoneNumber: "123-456-7890",
});
```

### Extending with New Notification Types

To introduce new notification channels into the system, define their properties and behaviors in `notification.ts` and extend the `createNotification` function to support the new type.

## Code Structure

- **`notification.ts`**
  - Contains the core logic for defining, creating, and sending notifications.
  - `Notification`: Interface defining the basic structure of a notification type.
  - `NotificationFactory`: Interface defining the factory for creating notifications.
  - `sendNotification`: A function that provides a unified interface to send notifications through various channels.
- **`client.ts`**
  - Demonstrates how to utilize the notification system to send messages through different channels.

## Future Improvements

- **Integrate Real Sending Logic:** Implement the actual logic to send notifications via APIs or other methods in respective notification classes.
- **Enhance Validation:** Improve validation logic for different notification options like email format, API key validity, etc.
- **Add More Notification Types:** New notification channels can be added following the established pattern.

## Contributing

Contributions to enhance the notification system are welcomed! Feel free to submit issues or pull requests for improvements, enhancements, or bug fixes.
