function strip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2); //number
  } else return x.trim(); //string
}

// object key check
function logObject(obj: { a: number } | { b: number }) {
  if ('a' in obj) {
    //do something with obj.a
  }
}

function logMultipleIds(a: string | number, b: string | boolean) {
  if (a === b) {
    // a, b - strings
  } else {
    //check type
  }
}


//
class MyResponse {
  header = "response header";
  result = "response result";
}

class MyError {
  header = "error header";
  message = "error result";
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + res.result,
    };
  } else {
    return {
      info: res.header + res.message,
    };
  }
}

//
type AlertType = "succes" | "danger" | "warning";

function setAlertType(type: AlertType) {
  //...
}
setAlertType('succes')
setAlertType('danger')
setAlertType('warning')