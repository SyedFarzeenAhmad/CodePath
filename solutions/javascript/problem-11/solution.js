function createAccount() {
    let balance = 0;
    return {
      deposit(amount) {
        balance += amount;
        return { success: true, balance };
      },
      withdraw(amount) {
        if (balance >= amount) {
          balance -= amount;
          return { success: true, balance };
        }
        return { success: false, balance, message: 'Insufficient funds' };
      },
      getBalance() {
        return balance;
      }
    };
  }

const account = createAccount();
console.log(account.deposit(100));
