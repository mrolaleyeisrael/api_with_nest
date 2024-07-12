import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  findAll(@Query('role') role?: 'intern' | 'admin' | 'all') {
    return this.usersService.findAll(role);

  }
  @Get('intern')
  findAllInterns() {
    return this.usersService.findAll('intern');
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
    }
  @Patch(':id')
  update(@Param('id') id: number, @Body() userUpdate: UpdateUserDto) {
    return this.usersService.update(id, userUpdate);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
