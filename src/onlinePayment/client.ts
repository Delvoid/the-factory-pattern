import { makePayment } from './payment';

makePayment('PayPal', 100, { clientId: 'abc', clientSecret: '123' });

makePayment('CreditCard', 100, {
  cardNumber: '1234-5678-9012-3456',
  expiryDate: new Date('2025-01-01'),
  cvv: '123',
});

makePayment('BankTransfer', 300, { accountNumber: '123', bankCode: '123' });
