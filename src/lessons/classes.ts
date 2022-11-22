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
  protected voice: string = "";
  public color: string = "black";

  private go(): void {
    console.log("go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
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
