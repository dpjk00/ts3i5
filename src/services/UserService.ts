import { User, UserRole } from '../models/User';

class UserService {
    private users: User[] = [
      new User(1, 'admin', '123', UserRole.ADMIN),
      new User(2, 'devops', '123', UserRole.DEVOPS),
      new User(3, 'developer', '123', UserRole.DEVELOPER),
    ];

    get_users(): User[] {
      return this.users;
    }

    get_users_no_admin(): User[] {
      const usersNoAdmin = []
      for (let i = 0; i < this.users.length - 1; i++)
        usersNoAdmin[i] = this.users[i + 1]     
      return usersNoAdmin
    }
}

export default new UserService();
