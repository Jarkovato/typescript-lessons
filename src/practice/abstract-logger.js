"use strict";
class AbsctractLogger {
    printDate() {
        console.log(new Date());
    }
}
class ExtendedLogger extends AbsctractLogger {
    log(message) {
        console.log(message);
    }
    logWithDate() {
        this.log('message');
        this.printDate();
    }
}
