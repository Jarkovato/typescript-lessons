const a: number = Math.random() > 0.5 ? 1 : 0;

interface HTTPres<T extends 'success' | 'error'> {
  code: number;
  data: T extends 'success' ? string : Error;
}

const success: HTTPres<'success'> = {
  code: 200,
  data: 'done'
}

const error: HTTPres<'error'> = {
  code: 404,
  data: new Error('err'),
}

class User {
  id: string;
}

class DbUser {
  dbId: number;
}

type UserOrDbUser<T extends number | string> = T extends number ? DbUser : User;

function getUser<T extends string | number>(id: T): UserOrDbUser<T> {
  if (typeof id === 'number') {
    return new DbUser() as UserOrDbUser<T>;
  } else {
    return new User() as UserOrDbUser<T>;
  } 
}