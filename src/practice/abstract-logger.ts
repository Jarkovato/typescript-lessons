abstract class AbsctractLogger {
  abstract log(message: string): void;

  printDate() {
    console.log(new Date());
  }
}

class ExtendedLogger extends AbsctractLogger {
  log(message: string) {
    console.log(message);
  }

  logWithDate(): void {
    this.log('message');
    this.printDate();
  }
}

export default ExtendedLogger;