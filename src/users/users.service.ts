import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { User } from './entities/user.entity.js';

@Injectable()
export class UsersService {

  private users: User[] = [];
  private nextId = 1;

  create(createUserDto: CreateUserDto) {
    const user: User = {...createUserDto, id: this.nextId++ };
    this.users.push(user);
    return {status: 201, message: 'User created successfully', data: user};

  }

  findAll() {
    return {status: 200, message: 'Users retrieved successfully', data: this.users};
  }

  getUserById(id: number) {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return {status: 200, message: 'User retrieved successfully', data: user};
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    const user = this.getUserById(id).data;
    Object.assign(user, updateUserDto);
    return {status: 200, message: 'User updated successfully', data: user};
  }

  deleteUser(id: number) {
    const user = this.getUserById(id).data;
    this.users = this.users.filter(u => u.id !== id);
    return {status: 200, message: 'User deleted successfully', data: user};
  }
}
