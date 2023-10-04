type PayPalOptions = {
  clientId: string;
  clientSecret: string;
};

type CreditCardOptions = {
  cardNumber: string;
  expiryDate: Date;
  cvv: string;
};

type BankTransferOptions = {
  accountNumber: string;
  bankCode: string;
};

type PaymentOptions = PayPalOptions | CreditCardOptions | BankTransferOptions;

interface Payment {
  makePayment: (amount: number) => void;
}

export function createPayPalPayment(options: PayPalOptions): Payment {
  return {
    makePayment: (amount: number) => {
      console.log(`Configuring paypal with ${options.clientId} and ${options.clientSecret}`);
      console.log(`Paying ${amount} using PayPal`);
      // logic to make payment using PayPal
    },
  };
}
export function createCreditCardPayment(options: CreditCardOptions): Payment {
  return {
    makePayment: (amount: number) => {
      console.log(`Validating credit card with ${options.cardNumber} and ${options.expiryDate}`);
      console.log(`Paying ${amount} using Credit Card`);
      // logic to make payment using Credit Card
    },
  };
}
export function createBankTransferPayment(options: BankTransferOptions): Payment {
  return {
    makePayment: (amount: number) => {
      console.log(`Validating bank account with ${options.accountNumber} and ${options.bankCode}`);
      console.log(`Paying ${amount} using Bank Transfer`);
      // logic to make payment using Bank Transfer
    },
  };
}

type PayMethod = 'PayPal' | 'CreditCard' | 'BankTransfer';

export const createPaymentMethod = (method: PayMethod, options: PaymentOptions): Payment => {
  switch (method) {
    case 'PayPal':
      return createPayPalPayment(options as PayPalOptions);
    case 'CreditCard':
      return createCreditCardPayment(options as CreditCardOptions);
    case 'BankTransfer':
      return createBankTransferPayment(options as BankTransferOptions);
    default:
      throw new Error('Invalid payment method');
  }
};

export const makePayment = (method: PayMethod, amount: number, options: PaymentOptions): void => {
  const payment = createPaymentMethod(method, options);
  payment.makePayment(amount);
};
