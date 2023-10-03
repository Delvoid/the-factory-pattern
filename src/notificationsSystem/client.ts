import { sendNotification, Notify } from './notification';

sendNotification(Notify.Email, 'This is an email notification', {
  emailAddress: 'user@example.com',
});

sendNotification(Notify.SMS, 'This is an SMS notification', {
  phoneNumber: '123-456-7890',
});

sendNotification(Notify.Slack, 'This is a Slack notification', {
  channel: 'general',
});

sendNotification(Notify.Discord, 'This is a Discord notification', {
  apiKey: 'your-api-key',
  channel: 'general',
});
