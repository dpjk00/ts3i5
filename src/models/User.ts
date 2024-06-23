enum UserRole {
  ADMIN = 'admin',
  DEVOPS = 'devops',
  DEVELOPER = 'developer'
}

class User {
  id: number;
  first_name: string;
  last_name: string;
  role: UserRole;

  constructor(id: number, first_name: string, last_name: string, role: UserRole) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.role = role
  }
}

export { User, UserRole };