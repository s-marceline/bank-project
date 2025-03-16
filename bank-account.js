//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this._balance = 0;
    this.isClosed = true;
  }

  open() {
    if (!this.isClosed) {
        throw new ValueError('Счёт уже открыт');}
    this._balance = 0;
    this.isClosed = false;
  }

  close() {
    if (this.isClosed) {
        throw new ValueError('Счёт уже закрыт');}
    this.isClosed = true;
  }

  deposit(d) {
    if (this.isClosed) {
      throw new ValueError('Операции невозможны: счёт закрыт');}
    if (d <= 0) {
      throw new ValueError('Сумма депозита должна быть положительной');}
    this._balance += d;
  }

  withdraw(w) {
    if (this.isClosed) {
      throw new ValueError('Операции невозможны: счёт закрыт');}
    if (w <= 0) {
      throw new ValueError('Сумма снятия должна быть положительной');}
    if (this._balance < w) {
      throw new ValueError('Недостаточно средств');} 
    this._balance -= w;
  }

  get balance() {
    if (this.isClosed) {
        throw new ValueError('Операции невозможны: счёт закрыт');}
    return this._balance;
  }

  set balance(value) {
    throw new ValueError('Нельзя изменять баланс');}

}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
