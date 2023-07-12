interface Role {
  name: string;
}

interface User {
  name: string;
  roles: Role[];
}

const user: User = {
  name: 'Вася',
  roles: []
}

const nameUser: User['name'] = user['name'];
type rolesType = User['roles'];

const roleNames = 'roles';
type rolesType2 = User[typeof roleNames];

type roleType = User['roles'][number]; // type Role

const roles = ['admin', 'user', 'vip'] as const;