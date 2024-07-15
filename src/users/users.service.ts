import { Injectable, NotFoundException, Param, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role.toUpperCase())

      if (!rolesArray.length) {
        throw new NotFoundException("User role not found")
      }
    }
    return this.users
  }

  findOne(id: number) {

    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException("User not found.")
    }

    return user
  }

  create(user: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updatedUser: UpdateUserDto) {
    this.users = this.users.map(user => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }


}
