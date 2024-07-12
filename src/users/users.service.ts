import { Injectable, Param, ParseIntPipe } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      "id": 1,
      "name": 'Leanne Graham',
      "email": "Sincere@april.biz",
      "role": "INTERN",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "Shanna@melissa.tv",
      "role": "INTERN",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "Nathan@yene.com",
      "role": "ADMIN",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "hhh@mmm.fdf",
      "role": "ADMIN",
    },
    {
      "id": 5,
      "name": "Israel Olaleye",
      "email": "mrolaleyeisrael@gmail.com",
      "role": "ENGINEER",
    },
  ];

  findAll(role?: 'intern' | 'admin' | 'all') {
    return role
      ? this.users.filter((user) => user.role === role.toUpperCase())
      : this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: { name: string, email: string, role: 'intern' | 'admin' | 'engineer' }) {
    const newUser = {
      id: this.users.length + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(@Param('id', ParseIntPipe) id: number, updatedUser: { name?: string, email?: string, role?: 'intern' | 'admin' | 'engineer' }) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...updatedUser,
        };
      }
      return user;
    });
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }


}
