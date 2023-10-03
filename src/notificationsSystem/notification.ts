interface Notification {
  send: (message: string) => void;
}

interface NotificationFactory<T> {
  createNotification: (options: T) => Notification;
}

interface EmailOptions {
  emailAddress: string;
}

interface SMSOptions {
  phoneNumber: string;
}

interface SlackOptions {
  channel: string;
}

interface DiscordOptions {
  apiKey: string;
  channel: string;
}

class EmailNotification implements Notification {
  constructor(private options: EmailOptions) {
    if (!this.isValidEmail(options.emailAddress)) {
      throw new Error('Invalid email address');
    }
  }
  private isValidEmail(email: string): boolean {
    // Implement email validation logic here...
    console.log(`Validating email address: ${email}`);
    return true;
  }
  async send(message: string): Promise<void> {
    try {
      console.log(`Email sent to ${this.options.emailAddress}: ${message}`);
      // Implement email sending logic here...
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Failed to send email: ${error.message}`);
      }
    }
  }
}

class SMSNotification implements Notification {
  constructor(private options: SMSOptions) {}
  send(message: string): void {
    // validate and send SMS
    console.log(`SMS sent to ${this.options.phoneNumber}: ${message}`);
  }
}

class SlackNotification implements Notification {
  constructor(private options: SlackOptions) {}
  send(message: string): void {
    // validate and send Slack message
    console.log(`Slack message sent to ${this.options.channel}: ${message}`);
  }
}

class DiscordNotification implements Notification {
  constructor(private options: DiscordOptions) {}
  send(message: string): void {
    console.log(
      // validate and send Discord message
      `Discord message sent to ${this.options.channel} with API Key ${this.options.apiKey}: ${message}`
    );
  }
}

class EmailNotificationFactory implements NotificationFactory<EmailOptions> {
  createNotification(options: EmailOptions): Notification {
    return new EmailNotification(options);
  }
}

class SMSNotificationFactory implements NotificationFactory<SMSOptions> {
  createNotification(options: SMSOptions): Notification {
    return new SMSNotification(options);
  }
}

class SlackNotificationFactory implements NotificationFactory<SlackOptions> {
  createNotification(options: SlackOptions): Notification {
    return new SlackNotification(options);
  }
}

class DiscordNotificationFactory implements NotificationFactory<DiscordOptions> {
  createNotification(options: DiscordOptions): Notification {
    return new DiscordNotification(options);
  }
}

type NotificationOptionsMap = {
  [Notify.Email]: EmailOptions;
  [Notify.SMS]: SMSOptions;
  [Notify.Slack]: SlackOptions;
  [Notify.Discord]: DiscordOptions;
};
export enum Notify {
  Email = 'Email',
  SMS = 'SMS',
  Slack = 'Slack',
  Discord = 'Discord',
}

export const NotificationFactories: {
  [key in Notify]: NotificationFactory<NotificationOptionsMap[key]>;
} = {
  [Notify.Email]: new EmailNotificationFactory(),
  [Notify.SMS]: new SMSNotificationFactory(),
  [Notify.Slack]: new SlackNotificationFactory(),
  [Notify.Discord]: new DiscordNotificationFactory(),
};

export const createNotification = <T extends Notify>(
  type: T,
  options: NotificationOptionsMap[T]
): Notification => {
  return NotificationFactories[type].createNotification(options);
};

export const sendNotification = <T extends Notify>(
  type: T,
  message: string,
  options: NotificationOptionsMap[T]
): void => {
  const notification = createNotification(type, options);
  notification.send(message);
};
