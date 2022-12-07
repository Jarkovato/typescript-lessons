class Typescript {
  version: number;
  author: string;
  // overload
  constructor();
  constructor(version: number);
  constructor(author: string);
  constructor(versionOrAuthor?: number | string) {
    if (typeof versionOrAuthor === "number") {
      this.version = versionOrAuthor;
    }
  }

  info(name: string): string {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

const ts0 = new Typescript();
const ts1 = new Typescript(0);
const ts2 = new Typescript("Me");

class Car {
  readonly model: string;
  readonly numberOfWheels: number = 4;

  constructor(theModel: string) {
    this.model = theModel;
  }
}
//or
class Cars {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}

//modificators - protected, public, private
class Animal {
  public color: string = "black";
  // protected aviable in extends classes
  protected voice: string = "";
  // private aviable only in parent class
  private type: string = "general";
  #private: number;
  // clear private js

  go(): void {
    console.log("go");
  }
}

class Cat extends Animal {
  constructor() {
    super();
    // can use Animal constructor
    // and cat constructor
  }

  public setVoice(voice: string): void {
    this.voice = voice;
  }

  // we can override method
  override go(): void {
    // super.go(); // we can use Animal method without override
    console.log("a cat go");
  }
}

const cat = new Cat();

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("component on render");
  }
  info(): string {
    return "info";
  }
}

// not initialized property
class Admin {
  role?: string;
}

const admin = new Admin();
admin.role = "master";

// get/set

class Client {
  _login: string;
  password: string;

  constructor(login: string) {
    this.login = login;
  }

  get login(): string {
    return this._login;
  }

  set login(login: string) {
    this._login = login;
  }
}

// we can extend Array and use his methods
class Clients extends Array<Client> {
  filterByLogin(login: string) {
    return this.filter((c) => (c.login = login));
  }
}

const clients = new Clients();
clients.push(new Client("client"));

// implement with interface
interface ILogger {
  log(record: string): void;
  error(error: string): void;
}

interface IDeletable {
  delete(): void;
}

class Logger implements ILogger, IDeletable {
  log(record: string): void {
    console.log(record);
  }
  error(error: string): void {
    throw new Error(error);
  }

  delete(): void {
    // delete action
  }
}

// composition
class Payment {
  date: Date;
}

class ClientWithPayment {
  client: Client;
  payment: Payment;

  constructor(client: Client, payment: Payment) {
    this.client = client;
    this.payment = payment;
  }
}
